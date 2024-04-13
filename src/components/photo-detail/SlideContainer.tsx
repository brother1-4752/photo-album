import styled from "styled-components";
import { PhotoDetailProps } from "./PhotoDetailHeader";
import Polaroid from "./Polaroid";

const SlideContainer = ({ detail }: PhotoDetailProps) => {
  const TOTAL_CNT = detail.photoUrlList.length;

  return (
    <StyledSlideContainer total={TOTAL_CNT}>
      {detail.photoUrlList.map((photoUrl, index) => (
        <div className="slide" key={index}>
          <Polaroid photoUrl={photoUrl} caption={detail.descriptions[index]} />
        </div>
      ))}
    </StyledSlideContainer>
  );
};

export default SlideContainer;

const StyledSlideContainer = styled.div<{ total: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: ${({ total }) => `${total * 100}vh`};
  overflow: hidden;

  .slide {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* .description {
      margin-top: 100px;
      text-align: center;
    } */
  }

  .card {
    width: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 1;
    -webkit-transform: translate(0, 50px);
    -moz-transform: translate(0, 50px);
    -ms-transform: translate(0, 50px);
    transform: translate(0, 50px);
    -webkit-transition: opacity 0.6s 0.1s, transform 0.6s ease;
    transition: opacity 0.6s 0.1s, transform 0.6s ease;
    transition-delay: 0ms;
    margin-left: -36px;
    margin-top: -60px;
  }

  .card-in-view {
    opacity: 1 !important;
    -webkit-transform: translate(0, 0) !important;
    -moz-transform: translate(0, 0) !important;
    -ms-transform: translate(0, 0) !important;
    transform: translate(0, 0) !important;
  }
`;
