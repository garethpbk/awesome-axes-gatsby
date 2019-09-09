import styled from "styled-components";

// import background image
import headerBackground from "../../../images/header-background.jpg";

const HeaderWrapper = styled.header`
  background-color: var(--dark);

  height: 400px;

  margin: 0 0 50px 0;

  position: relative;

  transition: all 0.15s linear;

  box-shadow: 0 0 1px 2px #ffffff, 0 0 2px 4px var(--green);

  /* &:hover {
    height: 150px;

    p {
      display: none;
    }
  } */

  &:before {
    background-image: url(${headerBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    content: "";

    display: block;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    height: 100%;
    width: 100%;

    opacity: 0.1;
  }
`;

export default HeaderWrapper;
