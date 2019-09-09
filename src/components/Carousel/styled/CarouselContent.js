import styled from "styled-components";

const getTransform = current => `${current * -100}%`;

const CarouselContent = styled.div`
  height: 100%;
  width: 100%;

  position: relative;

  transform: ${props => `translateX(${getTransform(props.current)})`};

  transition: transform 0.5s ease-in-out;
`;

export default CarouselContent;
