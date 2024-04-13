import styled from "styled-components";
import PhotoAlbumHeader from "./PhotoAlbumHeader";
import Carousel from "./Carousel";
import MemoryPreviewList from "./MemoryPreviewList";
import PhotoListHeader from "./PhotoListHeader";

const PhotoAlbum = () => {
  return (
    <StyledPhotoAlbum>
      <PhotoAlbumHeader />
      <Carousel />
      <PhotoListHeader />
      <MemoryPreviewList />
    </StyledPhotoAlbum>
  );
};

export default PhotoAlbum;

const StyledPhotoAlbum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  min-width: 320px;
  max-width: 480px;
`;
