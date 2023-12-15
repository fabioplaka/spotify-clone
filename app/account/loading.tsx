"use client";

import { Box } from "@/components";
import React from "react";
import { BounceLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default Loading;
