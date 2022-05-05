import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IProductWrite, IProductWriteProps } from "./ProductWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./ProductWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect, useState } from "react";

// 에디터
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

export default function ProductWrite(props: IProductWriteProps) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const router = useRouter();
  // 태그
  const [hashArr, setHashArr] = useState([]);

  // 지도
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");
  const [gps, setGps] = useState({
    La: 0,
    Ma: 0,
  });

  // 이미지
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // 작성된 컨텐츠 정보 불러오기
  const { data: data1 } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router?.query.productsId },
  });

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

  useEffect(() => {
    console.log(hashArr);
  }, [hashArr]);

  // 지도
  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickPostCode = (address) => {
    setIsOpen((prev) => !prev);
    setAddress(address.address);
    setZipcode(address.zonecode);
    setAddressDetail("");
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

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
  const onClickSubmit = async (data) => {
    console.log(data);

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              lat: Number(lat),
              lng: Number(lng),
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      console.log(result);
      Modal.success({ content: "상품 등록에 성공하였습니다!" });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // 상품 수정하기
  const onClickUpdate = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangeFiles = currentFiles !== defaultFiles;

    const editHashArr = [...props.data?.fetchUseditem.tags, ...hashArr];
    const updateUseditemInput = {};
    if (isChangeFiles) updateUseditemInput.images = fileUrls;

    try {
      const editResult = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: fileUrls,
            tags: editHashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
              lat: gps.La,
              lng: gps.Ma,
            },
          },
          useditemId: router.query.productsId,
        },
      });
      Modal.success({ content: "상품이 수정되었습니다." });
      router.push(`/products/${editResult.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "수정되지 않았습니다." });
    }
  };

  return (
    <ProductWriteUI
      data={props.data}
      data1={data1}
      // form
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      // 에디터
      ReactQuill={ReactQuill}
      onChangeContents={onChangeContents}
      // 지도
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
      setGps={setGps}
      gps={gps}
      lat={lat}
      lng={lng}
      onClickPostCode={onClickPostCode}
      onClickModal={onClickModal}
      onChangeAddressDetail={onChangeAddressDetail}
      // 이미지
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      // 태그
      hashArr={hashArr}
      onKeyUpHash={onKeyUpHash}
      // 등록버튼
      onClickSubmit={onClickSubmit}
      // 수정
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
    />
  );
}
