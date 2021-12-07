import { Dispatch } from "react";

export type ConnectionStateType = {
  status: string,
  statusString: string
}

type PropTypes = {
  client: any;
  setConnectionState: Dispatch<ConnectionStateType>;
}

export default function useUpdateConnection() {
  return ({
    client,
    setConnectionState,
  }: PropTypes) => client.on("connectionStateChanged", (state: string) => {
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
}
