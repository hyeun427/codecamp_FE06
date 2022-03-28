import { DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";

export default function CalenderPage() {
  const [date, setDate] = useState();

  const onChangeDate = (date, dateString) => {
    setDate(dateString.slice(0, 7));
  };
  const dateFormat = "YYYY-MM-DD";

  return (
    <>
      <DatePicker
        defaultValue={moment("2022-03-29", dateFormat)}
        onChange={onChangeDate}
      />
      <div>{date}</div>
    </>
  );
}
