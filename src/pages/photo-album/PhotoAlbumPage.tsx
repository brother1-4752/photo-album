import styled from "styled-components";
import CustomSuspense from "../../components/common/CustomSuspense";
import Logo from "../../components/common/icons/Logo";
import { useEffect, useState } from "react";
import PhotoAlbum from "../../components/photo-album/PhotoAlbum";

const PhotoAlbumPage = () => {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep % 3) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CustomSuspense
      fallback={
        <LogoWrapper>
          <Logo size="0.7" position={1} step={step} />
          <Logo size="0.7" position={2} step={step} />
          <Logo size="0.7" position={3} step={step} />
        </LogoWrapper>
      }
      maxDuration={3500}
    >
      <PhotoAlbum />
    </CustomSuspense>
  );
};

export default PhotoAlbumPage;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 15%;
`;
