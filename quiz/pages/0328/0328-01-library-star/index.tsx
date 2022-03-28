import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);

    if (value === 1) {
      alert("1점 입니다.");
    } else if (value === 2) {
      alert("2점 입니다.");
    } else if (value === 3) {
      alert("3점 입니다.");
    } else if (value === 4) {
      alert("4점 입니다.");
    } else if (value === 5) {
      alert("5점 입니다.");
    }
  };

  return (
    <>
      <Rate onChange={handleChange} value={value} /> <br />
      <div>{value}점</div>
    </>
  );
}
