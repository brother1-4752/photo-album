import { useLocation } from "react-router-dom";
import { memoryDetailList } from "../../repository/memory/memoryDataList";
import styled from "styled-components";
import PhotoDetailHeader from "./PhotoDetailHeader";
import PhotoDetailList from "./PhotoDetailList";

const PhotoDetail = () => {
  const { search } = useLocation();
  const currentMId = new URLSearchParams(search).get("mId");
  if (currentMId === null) return <div>잘못된 접근입니다.</div>;
  const currentMemoryDetailData = memoryDetailList.filter(
    (data) => data.mId === Number(currentMId)
  )[0];
  return (
    <StyledPhotoDetail total={currentMemoryDetailData.photoUrlList.length}>
      <PhotoDetailHeader detail={currentMemoryDetailData} />
      <PhotoDetailList detail={currentMemoryDetailData} />
    </StyledPhotoDetail>
  );
};

export default PhotoDetail;

const StyledPhotoDetail = styled.div<{ total: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ total }) => `${total * 100}vh`};
  width: 100%;
  min-width: 320px;
  max-width: 480px;
  background: linear-gradient(#eecbcb, #f8c5c5, #ffc5c5);

  .detail__header {
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 10px 0;
    background: linear-gradient(#ffc5c5, #f8c5c5, #eecbcb);
    position: fixed;
    top: 0;
    z-index: 10;

    .back {
      cursor: pointer;
      padding-left: 20px;
    }

    .right {
      cursor: pointer;
      padding-right: 20px;
    }

    .title {
      user-select: none;
    }
  }
`;
