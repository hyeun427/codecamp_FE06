import styled from "@emotion/styled";
import Dompurify from "dompurify";
import PaymentModal from "../../commons/payment";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  background-color: yellow;
`;

const InnerWrapper = styled.div``;
const User = styled.div``;

export default function MyPageUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <User>{props.data?.fetchUserLoggedIn.name}님 환영합니다.</User>
        <User>
          {" "}
          보유 포인트 : {props.data?.fetchUserLoggedIn.userPoint.amount}
        </User>
        <PaymentModal data={props.data} />
      </InnerWrapper>
      <div>
        {props.basketItems.map((el: any) => (
          <div key={el._id}>
            <div>상품명 : {el.name}</div>
            {typeof window !== "undefined" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(el.contents),
                }}
              />
            )}
            <div>가격 : {el.price}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
