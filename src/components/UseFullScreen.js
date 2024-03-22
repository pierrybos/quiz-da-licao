import { useEffect, useState } from "react";

function UseFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const updateFullScreenStatus = () => {
      setIsFullScreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", updateFullScreenStatus);
    document.addEventListener("mozfullscreenchange", updateFullScreenStatus);
    document.addEventListener("webkitfullscreenchange", updateFullScreenStatus);
    document.addEventListener("msfullscreenchange", updateFullScreenStatus);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullScreenStatus);
      document.removeEventListener(
        "mozfullscreenchange",
        updateFullScreenStatus
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        updateFullScreenStatus
      );
      document.removeEventListener(
        "msfullscreenchange",
        updateFullScreenStatus
      );
    };
  }, []);

  return isFullScreen;
}

export default UseFullScreen;
