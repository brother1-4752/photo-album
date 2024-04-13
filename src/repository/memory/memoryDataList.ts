import {
  MemoryDetailTypes,
  MemoryPreviewCardTypes,
} from "../../types/Memory/Memory";

import p_1_1 from "../../images/p_1_1.webp";
import p_1_2 from "../../images/p_1_2.webp";
import p_1_3 from "../../images/p_1_3.webp";
import p_2_1 from "../../images/p_2_1.webp";
import p_2_2 from "../../images/p_2_2.webp";
import p_2_3 from "../../images/p_2_3.webp";
import p_3_1 from "../../images/p_3_1.webp";
import p_3_2 from "../../images/p_3_2.webp";
import p_4_1 from "../../images/p_4_1.webp";
import p_4_2 from "../../images/p_4_2.webp";
import p_4_3 from "../../images/p_4_3.webp";
import p_5_1 from "../../images/p_5_1.webp";
import p_5_2 from "../../images/p_5_2.webp";
import p_5_3 from "../../images/p_5_3.webp";
import p_6_1 from "../../images/p_6_1.webp";
import p_6_2 from "../../images/p_6_2.webp";
import p_6_3 from "../../images/p_6_3.webp";
import p_7_1 from "../../images/p_7_1.webp";
import p_7_2 from "../../images/p_7_2.webp";
import p_8_1 from "../../images/p_8_1.webp";
import p_8_2 from "../../images/p_8_2.webp";
import p_8_3 from "../../images/p_8_3.webp";
import p_9_1 from "../../images/p_9_1.webp";
import p_9_2 from "../../images/p_9_2.webp";

export const memoryPreviewCardList: MemoryPreviewCardTypes[] = [
  {
    mId: 1,
    mainPhotoUrl: p_1_1,
    title: "꿀잼이었던 메코클🥰\n하빈쌤,김동하!",
    date: "2024.01.20",
    categoryList: ["놀거리"],
  },
  {
    mId: 2,
    mainPhotoUrl: p_2_1,
    title: "여의도 아쿠아리움🐟\n저녁으로 규카츠!",
    date: "2024.01.28",
    categoryList: ["놀거리", "맛집"],
  },
  {
    mId: 3,
    mainPhotoUrl: p_3_1,
    title: "감동이었던\n발렌타인데이🌹",
    date: "2024.02.14",
  },
  {
    mId: 4,
    mainPhotoUrl: p_4_1,
    title: "즐거웠던 강릉여행🚊\n아르떼 뮤지엄, 밤바다",
    date: "2024.02.17 ~ 02.18",
    categoryList: ["여행", "명소"],
  },
  {
    mId: 5,
    mainPhotoUrl: p_5_1,
    title: "재원이는 미술 천재😎\n성수미술관",
    date: "2024.02.24",
    categoryList: ["취미생활"],
  },
  {
    mId: 6,
    mainPhotoUrl: p_6_1,
    title: "성수동 나들이🧺 \n힙한 재원&형일",
    date: "2024.03.03",
  },
  {
    mId: 7,
    mainPhotoUrl: p_7_1,
    title: "뿌듯했던 화이트데이🍭",
    date: "2024.03.14",
  },
  {
    mId: 8,
    mainPhotoUrl: p_8_1,
    title: "사모예드 카페에서🐶\n즐거운 주말",
    date: "2024.03.23",
    categoryList: ["명소"],
  },
  {
    mId: 9,
    mainPhotoUrl: p_9_1,
    title: "100일 기념🎉\n오마카세, 케이크",
    date: "2024.04.07",
  },
];

export const memoryDetailList: MemoryDetailTypes[] = [
  {
    mId: 1,
    title: "꿀잼이었던 메코클🥰\n하빈쌤,김동하!",
    mainPhotoUrl: p_1_1,
    photoUrlList: [p_1_1, p_1_2, p_1_3],
    captions: [
      "스티커 굿즈 받고",
      "메코클 가기전,\n인생네컷 찰칵",
      "입장해서 기념샷",
    ],
    descriptions: [
      "메타 코미디 클럽에 입장하니,\n 스티커 굿즈를 받았다.\n하빈쌤, 김동하, 현석이랑 재율이.\n 기분 좋게 공연 시작을 기다렸다.",
      "메타 코미디 클럽을 가기 전에 시간이 남아\n 인생네컷에서 사진을 찍었다.\n테마가 빵빵이였는데 넘 웃겼당",
      "공연 시작 전, 재원이랑 셀카!",
    ],
    date: "2024.01.20",
  },
  {
    mId: 2,
    title: "여의도 아쿠아리움🐟\n저녁으로 규카츠!",
    mainPhotoUrl: p_2_1,
    photoUrlList: [p_2_1, p_2_2, p_2_3],
    captions: ["아쿠아리움1", "아쿠아리움2", "규카츠"],
    descriptions: [
      "아쿠아리움 안에서\n 기념 셀카 찍었당\n",
      "청순한 재원이 넘 이쁘당\n",
      "여의도 이동해서 규카츠를 먹었다\n바로 옆자리에서 소개팅하고 있었는데\n재원이랑 같이 흥미진진하게 직관했당",
    ],
    date: "2024.01.28",
  },
  {
    mId: 3,
    title: "감동이었던 발렌타인데이🌹",
    mainPhotoUrl: p_3_1,
    photoUrlList: [p_3_1, p_3_2],
    captions: ["마카롱 선물", "디퓨저도 받았당"],
    descriptions: [
      "재원아 모든 날 모든 순간 함께해\n 나도 사랑해🥰",
      "싱그러운 향기가 나는\n디퓨저도 선물로 받았다.\n취.향.저.격!",
    ],
    date: "2024.02.14",
  },
  {
    mId: 4,
    title: "즐거웠던 강릉 여행!\n아르떼 뮤지엄, 밤바다",
    mainPhotoUrl: p_4_1,
    photoUrlList: [p_4_1, p_4_2, p_4_3],
    captions: ["강릉 밤바다에서 기념샷", "아르떼 뮤지엄1", "아르떼 뮤지엄2"],
    descriptions: [
      "곰돌이 가방이랑 닭강정 세트로\n카메라 세팅 후 기념샷!\n우린 역시 천재당ㅋㅋ",
      "아르떼 뮤지엄 입장!\n재원이랑 셀카 찍고\n작품 구경하며 즐거운 시간 보냈다.",
      "아르떼 뮤지엄에선 계속 테마가 바뀌는데,\n순간 밝아지더니 무지개가 나와서\n재빠르게 재원이에게 서보라고 했당\n무지개와 맞춰 기념샷 찍었는데\n재원이랑 배경이 넘 잘 어울려서 뿌듯했당",
    ],
    date: "2024.02.17 ~ 02.18",
  },
  {
    mId: 5,
    title: "재원이는 미술 천재\n성수미술관",
    mainPhotoUrl: p_5_1,
    photoUrlList: [p_5_1, p_5_2, p_5_3],
    captions: ["성수미술관1", "천재 미술작가 재원이", "색칠 잘못해 아쉬운 나"],
    descriptions: [
      "작업 복장으로 갈아입고 거울샷!\n재원이는 헬로키티, 나는 고양이 사진으로 정했다",
      "집중하고 있는 재원이\n물감으로 색을 만들고 있다\n그 순간을 담고 싶어서 카메라로 찍었당\n미술 작가처럼 나왔당. 넘 이뻐",
      "러시안 블루 고양이로 색칠하려고 했는데\n너무 찐하게 배색해서 내 고양이가\n목이 어디있는지 구분이 안되었당ㅋㅋ\n아쉬워하는 모습이 담겼당",
    ],
    date: "2024.02.24",
  },
  {
    mId: 6,
    title: "성수동 나들이🧺\n힙한 재원&형일",
    mainPhotoUrl: p_6_1,
    photoUrlList: [p_6_1, p_6_2, p_6_3],
    captions: ["힙돌이", "힙순이1", "힙순이2"],
    descriptions: [
      "서울숲 나들이를 갔당.\n소품샵에 갔는데 힙한 벙거지 모자 발견!",
      "강아지 그림이 포인트당\n뭔가 랩을 잘할 것 같당",
      "귀엽고 힙한 재원이\n검은색 벙거지 모자 쓰고 거울샷!",
    ],
    date: "2024.03.03",
  },
  {
    mId: 7,
    title: "뿌듯했던 화이트데이🍭",
    mainPhotoUrl: p_7_1,
    photoUrlList: [p_7_1, p_7_2],
    captions: ["화이트데이1", "화이트데이2"],
    descriptions: [
      "화이트데이를 맞아\n꽃이 담겨 있는 선물을 준비했다\n실물로 봤을때 넘 이뻐서 기분이 좋았다",
      "예쁜 재원아, 항상 고맙고 사랑해! 앞으로도 모든 날 모든 순간 함께하자❤️",
    ],
    date: "2024.03.14",
  },
  {
    mId: 8,
    title: "사모예드 카페에서🐶\n즐거운 주말",
    mainPhotoUrl: p_8_1,
    photoUrlList: [p_8_1, p_8_2, p_8_3],
    captions: [
      "꿀잠 자는 사모예드",
      "일하는 사모예드, 기념샷!",
      "짱 큰 말라뮤트도 있었다!",
    ],
    descriptions: [
      "꿀잠 자는 사모예드에게 먹이를 줬는데,\n눈도 꼭 감은 채 먹이만 낼름했당\n넘 기여워서 기념으로 찍었당",
      "직원분들이 이제 일하자~!\n하는 소리와 함께 갱쥐들이 각자 자리로 갔당\n움직이지 않고 자리를 지키는게 신기했당",
      "마루라는 말라뮤트\n쓰다듬고 있는 재원이!\n짱 크고 털이 부드러웠당",
    ],
    date: "2024.03.23",
  },
  {
    mId: 9,
    title: "100일 기념🎉\n오마카세, 케이크",
    mainPhotoUrl: p_9_1,
    photoUrlList: [p_9_1, p_9_2],
    captions: ["한식 오마카세", "100일 기념 케이크"],
    descriptions: [
      "합정에 있는 한식 오마카세를 갔다\n둘다 한식을 좋아해서 가면 좋겠다고\n예전에 생각했는데, 100일 기념으로 방문했다",
      "재원이가 준비한 100일 케이크\n우리 캐릭터도 너무 귀엽고,\n 모든날 모든순간 함께해\n라는 문구가 너무 감동적이었다\n초코케이크였는데 맛도 좋았당",
    ],
    date: "2024.04.07",
  },
];
