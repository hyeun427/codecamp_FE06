import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  // 이미지가 다운로드된 이미지태그
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreLoad}>이미지 보여주기</button>
    </div>
  );
}
