"use client";
import React from "react";
import { StyledHeader, StyledHeaderItemsContainer } from "./header.styled";
import Image from "next/image";
import { STRINGS } from "@/constants";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderItemsContainer>
        <span>{STRINGS.HEADER_LOGO}</span>
        <span>
          <Image
            src={STRINGS.CART_ICON_PATH}
            height={STRINGS.CART_ICON_HEIGHT}
            width={STRINGS.CART_ICON_WIDTH}
            alt={STRINGS.CART_ICON_ALT_TEXT}
          />
        </span>
      </StyledHeaderItemsContainer>
    </StyledHeader>
  );
};

export default Header;
