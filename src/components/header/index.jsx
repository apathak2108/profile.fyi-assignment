"use client";
import React from "react";
import {
  StyledCartIconContainer,
  StyledCartItemsCount,
  StyledHeader,
  StyledHeaderItemsContainer,
  StyledLogo,
} from "./header.styled";
import Image from "next/image";
import { STRINGS } from "@/constants";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const cartCount = useSelector(
    (state) => state?.checkout?.cartProductIds?.length
  );
  const handleLogoClick = () => {
    router.push("/home");
  };
  const handleCartClick = () => {
    router.push("checkout");
  };
  return (
    <StyledHeader>
      <StyledHeaderItemsContainer>
        <StyledLogo onClick={handleLogoClick}>{STRINGS.HEADER_LOGO}</StyledLogo>
        <StyledCartIconContainer onClick={handleCartClick}>
          <Image
            src={STRINGS.CART_ICON_PATH}
            height={STRINGS.CART_ICON_HEIGHT}
            width={STRINGS.CART_ICON_WIDTH}
            alt={STRINGS.CART_ICON_ALT_TEXT}
          />
          {cartCount > 0 && (
            <StyledCartItemsCount>{cartCount}</StyledCartItemsCount>
          )}
        </StyledCartIconContainer>
      </StyledHeaderItemsContainer>
    </StyledHeader>
  );
};

export default Header;
