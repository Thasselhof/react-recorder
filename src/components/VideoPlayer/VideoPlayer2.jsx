import { useRef, useState, useEffect } from "react";
import './_videoPlayer.scss'


const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const mainVideo =
  "https://rili.ai/avatares/videos_final/01.mp4";

export default function VideoPlayer2() {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return shouldUseImage ? (
    <img className="video" src={mainVideo} alt="Muted Video" />
  ) : (
    <div
      className="video"
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${mainVideo}" type="video/mp4" />
        </video>`
      }}
    />
  );
}
