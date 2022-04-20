import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import styled from "@emotion/styled";

// CSS
const Wrapper = styled.div`
  margin: 50px;
  padding: 10px;
  width: 500px;
  border: 1px solid gray;
`;
const Writer = styled.div``;
const Title = styled.div``;
const Contents = styled.div``;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <Wrapper>
      <Writer style={{ color: "red" }}>
        작성자: {data?.fetchBoard.writer}
      </Writer>
      <Title style={{ color: "green" }}>제목: {data?.fetchBoard.title}</Title>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" && (
        <Contents
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></Contents>
      )}
    </Wrapper>
  );
}
