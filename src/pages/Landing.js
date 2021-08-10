import React from "react";

import { Header, Footer } from "../components";
import { LandingLayout } from "../layouts";

export const Landing = () => (
  <div className="container">
    <Header />
    <LandingLayout />
    <Footer />
    <div className="rowSpace" />
  </div>
);
