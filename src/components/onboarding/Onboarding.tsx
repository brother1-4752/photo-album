import styled from "styled-components";
import onboardingStepDataList from "../../repository/onboarding/onboardingStepDataList";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <>
      {onboardingStepDataList
        .filter((data) => data.step === step)
        .map((data, index) => (
          <StyledOnboarding key={index}>
            <div className="img__container">
              <img
                className="onboarding__img"
                src={data.imgUrl}
                alt={`${data.step}번째 이미지`}
              />
            </div>
            <div className="description__container">
              <blockquote className="onboarding__description">
                {data.description.split("\n").map((data, index) => (
                  <Fragment key={index}>
                    {data} <br />
                  </Fragment>
                ))}
              </blockquote>
            </div>
            <div className="dot__container">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  className={step === index + 1 ? "dot selected" : "dot"}
                  onClick={() => setStep(index + 1)}
                  key={index}
                ></div>
              ))}
            </div>
            <div className="btn_container">
              <div className="btn" onClick={() => navigate("photo-album")}>
                건너뛰기
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (step === 4) {
                    navigate("photo-album");
                  } else {
                    setStep((prev) => prev + 1);
                  }
                }}
              >
                {step === 4 ? "시작" : "다음"}
              </div>
            </div>
          </StyledOnboarding>
        ))}
    </>
  );
};

export default Onboarding;

const StyledOnboarding = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 480px;
  height: 100vh;
  gap: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .img__container > .onboarding__img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .description__container {
    .onboarding__description {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 21px;
      text-align: center;
      line-height: 1.5;
    }
  }

  .dot__container {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 3px;
    width: 100%;

    .dot {
      width: 24.5%;
      height: 5px;

      background-color: rgba(0, 0, 0, 0.15);
      cursor: pointer;
    }

    .dot.selected {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .btn_container {
    width: 95%;
    position: absolute;
    bottom: 10px;

    .btn {
      padding: 12px 24px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;

      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

    .btn:nth-child(2) {
      background-color: white;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
