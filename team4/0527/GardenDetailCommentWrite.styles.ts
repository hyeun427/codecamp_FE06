import styled from "@emotion/styled";

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentWriteProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 5px;

  //test
  background-color: gray;
`;

export const CommentWriteInputBox = styled.article`
  width: 300px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dbdbdb;
`;

export const CommentWriteInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  margin-left: 3.5px;
  font-weight: 400;
  font-size: 12px;
`;

export const CommentWriteBtn = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: black;
  cursor: pointer;
  padding-top: 5px;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: black;
  /* font-size: 10px; */
  cursor: pointer;
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: black;
  /* font-size: 10px; */
  cursor: pointer;
`;

export const ImageThumbnail = styled.img`
  width: 300px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
`;

export const VideoThumbnail = styled.video`
  width: 300px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
