import styled from "styled-components";

const Polaroid = ({
  photoUrl,
  caption,
}: {
  photoUrl: string;
  caption: string;
}) => {
  return (
    <StyledPolaroid photourl={photoUrl} className="card">
      <div className="photo__img"></div>
      <p className="photo__caption">{caption}</p>
    </StyledPolaroid>
  );
};

export default Polaroid;

const StyledPolaroid = styled.div<{ photourl: string }>`
  .photo__img {
    width: 100%;
    padding-bottom: 100%;
    background: ${({ photourl }) =>
      `#ffffff url(${photourl}) center center/cover no-repeat`};
    border-top: solid 20px #efefef;
    border-left: solid 18px #efefef;
    border-bottom: solid 90px #efefef;
    border-right: solid 18px #efefef;
  }

  .photo__caption {
    font-size: 12px;
    color: #121212;
    position: absolute;
    width: 200px;
    text-align: center;
    bottom: 20px;
    height: 60px;
    margin-left: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
