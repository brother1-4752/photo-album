import { useEffect, useState } from "react";
import CustomSuspense from "../../components/common/CustomSuspense";
import Logo from "../../components/common/icons/Logo";
import styled from "styled-components";
import PhotoDetail from "../../components/photo-detail/PhotoDetail";

const PhotoDetailPage = () => {
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
          <Logo size="0.6" position={1} step={step} />
          <Logo size="0.6" position={2} step={step} />
          <Logo size="0.6" position={3} step={step} />
        </LogoWrapper>
      }
      maxDuration={3500}
    >
      <PhotoDetail />
    </CustomSuspense>
  );
};

export default PhotoDetailPage;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 50%;
  min-width: 160px;
  max-width: 240px;
`;
