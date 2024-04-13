import styled from "styled-components";
import { PhotoDetailProps } from "./PhotoDetailHeader";
import SlideContainer from "./SlideContainer";

const PhotoDetailList = ({ detail }: PhotoDetailProps) => {
  return (
    <StyledPhotoDetailList total={detail.photoUrlList.length}>
      <SlideContainer detail={detail} />
    </StyledPhotoDetailList>
  );
};

export default PhotoDetailList;

const StyledPhotoDetailList = styled.div<{ total: number }>`
  width: 100%;
  height: ${({ total }) => `${total * 100}vh`};
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
