import { useState } from "react";
import "./style.scss";
import { Carousel, StoreCard } from "..";

export const StoreFilterByCategory = ({ items = [], categories = [] }) => {
  const [selected, setSelected] = useState("All"); 
  const filteredItems =
    selected === "All" 
      ? items
      : items.filter(item => item.category === selected);

  return (
    <div className="storeFilterByCategory">
      <div className="tabs">
        <Carousel
          settings={{
            dots: false,
            autoplay: false,
            infinite: false,
            variableWidth: true,
          }}
        >
          {["All", ...categories].map((item, index) => (
            <div
              key={index}
              className={`tabItems ${selected === item ? "active" : ""}`}
              onClick={() => setSelected(item)}
            >
              {item}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="content">
        {filteredItems.map((item, index) => (
          <StoreCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
