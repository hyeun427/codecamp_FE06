import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  // useEffect를 사용하기때문에 한번만 실행되고 더이상 실행되지 않는다.
  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>오픈API 연습!!</div>
      <img src={dogUrl} />
    </div>
  );
}
