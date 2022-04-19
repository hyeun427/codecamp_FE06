import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

// CSS
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`;
const TableWrapper = styled.div`
  margin-right: 200px;
`;
const TodayList = styled.div`
  width: 50%;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
`;
const Today = styled.div`
  height: 100px;

  text-align: center;
  padding: 30px;
  border-bottom: 1px solid blue;
`;

const MyRow = styled.div`
  display: flex;
  padding-bottom: 20px;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
`;

const MyColumn = styled.div`
  width: 25%;
`;

// fetchboard
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

// 날짜 확인
const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 본 게시글입니다!!~");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    newEl.date = getDate(new Date());
    localStorage.setItem(getDate(new Date()), JSON.stringify(baskets));

    const newBaskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(newBaskets);
  };

  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <TableWrapper>
        {data?.fetchBoards.map((el: IBoard) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button onClick={onClickBasket(el)} id={el._id}>
              게시물담기
            </button>
          </MyRow>
        ))}
      </TableWrapper>
      <TodayList>
        <Today>오늘 본 게시글</Today>
        <div>
          {basketItems.map((el: IBoard) => (
            <MyRow key={el._id}>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
            </MyRow>
          ))}
        </div>
      </TodayList>
    </Wrapper>
  );
}
