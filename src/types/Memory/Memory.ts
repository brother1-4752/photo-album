import React from "react";

type Category = "놀거리" | "명소" | "취미생활" | "맛집" | "여행";

export interface MemoryPreviewCardTypes {
  mId: number; // PK
  mainPhotoUrl: string;
  title: string; // 글자수 제한 필요
  date: string; // 정규식: 2024.01.01(월)
  categoryList?: Category[]; // 중복 제거 후 배열화
  likeCnt?: number; // 추후 반영 예정
}

export interface MemoryDetailTypes extends MemoryPreviewCardTypes {
  photoUrlList: string[]; // 글자수 제한 필요
  descriptions: string[]; // 글자수 제한 필요
  captions: string[];
}

export interface Memory {
  mId: number;
  mainPhotoUrl: string;
  photoUrlList: string[];
  title: string; // 글자수 제한 필요
  description: string; // 글자수 제한 필요
  date: string; // 정규식: 2024.01.01(월)
  categoryList?: Category[];
  likeCnt?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryData {
  categoryNo: number;
  type: string;
  icon: React.ReactNode;
}
