import React from "react";

// import styled components
import { HeaderContent, HeaderWrapper } from "./styled";

// import image component
import { HeaderBackground } from "../Images";

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent>
      <h1>{siteTitle}</h1>
      <p>
        The #1 resource for finding your next sick shredder to make heads
        explode and achieve rock god status
      </p>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
