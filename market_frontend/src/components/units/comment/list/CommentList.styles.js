// market 목록 스타일즈 페이지

import styled from "@emotion/styled";

// presenterItem 부분
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

// 리스트 부분
export const CommentFetchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  margin-top: 10px;
`;

export const CommentProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const CommentContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
`;
export const CommentFetchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const CommentWriter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  word-break: break-all;
`;

export const CommentContents = styled.div`
  margin-bottom: 20px;
  word-break: break-all;
  width: 100%;
`;

export const CommentCreatedAt = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;

// 수정하기 삭제하기 버튼
export const UpdateIcon = styled.img``;

export const UpdateIconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  margin-right: 10px;
`;

export const DeleteIcon = styled.img``;

export const DeleteIconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
