import { useState } from "react";

import "./style.scss";

import {
  AppLayout,
  CurrentLocation,
  StoreCardSlider,
  StoreFilterByCategory,
  BannerImages,
  Alert,
} from "../../components";
import { config } from "../../data/config";

import bannerImage from "../../assets/demo/banner1.png";
import product1 from "../../assets/demo/product1.svg";
import product2 from "../../assets/demo/product2.svg";
import product3 from "../../assets/demo/product3.png";
import product4 from "../../assets/demo/product4.png";

const stores = [
  {
    id: "1",
    image: product1,
    title: "24 Mantra Organic",
    subTitle: "Flat 15% Off,Coupon Inside",
    time: "Tomorrow",
    category: "Grocery",
  },
  {
    id: "2",
    image: product2,
    title: "Akrium",
    subTitle: "Brownies, Pastry & Cheesecakes",
    time: "11 Aug, Wed",
    category: "Home Decor",
    organic: true,
  },
  {
    id: "3",
    image: product3,
    title: "24 Mantra Organic",
    subTitle: "Flat 15% Off,Coupon Inside",
    time: "12 Aug, Thu",
    category: "Bakery",
    homechef: true,
  },
  {
    id: "4",
    image: product4,
    title: "Akrium",
    subTitle: "Brownies, Pastry & Cheesecakes",
    time: "13 Aug, Fri",
    category: "Fruits & Veggies",
    topSeller: true,
  },
];
const bannerImages1 = [
  { image: bannerImage, url: "/store/1" },
  { image: bannerImage, url: "/store/2" },
  { image: bannerImage, url: "/store/3" },
];
const bannerImages2 = [
  { image: bannerImage, url: config.store.appStore, redirect: true },
];

export const Home = () => {
  const [showAlert, setAlert] = useState(false);

  return (
    <AppLayout cartCount={10}>
      <div className="home">
        <CurrentLocation
          merchantCount={10}
          address="Adharsh Palm Retreat, Phase 3, Mumbai, India"
        />
        <StoreCardSlider title="Newly Launched" items={stores} />
        <BannerImages items={bannerImages1} />
        <StoreCardSlider title="Last Day to Order" info={true} items={stores} />
        <BannerImages items={bannerImages2} />
        <StoreFilterByCategory
          items={stores}
          categories={["Fruits & Veggies", "Home Decor", "Grocery", "Bakery"]}
        />
      </div>
      <Alert
        show={showAlert}
        onClose={() => setAlert(false)}
        message="These merchants deliver only once or twice a week, so quickly order before Mid-night 12 and get them delivered tomorrow"
        confirmText="Okay, Got it!"
      />
    </AppLayout>
  );
};
