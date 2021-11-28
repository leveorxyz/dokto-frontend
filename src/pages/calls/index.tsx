import {
  useState, useEffect, useCallback, useContext,
} from "react";
import { Flex } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Client as ConversationsClient, Conversation } from "@twilio/conversations";
import { Room as RoomType } from "twilio-video";
import { useRecoilValue } from "recoil";
import { uniqBy } from "lodash";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";
import TwilioUtils from "../../components/call/utils/TwilioUtils";
import useTwilioToken from "../../hooks/twilio/useTwilioToken";
import SideBar from "../../components/call/SideBar";
import Videos from "../../components/call/Videos";
import authAtom from "../../atoms/auth.atom";
import { twilioTokenAtom } from "../../components/call/atoms";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function VideoCalls() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const [room, setRoom] = useState<RoomType | null>(null);
  const [connectionState, setConnectionState] = useState({
    status: "",
    statusString: "",
  });
  // eslint-disable-next-line
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { token, roomName } = useRecoilValue(twilioTokenAtom);
  const authState = useRecoilValue(authAtom);
  const [searchParams] = useSearchParams();
  const queryRoomName = searchParams.get("doctor");
  // TODO: if doctor get username/roomName from authState
  console.log(connectionState);

  room?.on("disconnected", () => {
    setRoom(null);
    // TODO: Alert patient that call has ended.
  });

  // Check user is doctor
  const isDoctor = useCallback(() => authState?.user?.userType === "DOCTOR", [authState]);
  // Check user is patient
  const isPatient = useCallback(() => authState?.user?.userType === "PATIENT", [authState]);

  // Conversation initialization handler
  const initConversations = useCallback(() => {
    const client = new ConversationsClient(token);
    setConnectionState({ status: "default", statusString: "connecting" });

    client.on("connectionStateChanged", (state) => {
      if (state === "connecting") {
        setConnectionState({
          statusString: "Connecting to Twilio…",
          status: "default",
        });
      }
      if (state === "connected") {
        setConnectionState({
          statusString: "You are connected.",
          status: "success",
        });
      }
      if (state === "disconnecting") {
        setConnectionState({
          statusString: "Disconnecting from Twilio…",
          status: "default",
        });
      }
      if (state === "disconnected") {
        setConnectionState({
          statusString: "Disconnected.",

          status: "warning",
        });
      }
      if (state === "denied") {
        setConnectionState({
          statusString: "Failed to connect.",
          status: "error",
        });
      }
    });
    client.on("conversationJoined", (conversation) => {
      setConversations((prevState) => uniqBy([...prevState, conversation], "sid"));
    });

    client.on("conversationLeft", (thisConversation) => {
      setConversations(
        (prevState) => [...prevState.filter((it) => it.sid !== thisConversation.sid)],
      );
      if (isPatient()) {
        // connect patient doctor room
        TwilioUtils.connectToRoom(token, queryRoomName || roomName).then((currentRoom) => {
          setRoom(currentRoom);
        });
      }
    });
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (token && queryRoomName) {
      // If doctor, join both waiting & doctor room
      if (isDoctor()) {
        // connect to doctor room
        TwilioUtils.connectToRoom(token, queryRoomName).then((currentRoom) => {
          setRoom(currentRoom);
        });

        initConversations();
      } else if (isPatient()) {
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
    <Flex minHeight="100vh" w="100%">
      {/* Only show sidebar for doctor */}
      {isDoctor() && <SideBar conversations={conversations} />}
      {room && <Videos room={room} />}
    </Flex>
  );
}
