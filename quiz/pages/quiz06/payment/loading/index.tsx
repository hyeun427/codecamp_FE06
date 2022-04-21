import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Select = styled.select`
  margin: 20px;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);
  const router = useRouter();

  const onChangeSelect = (event) => {
    setAmount(event.target.value);
  };

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp58061661"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //merchant_uid: "ORD20180131-0000011",
        name: `${amount}원 충전`,
        amount: amount,
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // 결제 완료 후 리렌더링 될 페이지 주소 작성
        m_redirect_url: "http://localhost:3000/quiz06/payment/complete",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/quiz06/payment/complete");
          // 백엔드에 결제관련 데이터 넘겨주기(=> 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다.다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Select name="selectBox" id="selectBox" onChange={onChangeSelect}>
        <option selected disabled style={{ color: "gray" }}>
          원하는 충전 금액을 선택하세요.
        </option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </Select>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
