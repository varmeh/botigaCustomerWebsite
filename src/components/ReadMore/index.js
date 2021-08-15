import { useState } from "react";

import "./style.scss";

export const ReadMore = ({ text = "", limit = 0 }) => {
  const [showMore, setShowMore] = useState(true);
  const [content, setContent] = useState(
    limit > 0 ? text?.slice(0, limit) : text
  );

  return text ? (
    <div className="readMore">
      {content}
      {showMore && limit > 0 && (
        <>
          ...
          <span
            onClick={() => {
              setContent(text);
              setShowMore(false);
            }}
          >
            More
          </span>
        </>
      )}
    </div>
  ) : null;
};
