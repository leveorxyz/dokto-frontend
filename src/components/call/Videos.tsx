import { useState } from "react";
import Participant from "./Participant";

type PropTypes = {
  room: any;
};

const Videos = ({ room }: PropTypes) => {
  const [remoteParticipants, setRemoteParticipants] = useState(Array.from(
    room.participants.values(),
  ));

  console.log(remoteParticipants, setRemoteParticipants);

  return (
    <div>
      <Participant participant={room.localParticipant} room={room} />
    </div>
  );
};

export default Videos;
