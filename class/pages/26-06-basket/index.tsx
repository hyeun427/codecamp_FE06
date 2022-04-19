import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    // baskets는 이전까지 담아뒀던 장바구니를 의미  // 영상35분쯤
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 장바구니에 이미 담겼는지 확인하기
    // 아랫줄 다시 봐야할듯..중복상품에서 왜 if문에 조건이 temp.length를 쓰는거지? 아 _id가 같으면 filter에 의해서 temp에 filter조건이 만족한 값이 들어가니까 temp에 인덱스값이 하나 추가되는것.
    // 그래서 length가 1이 생겨버리니까 그걸로 중복상품인지 확인하는거야.
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!~");
      return;
    }

    // **삭제가 된 형태 코드, 아래 50째줄에 마지막 baskets대신에 newBaskets를 넣으면 삭제되고 남은 상품들만 장바구니에 담김...영상58분?슬라이도 답변 부분 확인
    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

    // 3. 장바구니에 담기
    // 타입네임 제외하고 출력하는 방법.  // 어제 배운 구조분해할당 이용
    const { __typename, ...newEl } = el;
    // 기존에 담아뒀던 상품들이 있는 장바구니에 새 상품들 추가
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}
