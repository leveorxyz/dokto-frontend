import { useState, useEffect, useRef } from "react";
import {
  AudioTrack, VideoTrack, Participant as VideoParticipant, Room,
} from "twilio-video";

import Video from "./Video";

interface ParticipantProps {
  participant: VideoParticipant;
  room: Room,
  isLocal?: boolean
  setScreenShareStream: React.Dispatch<React.SetStateAction<MediaStream | null>>
}

const Participant = ({
  participant, room, isLocal, setScreenShareStream,
}: ParticipantProps) => {
  const [videoTracks, setVideoTracks] = useState<(VideoTrack | null)[]>([]);
  const [audioTracks, setAudioTracks] = useState<(AudioTrack | null)[]>([]);

  // Create refs for the HTML elements to attach audio and video to in the DOM
  // For now, set them to null
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLMediaElement>(null);

  // Get the audio and video tracks from the participant, filtering out the tracks that are null
  const getExistingVideoTracks = (currentParticipant: VideoParticipant) => {
    const videoPublications = Array.from(currentParticipant.videoTracks.values());
    const existingVideoTracks = videoPublications
      .map((publication) => publication.track)
      .filter((track) => track !== null);
    return existingVideoTracks;
  };

  const getExistingAudioTracks = (currentParticipant: VideoParticipant) => {
    const audioPublications = Array.from(currentParticipant.audioTracks.values());
    const existingAudioTracks = audioPublications
      .map((publication) => publication.track)
      .filter((track) => track !== null);
    return existingAudioTracks;
  };

  // When a new track is added or removed, update the video and audio tracks in the state
  useEffect(() => {
    const trackSubscribed = (track: AudioTrack | VideoTrack) => {
      if (track.kind === "video") {
        setVideoTracks((prev) => [...prev, track]);
      } else {
        setAudioTracks((prev) => [...prev, track]);
      }
    };

    const trackUnsubscribed = (track: AudioTrack | VideoTrack) => {
      if (track.kind === "video") {
        setVideoTracks((prev) => prev.filter((v) => v !== track));
      } else {
        setAudioTracks((prev) => prev.filter((a) => a !== track));
      }
    };

    setVideoTracks(getExistingVideoTracks(participant));
    setAudioTracks(getExistingAudioTracks(participant));

    // Set up event listeners
    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    // Clean up at the end by removing all the tracks and the event listeners
    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
      participant.videoTracks
        // eslint-disable-next-line no-param-reassign
        .forEach((track) => { track.isEnabled = false; });
    };
  }, [participant]);

  // When a new videoTrack or audioTrack is subscribed, add it to the DOM.
  // When unsubscribed, detach it
  useEffect(() => {
    const videoTrack = videoTracks[0];
    videoTrack?.attach(videoRef?.current ?? undefined);
    return () => {
      videoTrack?.detach();
    };
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    audioTrack?.attach(audioRef?.current ?? undefined);
    return () => {
      audioTrack?.detach();
    };
  }, [audioTracks]);

  return (
    <div className="participant" id={participant.identity}>
      {/* these videos wouldn't have captions so it's safe to disable */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <Video
        videoRef={videoRef}
        videoTracks={videoTracks}
        audioTracks={audioTracks}
        room={room}
        showOptions={isLocal}
        setScreenShareStream={setScreenShareStream}
      />
      {/* eslint-disable-next-line */}
      <audio ref={audioRef} />
    </div>
  );
};

Participant.defaultProps = {
  isLocal: false,
};

export default Participant;
