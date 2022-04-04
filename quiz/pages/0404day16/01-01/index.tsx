import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function ChangeMovePage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
  }, [isChange]);

  useEffect(() => {
    console.log("마운트됨!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!");
    };
  }, []);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
