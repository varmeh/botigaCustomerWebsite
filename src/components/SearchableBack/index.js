import { useEffect, useState } from "react";

import "./style.scss";

import backIcon from "../../assets/back.svg";
import searchIcon from "../../assets/search-black.svg";
import closeIcon from "../../assets/close.svg";

export const SearchableBack = ({
  onBackClick = () => 0,
  onSearch = () => 0,
}) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onSearch(text);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="searchableBack">
      <button onClick={onBackClick}>
        <img src={backIcon} alt="back" />
      </button>
      {open ? (
        <div className="input">
          <input
            value={text}
            placeholder="Search..."
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={() => {
              setOpen(false);
              setText("");
            }}
          >
            <img src={closeIcon} alt="close" />
          </button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>
          <img src={searchIcon} alt="search" />
        </button>
      )}
    </div>
  );
};
