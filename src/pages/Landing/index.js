import "./style.css";

import { Header, Footer } from "../../components";
import {
  LeadingImageRow,
  TrailingImageRow,
  Infocard,
  Reviews,
  DownloadAppCard,
} from "./Sections";

import upiImage from "../../assets/upi.svg"; 
import appScreen from "../../assets/app-screen.png";

export const Landing = () => (
  <div className="container">
    <Header />
    <LeadingImageRow
      clName="stepImageAppScreen"
      image={appScreen}
      primary="Buy daily needs to specialty items"
      secondary="You find merchants fulfilling your everyday groceries to occassional hand crafts."
    />
    <TrailingImageRow
      clName="stepImageUPI"
      image={upiImage}
      primary="Pay Online"
      secondary="No more hassle of keeping change! Pay online with Debit Card, Gpay, PhonePE, Paytm or any of your favorite UPI app."
    />
    <Infocard />
    <Reviews />
    <DownloadAppCard />
    <Footer />
    <div className="rowSpace" />
  </div>
);
