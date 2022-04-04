import router from "next/router";
import React, { useState, useRef } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>();

  const componentDidMount = () => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current?.focus();
  };

  const componentDidUpdate = () => {
    console.log("컴포넌트가 변경됐습니다~");
  };

  const componentWillUnmount = () => {
    alert("컴포넌트가 제거됩니다~");
  };

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {setCount}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
