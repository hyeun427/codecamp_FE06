// 오늘 본 상품
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { watchListState } from "../../store";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  position: fixed;
  top: 580px;
  left: 60px;
  width: 130px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: 1px solid #000000;
`;

const Title = styled.div`
  margin: 4px 0px;
`;
const ProductWrapper = styled.div`
  margin-top: 15px;
  border: 1px solid lightgray;
`;

const Img = styled.img`
  width: 95px;
  height: 95px;
`;

export default function Sidebar() {
  const [watchProduct, setWatchProduct] = useRecoilState(watchListState);

  useEffect(() => {
    setWatchProduct(watchProduct);
  });

  console.log(watchProduct);
  return (
    <Wrapper>
      <Title>최근 본 상품</Title>
      {watchProduct.map((el: any) => (
        <ProductWrapper key={el._id}>
          <Img
            src={
              el.images[0]
                ? `https://storage.googleapis.com/${el.images[0]}`
                : `/layout/no-img.png`
            }
          />
        </ProductWrapper>
      ))}
    </Wrapper>
  );
}
