import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

import {
  AppLayout,
  SearchableBack,
  ProductSortByCategory,
  PayableAmount,
  Product,
} from "../../components";
import { Name, Features, Query } from "./Sections";
import { cart, home } from "../../data/url";

import productIcon from "../../assets/demo/product7.png";

const categories = ["BEVERAGES", "COOKIE", "DESERTS"];
const products = Array(50)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Chocolate Ganache",
    subTitle: "500 gms",
    price: 120,
    content:
      index % 4 === 0
        ? "Contrary to popular belief, Lorem Ipsum is not simply random text"
        : "",
    image: index % 4 === 0 ? productIcon : undefined,
    category: categories[index % 3],
  }));

export const Store = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const filteredProducts =
    products?.filter(item =>
      item?.title?.toLowerCase?.()?.includes(searchText?.toLowerCase?.())
    ) || [];

  return (
    <AppLayout
      showNavigation={false}
      element={
        searchText ? (
          <></>
        ) : (
          <PayableAmount
            count={2}
            amount={956}
            addressTitle="House of Rasda"
            addressContent="Rohini Colony, Radha Nagar, A.S Ram Nagar, Bengaluru, Karnataka 560002"
            onClick={() => history.push(cart)}
          />
        )
      }
    >
      <div className="store">
        <SearchableBack
          onBackClick={() => history.push(home)}
          onSearch={setSearchText}
        />
        {searchText ? (
          filteredProducts?.map((item, index) => (
            <Product {...item} key={index} />
          ))
        ) : (
          <>
            <Name />
            <Features />
            <Query />
            <div className="categories">
              <h2>Categories</h2>
              <ProductSortByCategory categories={categories} items={products} />
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
};
