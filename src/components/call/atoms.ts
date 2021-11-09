import { atom } from "recoil";
import { RemoteParticipant } from "twilio-video";

export type UserDataType = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};

export type TokenDataType = {
  token: string;
  identity: string;
  roomNames: string[];
}

const dummyCallList: UserDataType[] = [
  {
    id: "1",
    name: "User 1",
    avatar: "none",
    email: "random@mail",
  },
  {
    id: "2",
    name: "User 2",
    avatar: "none",
    email: "random2@mail",
  },
  {
    id: "3",
    name: "User 3",
    avatar: "none",
    email: "random3@mail",
  },
  {
    id: "4",
    name: "User 4",
    avatar: "none",
    email: "random4@mail",
  },
];

export const callListAtom = atom<UserDataType[]>({
  key: "in_call_users",
  default: [],
});

export const waitingListAtom = atom<UserDataType[]>({
  key: "waiting_users",
  default: dummyCallList,
});

export const twilioTokenAtom = atom<TokenDataType>({
  key: "accessToken",
  default: {
    token: "",
    identity: "",
    roomNames: [],
  },
});

export const participantsAtom = atom<RemoteParticipant[]>({
  key: "participants",
  default: [],
});

export default { callListAtom, waitingListAtom, participantsAtom };
