import styled from "styled-components";
import { memoryPreviewCardList } from "../../repository/memory/memoryDataList";
import MemoryPreviewCard from "./MemoryPreviewCard";

const MemoryPreviewList = () => {
  return (
    <StyledMemoryPreviewList>
      {memoryPreviewCardList.map((memory) => (
        <MemoryPreviewCard key={memory.mId} {...memory} />
      ))}
    </StyledMemoryPreviewList>
  );
};

export default MemoryPreviewList;

const StyledMemoryPreviewList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
