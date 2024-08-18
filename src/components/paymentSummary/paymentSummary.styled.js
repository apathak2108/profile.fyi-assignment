import styled from "styled-components";

export const StyledPaymentSummaryContainer = styled.div`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 20%;
  margin: 0 auto;
  position: fixed;
  top: 74px;
  right: 44px;

  @media (max-width: 768px) {
    position: relative;
    width: 80%;
    margin-left: 60px;
    margin-bottom: 12px;
  }
`;

export const StyledSummaryHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const StyledSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

export const StyledSummaryValue = styled.span`
  font-weight: bold;
`;

export const StyledSummaryTotal = styled(StyledSummaryItem)`
  font-size: 20px;
  border-top: 1px solid #ddd;
  padding-top: 16px;
  margin-top: 16px;
`;

export const StyledProceedToPaymentButton = styled.div`
  background-color: #2874f0;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  height: 41px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 12px 0;
  &:hover {
    cursor: pointer;
    background-color: #1e5dc2;
  }
`;
