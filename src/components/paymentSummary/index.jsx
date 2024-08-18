import React from "react";
import {
  StyledPaymentSummaryContainer,
  StyledSummaryHeading,
  StyledSummaryItem,
  StyledSummaryValue,
  StyledSummaryTotal,
  StyledProceedToPaymentButton,
} from "./paymentSummary.styled";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const PaymentSummary = ({ subtotal, tax, discount, total }) => {
  const router = useRouter();
  const handleProceedToPayment = () => {
    toast.success("Payment Done!", {
      autoClose: 1500,
    });
    router.push("/payment");
  };
  return (
    <StyledPaymentSummaryContainer>
      <StyledSummaryHeading>Payment Summary</StyledSummaryHeading>
      <StyledSummaryItem>
        <span>Subtotal:</span>
        <StyledSummaryValue>₹{subtotal}</StyledSummaryValue>
      </StyledSummaryItem>
      <StyledSummaryItem>
        <span>Tax(@12%):</span>
        <StyledSummaryValue>₹{tax}</StyledSummaryValue>
      </StyledSummaryItem>
      <StyledSummaryItem>
        <span>Discount:</span>
        <StyledSummaryValue>₹{discount}</StyledSummaryValue>
      </StyledSummaryItem>
      <StyledSummaryTotal>
        <span>Total:</span>
        <StyledSummaryValue>₹{total}</StyledSummaryValue>
      </StyledSummaryTotal>
      <StyledProceedToPaymentButton onClick={handleProceedToPayment}>
        Proceed to Payment
      </StyledProceedToPaymentButton>
    </StyledPaymentSummaryContainer>
  );
};

export default PaymentSummary;
