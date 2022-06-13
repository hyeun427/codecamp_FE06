import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  ImageThumbnail,
  ImgBtn,
  SubmitBtn,
  Thumbnail,
  VideoBtn,
  VideoThumbnail,
} from "./GardenDetailCommentWrite.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";

export default function GardenDetailCommentWriteUI(props: any) {
  return (
    <>
      <CommentWriteBox>
        <CommentWriteProfile />
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder="Enter Your Comment Here!"
            type={"text"}
            onChange={props.onChangeComment}
            // value={props.comment || props.commentEl?.content || ""}
            value={props.comment}
          />
          <CommentWriteBtn>
            {props.isEdit !== true ? (
              // 댓글등록
              <SubmitBtn onClick={props.onClickCommentWrite}>
                <MdForwardToInbox style={{ fontSize: "17" }} />
              </SubmitBtn>
            ) : (
              // 댓글수정
              <SubmitBtn onClick={props.onClickCommentUpdate}>
                <MdForwardToInbox />
              </SubmitBtn>
            )}
            <ImgBtn>
              <ImageUpload
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrls={props.fileUrls}
                type={"comment"}
              />
            </ImgBtn>
            <VideoBtn>
              <VideoUpload
                onChangeVideoUrls={props.onChangeVideoUrls}
                videoUrls={props.videoUrls}
                type={"comment"}
              />
            </VideoBtn>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <Thumbnail>
        {props.fileUrls !== "" && <ImageThumbnail src={props.fileUrls} />}
        {props.videoUrls !== "" && (
          <VideoThumbnail src={props.videoUrls} controls />
        )}
      </Thumbnail>
    </>
  );
}
