import React from "react";

import { Box, styled } from "@mui/material";

const Conatainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "20px",
  marginTop: 120,
}));

function PaymentFailure() {
  return (
    <Conatainer>
      <h1>🎉 Payment Failed!</h1>
      <p>Try Again</p>
    </Conatainer>
  );
}

export default PaymentFailure;
