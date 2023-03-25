import { useState, useEffect } from "react";
import { getNowTime } from "@/utils/functions";

function useTimer() {
  const [time, setTime] = useState(getNowTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getNowTime())
    }, 60 * 1000);
    return () => clearInterval(interval)
  }, [])

  return time
}

export { useTimer }