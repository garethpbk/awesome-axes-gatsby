import styled from "styled-components";

const CarouselSlide = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${props => props.color};

  font-size: 5rem;
  display: inline-block;
`;

export default CarouselSlide;
