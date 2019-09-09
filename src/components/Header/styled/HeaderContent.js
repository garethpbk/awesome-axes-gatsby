import styled from "styled-components";

// import base styled component
import { Container } from "../../styled";

const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  height: 100%;

  h1 {
    color: var(--green);
    font-weight: 300;
    text-shadow: 3px 3px var(--blue);
  }

  p {
    color: var(--green);
    font-size: 2rem;
    font-style: italic;

    padding: 1.25em 1em 1em 1em;
  }
`;

export default HeaderContent;
