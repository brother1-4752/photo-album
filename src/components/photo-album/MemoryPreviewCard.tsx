import styled from "styled-components";
import { MemoryPreviewCardTypes } from "../../types/Memory/Memory";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";

const MemoryPreviewCard = (memory: MemoryPreviewCardTypes) => {
  const currentMId = memory.mId;
  const naviagte = useNavigate();
  return (
    <StyledMemoryPreviewCard
      onClick={() => naviagte(`/photo-detail?mId=${currentMId}`)}
    >
      <div className="column__left">
        <img
          src={memory.mainPhotoUrl}
          alt="mainPhoto"
          style={{ width: "100%", borderRadius: "8px", aspectRatio: "16 / 9" }}
        />
      </div>
      <div className="column__right">
        <div className="top">
          {memory.title.length > 24
            ? memory.title
                .slice(0, 24)
                .split("\n")
                .map((data, index) => (
                  <Fragment key={index}>
                    {data} <br />
                  </Fragment>
                )) + "..."
            : memory.title.split("\n").map((data, index) => (
                <Fragment key={index}>
                  {data} <br />
                </Fragment>
              ))}
        </div>
        <div className="bottom">
          <div>{memory.date}</div>
          <div className="category">{memory.categoryList?.join(", ")}</div>
        </div>
      </div>
    </StyledMemoryPreviewCard>
  );
};

export default MemoryPreviewCard;

const StyledMemoryPreviewCard = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    opacity: 0.8;
  }

  .column__left {
    position: relative;
  }

  .column__right {
    position: relative;
    .top {
      font-size: 14px;
      font-family: PretendardB;
      line-height: 1.2;
    }
    .bottom {
      position: absolute;
      bottom: 5px;
      right: 5px;
      gap: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 12px;
      opacity: 0.8;

      .category {
        text-decoration: underline;
      }
    }
  }
`;
