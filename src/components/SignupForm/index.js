import "./style.scss";
import { useState } from "react";
import { TextField } from "@material-ui/core";

import { config } from "../../data/config";

export const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [btnDisabled, setBtnDisabled] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();

  };

  const btnClasses = btnDisabled ? "signUpButton" : "formSubmit";

  return (
    <div className="signupForm">
      <form onSubmit={submitHandler}>
        <TextField
          className="text"
          label="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          InputLabelProps={{ className: "label" }}
          InputProps={{ className: "resize" }}
          variant="outlined"
        />
        <TextField
          className="text"
          label="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          InputLabelProps={{ className: "label" }}
          InputProps={{ className: "resize" }}
          variant="outlined"
        />
        <TextField
          className="text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ className: "label" }}
          InputProps={{ className: "resize" }}
          variant="outlined"
        />
        <TextField
          className="text"
          label="Whatsapp Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          InputLabelProps={{ className: "label" }}
          InputProps={{ className: "resize" }}
          variant="outlined"
        />

        <p>
          By signing up, you agree to all{" "}
          <a href={config.documents.terms} target="_blank" rel="noreferrer">
            Terms & Conditions
          </a>
        </p>

        <button className={btnClasses} disabled>
          Continue
        </button>
      </form>
    </div>
  );
};
