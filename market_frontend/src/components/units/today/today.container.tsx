import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";

export default function Today() {
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);
  useEffect(() => {
    const already = JSON.parse(localStorage.getItem(DATE) || "[]");
    setIsToday(already);
  }, []);

  return <TodayUI isToday={isToday} />;
}
