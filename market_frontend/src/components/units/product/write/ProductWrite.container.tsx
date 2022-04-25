import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IProductWrite } from "./ProductWrite.types";
import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const schema = yup.object({
  productName: yup.string().required("상품명은 필수항목입니다."),
  productDetail: yup.string().required("상품 설명은 필수항목입니다."),
  price: yup.string().required("가격은 필수항목입니다."),
  tag: yup.string(),
});

/* // 지도
declare const window: typeof globalThis & {
  kakao: any;
}; */

export default function ProductWrite() {
  // form
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // form내 에디터 부분 - 상품설명 onChange
  const onChangeContents = (value: string) => {
    setValue("Contents", value === "<p><br></p>" ? "" : value);
    trigger("Contents");
  };

  /*  // 지도
  const Map = () => {
    useEffect(() => {
      const script = document.createElement("script"); // <script></script>
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=e591e8387ff4370bc39725109e26716c&autoload=false";
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(function () {
          const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
          const options = {
            // 지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };

          const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

          // 마커가 표시될 위치
          const markerPosition = new window.kakao.maps.LatLng(
            33.450701,
            126.570667
          );

          // 마커를 생성
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // 마커가 지도 위에 표시
          marker.setMap(map);
        });
      };
    }, []);
  }; */

  const onClickSubmit = async (data: IProductWrite) => {
    console.log(data);
  };

  return (
    <ProductWriteUI
      ReactQuill={ReactQuill}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      //Map={Map}
    />
  );
}
