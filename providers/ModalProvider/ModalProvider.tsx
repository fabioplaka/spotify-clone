"use client";

import { Modal } from "@/components";
import React, { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Test Modal"
        description="Test description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;
