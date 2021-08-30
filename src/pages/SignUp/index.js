import "./style.scss";
import { useHistory } from "react-router";
import { AppLayout, SignupForm } from "../../components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export const SignUp = () => {
  const history = useHistory();
  return (
    <AppLayout showNavigation={false}>
    <div className='signup'>
     <div className="header">
          <KeyboardBackspaceIcon
            onClick={() => {
              history.push("/home");
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Sign Up</span>
      </div>
      <p>
          Create account and find products delivered right to your doorstep.
      </p>

      <div className="signupForm">
        <SignupForm/>
      </div>

      
      </div>
    </AppLayout>
  );
};
