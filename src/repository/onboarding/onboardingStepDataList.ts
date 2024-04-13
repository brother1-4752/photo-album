import ob_1 from "../../images/ob_1.webp";
import ob_2 from "../../images/ob_2.webp";
import ob_3 from "../../images/ob_3.webp";
import ob_4 from "../../images/ob_4.webp";

interface OnboardingStepData {
  step: 1 | 2 | 3 | 4;
  imgUrl: string;
  description: string;
}

const onboardingStepDataList: OnboardingStepData[] = [
  {
    step: 1,
    imgUrl: ob_1,
    description: `안녕, 재원아! 우리 만난지\n벌써 100일 넘었네!`,
  },
  {
    step: 2,
    imgUrl: ob_2,
    description: "재원이랑 재밌게 놀면서\n나도 덕분에 더 밝아졌어!",
  },
  {
    step: 3,
    imgUrl: ob_3,
    description: "그동안의 추억을\n특별하게 보관하고 싶었어!",
  },
  {
    step: 4,
    imgUrl: ob_4,
    description: "앞으로도 이쁜 추억\n함께 만들자, 사랑해❤️",
  },
];

export default onboardingStepDataList;
