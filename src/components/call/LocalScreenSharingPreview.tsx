import { useRef, useEffect } from "react";

type PropTypes = {
  stream: MediaStream
}

const LocalScreenSharingPreview = ({ stream }: PropTypes) => {
  const localPreviewRef = useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    const video = localPreviewRef.current;

    if (video) {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    }
  }, [stream]);

  if (!stream) {
    return <></>;
  }

  return (
    <div className="local_screen_share_preview">
      <video muted autoPlay ref={localPreviewRef} />
    </div>
  );
};

export default LocalScreenSharingPreview;
