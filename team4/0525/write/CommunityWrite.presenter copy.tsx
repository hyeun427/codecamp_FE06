import * as S from "./CommunityWrite.styles";
// 에디터
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { Quill } from "react-quill";
import ImageUpload from "../../../commons/upload";
import { ICommunityBoardWriteUIProps } from "./CommunityWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function CommunityListUI(props: ICommunityBoardWriteUIProps) {
  /*   // 에디터 커스텀
  const fontSizeArr = ["11px", "14px", "16px", "20px"];

  var Size = Quill.import("formats/size");
  Size.whitelist = fontSizeArr;
  Quill.register(Size, true);

  const modules = {
    toolbar: [
      // [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: fontSizeArr }],
    ],
  }; */
  return (
    <S.OutWrapper>
      <S.Wrapper>
        {/* 제목 */}
        <S.TitleWrapper>
          <S.TitleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchCommunityBoard.title || ""}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.TitleWrapper>
        {/* 내용 */}
        <S.ReactQuillWrapper>
          {!props.isEdit && (
            <>
              <ReactQuill onChange={props.onChangeContent} />
              <S.Error>{props.contentError}</S.Error>
            </>
          )}
          {props.isEdit && props.data?.fetchCommunityBoard.content && (
            <>
              <ReactQuill
                onChange={props.onChangeContent}
                defaultValue={props.data?.fetchCommunityBoard.content}
              />
              <S.Error>{props.contentError}</S.Error>
            </>
          )}
        </S.ReactQuillWrapper>
        {/* 사진 */}
        <S.ImgWrapper>
          Image Upload
          <S.IconWrapper>
            <S.ImgBtn>
              {/* {props.fileUrls ? () : } */}
              <ImageUpload
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrls={props.fileUrls}
                type={"community"}
              />
              {props.fileUrls?.map((el, index) => (
                <S.ImageThumbnail
                  key={uuidv4()}
                  src={
                    el.startsWith("https", 0)
                      ? el
                      : `https://storage.googleapis.com/${el}`
                  }
                />
              ))}
            </S.ImgBtn>
          </S.IconWrapper>
        </S.ImgWrapper>
        {/* 업로드버튼 */}
        <S.BtnWrapper>
          <S.UploadBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            <S.MdUploadFileIcon />
            {props.isEdit ? "Edit" : "Upload"}
          </S.UploadBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
