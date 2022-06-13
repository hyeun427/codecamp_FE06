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
        <S.LeftWrapper>
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
        </S.LeftWrapper>
        <S.RightWrapper>sdsd</S.RightWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
