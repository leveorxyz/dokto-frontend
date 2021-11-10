import { atom } from "recoil";
import { RemoteParticipant } from "twilio-video";

export type TokenDataType = {
  token: string;
  identity: string;
  roomName: string;
}

export const callListAtom = atom<RemoteParticipant[]>({
  key: "in_call_users",
  default: [],
});

export const waitingListAtom = atom<RemoteParticipant[]>({
  key: "waiting_users",
  default: [],
});

export const twilioTokenAtom = atom<TokenDataType>({
  key: "accessToken",
  default: {
    token: "",
    identity: "",
    roomName: "",
  },
});

export default { callListAtom, waitingListAtom };
