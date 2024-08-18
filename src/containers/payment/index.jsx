import React from "react";
import {
  StyledPaymentDoneContainer,
  StyledMessage,
  StyledTransactionDetails,
  StyledButton,
} from "./payment.styled";

const PaymentDoneContainer = () => {
  const handleReturnHome = () => {
    window.location.href = "/home";
  };

  return (
    <StyledPaymentDoneContainer>
      <StyledMessage>Payment Successful!</StyledMessage>
      <StyledTransactionDetails>
        <p>
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>
      </StyledTransactionDetails>
      <StyledButton onClick={handleReturnHome}>Return to Homepage</StyledButton>
    </StyledPaymentDoneContainer>
  );
};

export default PaymentDoneContainer;
