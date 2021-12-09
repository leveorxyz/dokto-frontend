import {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Client as ConversationsClient, Conversation } from "@twilio/conversations";
import { Room as RoomType } from "twilio-video";
import { useRecoilValue } from "recoil";
import { uniqBy } from "lodash";
import { AxiosInstance } from "axios";
import Chat from "../../components/chat";
import RoomBreadcrumb from "../../components/call/RoomBreadcrumb";
import PatientLanding from "../../components/call/PatientLanding";
import DoctorLanding from "../../components/call/DoctorLanding";
import { AxiosContext } from "../../contexts/AxiosContext";
import TwilioUtils from "../../components/call/utils/TwilioUtils";
import useTwilioToken from "../../hooks/twilio/useTwilioToken";
import SideBar from "../../components/call/SideBar";
import Videos from "../../components/call/Videos";
import authAtom from "../../atoms/auth.atom";
import { twilioTokenAtom } from "../../components/call/atoms";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import useUpdateConnectionState, { ConnectionStateType } from "../../hooks/calls/useUpdateConnectionState";

export default function VideoCalls() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const [room, setRoom] = useState<RoomType | null>(null);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [connectionState, setConnectionState] = useState<ConnectionStateType>({
    status: "default",
    statusString: "connecting",
  });
  const updateConnectionState = useUpdateConnectionState();
  // eslint-disable-next-line
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationRoom, setCurrentConversationRoom] = useState<Conversation | null>(null);
  const { token, roomName } = useRecoilValue(twilioTokenAtom);
  const authState = useRecoilValue(authAtom);
  // Check user is doctor
  const isDoctor = useMemo(() => authState?.user?.userType === "DOCTOR", [authState]);
  // Check user is patient
  const isPatient = useMemo(() => authState?.user?.userType === "PATIENT", [authState]);

  const [searchParams] = useSearchParams();
  const queryRoomName = isDoctor ? authState.user?.username : searchParams.get("doctor");

  const {
    isOpen: isChatWindowOpen,
    onOpen: openChatWindow,
    onClose: closeChatWindow,
  } = useDisclosure();

  room?.on("disconnected", () => {
    setRoom(null);
    setCallEnded(true);
    // TODO: Alert patient that call has ended.
  });

  // Conversation initialization handler
  const initConversations = useCallback(() => {
    const client = new ConversationsClient(token);
    setConnectionState({ status: "default", statusString: "connecting" });

    updateConnectionState({ client, setConnectionState });

    client.on("conversationJoined", (conversation) => {
      setConversations((prevState) => uniqBy([...prevState, conversation], "sid"));
    });

    client.on("conversationLeft", (thisConversation) => {
      setConversations(
        (prevState) => [...prevState.filter((it) => it.sid !== thisConversation.sid)],
      );
      if (isPatient) {
        // connect patient doctor room
        TwilioUtils.connectToRoom(token, queryRoomName || roomName).then((currentRoom) => {
          setRoom(currentRoom);
        });
      }
    });
    // eslint-disable-next-line
  }, [token]);

  // Video room join handler
  const handleJoin = () => {
    if (token && queryRoomName) {
      TwilioUtils.connectToRoom(token, queryRoomName).then((currentRoom) => {
        setRoom(currentRoom);
      });
    }
  };

  useEffect(() => {
    if (token && queryRoomName) {
      // If doctor, join both waiting & doctor room
      if (isDoctor) {
        // connect to doctor room
        initConversations();
      } else if (isPatient) {
        initConversations();
        // Create conversation room for patient waiting
        axios?.post("twilio/create-conversation/", { doctor_username: queryRoomName })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [token, queryRoomName, initConversations, axios, isDoctor, isPatient]);

  useEffect(() => {
    if (conversations.length > 0) {
      setCurrentConversationRoom(conversations[0]);
    }
  }, [conversations]);

  const {
    isLoading,
  } = useTwilioToken({
    identity: `${authState.user?.id}_${authState.user?.fullName}`,
    // roomName: `${authState.user?.id}_${authState.user?.fullName}` ?? "",
    roomName: queryRoomName || "doctor",
  });

  if (isLoading) {
    return (
      <Flex minHeight="100vh">
        <LoadingPage />
      </Flex>
    );
  }

  return (
    <Flex minHeight="calc(100vh-4rem)" w="100%">
      {/* Only show sidebar for doctor when doctor connected to room */}
      {(isDoctor && room) && (
        <>
          <SideBar
            conversations={conversations}
            setCurrentConversationRoom={setCurrentConversationRoom}
            openChatWindow={openChatWindow}
          />
          <RoomBreadcrumb doctor={roomName} isPatient={isPatient} openChatWindow={openChatWindow} />
        </>
      )}
      {/* Show topbar for patient  */}
      {isPatient && (
      <RoomBreadcrumb
        doctor={roomName}
        isPatient={isPatient}
        openChatWindow={openChatWindow}
      />
      )}
      {/* Landing page for patient */}
      {(isPatient && !room) && <PatientLanding callEnded={callEnded} roomName={roomName} />}
      {/* Landing page for doctor */}
      {(isDoctor && !room) && (
      <DoctorLanding
        roomName={roomName}
        userName={authState?.user?.username}
        handleJoin={handleJoin}
      />
      )}

      {room && <Videos room={room} />}
      <Chat
        isOpen={isChatWindowOpen}
        onClose={closeChatWindow}
        conversation={currentConversationRoom}
        connectionState={connectionState}
      />
    </Flex>
  );
}
