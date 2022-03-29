import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data) => {
    setSelectAddress(data.address);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달열기</Button>
      <div>{selectAddress}</div>
      {isModalVisible && (
        <Modal
          title="주소검색"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
