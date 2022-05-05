import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  border: 1px solid #bdbdbd;
`;

// 헤더 부분
export const CommentHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;
export const CommentIcon = styled.img`
  margin-right: 10px;
`;

export const CommentTitle = styled.div`
  margin-bottom: 20px;
`;

// 댓글 작성하는 창
export const CommentWriterInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background-color: #ffffff;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  color: gray;
`;

// 등록 부분

export const CommentRegisterWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-left: 10px;
  border-top: 1px solid #bdbdbd;
  color: gray;
`;

export const CommentRegisterButton = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  background-color: ${(props) => (props.isActive ? "pink" : "none")};
`;

export const CommentCount = styled.div`
  font-size: 13px;
  margin-right: 10px;
  padding-left: 5px;
`;

// 에러
export const CommentError = styled.div`
  color: red;
  font-size: 13px;
  width: 100%;
`;
