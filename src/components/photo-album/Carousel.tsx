import styled from "styled-components";
import createDatingPeriod from "../../utils/createDatingPeriod";
import carouselBg from "../../images/carousel.webp";

const Carousel = () => {
  const result = createDatingPeriod();

  return (
    <StyledCarousel bgurl={carouselBg}>
      <div className="top__text">사랑한지...❤️</div>
      <div className="bottom__text">{result}</div>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div<{ bgurl: string }>`
  background-image: url(${(props) => props.bgurl});
  background-size: cover;
  border-radius: 8px;
  width: 90%;
  padding-bottom: 45%;
  opacity: 0.9;
  position: relative;
  margin-bottom: 20px;

  .top__text,
  .bottom__text {
    position: absolute;
    color: #fafafa;
  }

  .top__text {
    top: 10px;
    left: 10px;
  }

  .bottom__text {
    bottom: 10px;
    right: 10px;
  }
`;
