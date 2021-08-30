
import { useState } from "react";
import "./style.scss";


import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const payments = [ 
  {
    name: "UPI",
    about: "Google pay, Phone Pe, etc... ",
    image: "checkout-upi",
    value: "upi",
  },
  {
    name: "Debit Card",
    about: "Visa, Mastercard & all cards ",
    image: "checkout-debit",
    value: "debit",
  },
  {
    name: "Net banking",
    about: "All Indian banks  ",
    image: "checkout-bank",
    value: "bank",
  },
];

export const PayingModes = () => {
  const [selected, setSelected] = useState("upi");

  const selectedMode = (mode) =>{
    setSelected(mode)
  }

  return (
    <div className="payModes">
      <span>Pay Using</span>

      <form className="payContainer">
        {payments.map((item, index) => (
          <PayMode {...item} selected = {selected} setSelected={selectedMode} key={index} />
        ))}
      </form>
    </div>
  );
};

const PayMode = ({ name = "", about = "", image = "", value = "", setSelected, selected}) => {
  return (
    <label className={selected === value ? "payCard active" : "payCard"}
    onClick={()=> {setSelected(value)}}>
      <div
        className="payInfo"
      >
        <img src={require(`../../assets/${image}.svg`).default} alt="img." />
        <div className="content">
          <p>{name} </p>
          <span>{about} </span>
        </div>
      </div>
      <Checkbox
        className="checkbox"
        icon={
          selected === value ? <CircleCheckedFilled  style={{ color: "green" }}/>:
        <CircleUnchecked />}

        checkedIcon={selected === value ? <CircleCheckedFilled  style={{ color: "green" }}/>:
        <CircleUnchecked />}
      />
    </label>
  );
};
