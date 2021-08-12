import { useHistory } from "react-router-dom";

import "./style.scss";

import { AppLayout, SearchSuggestion } from "../../components";
import { searchData } from "../../data/results";
import { home } from "../../data/url";

import closeIcon from "../../assets/close.svg";
import searchIcon from "../../assets/search.svg";

export const Location = () => {
  const history = useHistory();

  return (
    <AppLayout showNavigation={false}>
      <div className="location">
        <h1>
          Select Location
          <button onClick={() => history.push(home)}>
            <img src={closeIcon} alt="close" />
          </button>
        </h1>
        <div className="input">
          <input placeholder="Search Apartments, pin code..." />
          <img src={searchIcon} alt="search" />
        </div>
        <h4>Currently Serving</h4>
        {searchData.map((item, index) => (
          <SearchSuggestion
            {...item}
            key={index}
            last={index === searchData?.length - 1}
            onClick={() => history.push(home)}
          />
        ))}
      </div>
    </AppLayout>
  );
};
