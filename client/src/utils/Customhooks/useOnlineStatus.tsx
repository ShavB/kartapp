import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
}
