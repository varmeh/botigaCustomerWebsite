import "./style.scss";

import { Navigation } from "./Navigation";

export const AppLayout = ({
  children,
  showNavigation = true,
  cartCount = 0,
}) => (
  <>
    <div
      className="appLayout"
      style={{ paddingBottom: showNavigation ? 70 : 0 }}
    >
      <div className="appContent">{children}</div>
      {showNavigation && <Navigation cartCount={cartCount} />}
    </div>
  </>
);
