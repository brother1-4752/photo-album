import { useNavigate } from "react-router-dom";
import { MemoryDetailTypes } from "../../types/Memory/Memory";

export interface PhotoDetailProps {
  detail: MemoryDetailTypes;
}

const PhotoDetailHeader = ({ detail }: PhotoDetailProps) => {
  const navigate = useNavigate();
  return (
    <header className="detail__header">
      <div className="back" onClick={() => navigate("/photo-album")}>
        {"<"}
      </div>
      <div className="title">
        {detail.title.length > 12
          ? detail.title.slice(0, 12) + "..."
          : detail.title}
      </div>
      <div className="right"></div>
    </header>
  );
};

export default PhotoDetailHeader;
