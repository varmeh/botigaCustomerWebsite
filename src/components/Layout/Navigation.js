import { useHistory, useLocation } from "react-router";

import * as url from "../../data/url";

import home from "../../assets/home.svg";
import homeSelected from "../../assets/home-selected.svg";
import order from "../../assets/order.svg";
import orderSelected from "../../assets/order-selected.svg";
import cart from "../../assets/cart.svg";
import cartSelected from "../../assets/cart-selected.svg";
import profile from "../../assets/profile.svg";
import profileSelected from "../../assets/profile-selected.svg";

const navigation = [
  { label: "Home", icon: home, selectedIcon: homeSelected, path: url.home },
  {
    label: "Orders",
    icon: order,
    selectedIcon: orderSelected,
    path: url.orders,
  },
  { label: "Cart", icon: cart, selectedIcon: cartSelected, path: url.cart },
  {
    label: "Profile",
    icon: profile,
    selectedIcon: profileSelected,
    path: url.profile,
  },
];

export const Navigation = ({ cartCount = 0 }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="appNavigation">
      {navigation.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={index}
            className={isActive ? "active" : ""}
            onClick={() => history.push(item.path)}
          >
            <img
              src={isActive ? item.selectedIcon : item.icon}
              alt="nav-icon"
            />
            <label>{item.label}</label>
            {cartCount > 0 && item.label === "Cart" && (
              <span className="count">{cartCount}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};
