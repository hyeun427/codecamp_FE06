import { Modal, Button } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Payment.queries";

const Select = styled.select`
  margin: 20px;
`;

export default function PaymentModal() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [amount, setAmount] = useState(500);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); //  포폴용 imp49910675 //  내꺼 imp58061661
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상계좌는 vbank
        // 상품id 중복x, 실무에서는 몇개 팔렸는지 숨기기위해 정직하게 적어놓지는 않음
        // 안적으면 랜덤 생성
        // merchant_uid: "ORD20180131-0000011",
        name: `${amount}원 충전`, // 상품이름
        amount: amount, // 결제금액
        buyer_email: data?.fetchUserLoggedIn.email, // 구매자 이메일
        buyer_name: data?.fetchUserLoggedIn.name, // 구매자 이름
        // buyer_tel: "010-4242-4242", // 구매자 hp
        // buyer_addr: "서울특별시 강남구 신사동", // 주소
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/products",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            // refetch();
            console.log(result);
            alert("결제를 성공하였습니다.");
            router.push("/");
          } catch (error) {
            alert(error.message);
          }
          // 백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패 했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onChangeSelect = (event) => {
    setAmount(event.target.value);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        충전
      </Button>
      <Modal
        title="원하는 충전 금액을 선택하세요."
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select name="selectBox" id="selectBox" onChange={onChangeSelect}>
          <option disabled style={{ color: "gray" }}>
            원하는 충전 금액을 선택하세요.
          </option>
          <option value="500">500원</option>
          <option value="1000">1000원</option>
          <option value="3000">3000원</option>
          <option value="5000">5000원</option>
          <option value="10000">10000원</option>
        </Select>
      </Modal>
    </>
  );
}
