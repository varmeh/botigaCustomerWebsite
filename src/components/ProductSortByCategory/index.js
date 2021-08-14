import { useState } from "react";

import "./style.scss";

import { Product } from "..";

import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";

const ProductAccordion = ({ title = "", items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="productAccordion">
      <div
        className={`title ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div>
          <span>{items?.length}</span>
          <h5>{title}</h5>
        </div>
        <img src={open ? arrowUpIcon : arrowDownIcon} alt="arrow" />
      </div>
      {open && (
        <div className="content">
          {items?.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export const ProductSortByCategory = ({ items = [], categories = [] }) => (
  <div>
    {categories?.map((category, index) => {
      const products = items?.filter(item => item?.category === category);
      return <ProductAccordion key={index} title={category} items={products} />;
    })}
  </div>
);
