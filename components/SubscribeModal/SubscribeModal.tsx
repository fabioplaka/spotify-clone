"use client";

import React from "react";
import { Modal } from "..";
import { ProductWithPrice } from "@/types/ProductWithPrice";

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  let content = <div className="text-center">No products available.</div>;

  return (
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium"
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
