import { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import {
  AudioTrack, VideoTrack, Participant as VideoParticipant,
} from "twilio-video";

import Video from "./Video";

interface ParticipantProps {
  participant: VideoParticipant;
  videoStyle?: Record<string, string>
}

const Participant = ({ participant, videoStyle }: ParticipantProps) => {
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
    let videoTrack: VideoTrack | null = videoTracks[0];
    // If screen share track show it. else show video track
    if (videoTracks.length >= 2) {
      videoTrack = videoTracks[1] || null;
    }
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
    <Box
      className="participant"
      id={participant.identity}
      position="relative"
    >
      {/* these videos wouldn't have captions so it's safe to disable */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <Video videoRef={videoRef} videoStyle={videoStyle} />
      {/* eslint-disable-next-line */}
      <audio ref={audioRef} />
      <Box
        position="absolute"
        bottom={2}
        left={2}
        p={1}
        bgColor="rgba(0,0,0,0.5)"
        color="white"
        zIndex={1}
        rounded="md"
      >
        {participant.identity.slice(37)}
      </Box>
    </Box>
  );
};

Participant.defaultProps = {
  videoStyle: { width: "100%" },
};

export default Participant;
