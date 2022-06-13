import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import styled from "@emotion/styled";
import { UPLOAD_FILE } from "../../commons/queries";
import * as S from "../../../components/units/community/write/CommunityWrite.styles";
import * as Edit from "../../units/userprofile/useredit/useredit.style";

import { AiOutlineFileImage } from "react-icons/ai";

export const UploadImageWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export const GardenImageUpload = styled(AiOutlineFileImage)`
  font-size: 30px;
  color: #ffb950;
  :hover {
    cursor: pointer;
  }
`;

export default function ImageUpload(props: {
  onChangeFileUrls: (fileUrl: string) => void;
  fileUrls: Array<string>;
  type: string;
}) {
  // type
  // garden : 가든 게시물 작성
  // community : 커뮤니티 게시물 작성
  // edit : user 정보 수정
  // comment : 댓글 게시물 작성

  const fileRef = useRef<HTMLInputElement>(null);

  const [, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    try {
      const { data: resultImgUrl } = await uploadFile({
        variables: { files: [file] },
      });

      setImageUrl(resultImgUrl?.uploadFile[3]);
      props.onChangeFileUrls(String(resultImgUrl?.uploadFile[3]));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <UploadImageWrapper>
      {props.type === "garden" && <GardenImageUpload onClick={onClickImage} />}

      {props.type === "community" && (
        <S.ImgBtn>
          <S.BsFileEarmarkIcon onClick={onClickImage} />
        </S.ImgBtn>
      )}
      {props.type === "edit" && <Edit.IconEdit onClick={onClickImage} />}
      {props.type === "comment" && (
        <AiOutlineFileImage onClick={onClickImage} size={"18"} />
      )}
      <input
        id="images"
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </UploadImageWrapper>
  );
}
