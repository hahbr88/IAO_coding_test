import React from "react";
import "./style/delivery.css";

const Delivery = () => {
  // 제품 정보
  const products = [
    {
      name: "product1",
      preparationTime: 48,
    },
    {
      name: "product2",
      preparationTime: 24,
    },
  ];

  // 배송 옵션
  const shippingOptions = [
    {
      name: "일반 배송",
      duration: 72,
    },
    {
      name: "특급 배송",
      duration: 24,
    },
  ];

  const handleProductChange = (product) => {};
  const handleShippingOptionChange = (option) => {};
  const calculateDeliveryTime = () => {};

  return (
    <div className="delivery_section">
      <h3>2.배송예상기간 산정</h3>
      {/* 여기에 2.배송예상기간 산정 CODE 작성*/}
    </div>
  );
};

export default Delivery;
