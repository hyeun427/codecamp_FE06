import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IProductWrite, IProductWriteProps } from "./ProductWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const schema = yup.object({
  name: yup.string().required("상품명은 필수항목입니다."),
  remarks: yup.string().required("한줄 요약은 필수항목입니다."),
  contents: yup
    .string()
    .required("상품 설명은 필수항목입니다.")
    .min(10, "상품설명을 10자 이상 작성해주세요."),
  price: yup.number().required("가격은 필수항목입니다."),
  tags: yup.string(),
});

/* // 지도
declare const window: typeof globalThis & {
  kakao: any;
}; */

export default function ProductWrite(props: IProductWriteProps) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [hashArr, setHashArr] = useState([]);

  // form
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // form내 에디터 부분 - 상품설명 onChange
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //console.log(value);
    trigger("contents");
  };

  // 태그
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
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

  // 이미지 넣을 때
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.images?.length) {
      setFileUrls([...props.data?.images]);
    }
  }, [props.data]);

  // 상품 등록버튼
  const onClickSubmit = async (data: IProductWrite) => {
    console.log(data);

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
        },
      });
      console.log(result);
      Modal.success({ content: "상품 등록에 성공하였습니다!" });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ProductWriteUI
      data={props.data}
      ReactQuill={ReactQuill}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
      fileUrls={fileUrls}
      hashArr={hashArr}
      onKeyUpHash={onKeyUpHash}
    />
  );
}
