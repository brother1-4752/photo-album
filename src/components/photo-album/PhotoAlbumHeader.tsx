import styled from "styled-components";

const PhotoAlbumHeader = () => {
  return (
    <StyledHeader className="photoalbum__header">
      <div></div>
      <h1>Photo Album</h1>
      <div></div>
    </StyledHeader>
  );
};

export default PhotoAlbumHeader;

const StyledHeader = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0 10px 0;
`;
