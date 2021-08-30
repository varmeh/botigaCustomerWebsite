import "./style.scss";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddIcon from '@material-ui/icons/Add';
import { AppLayout, AddressItem } from "../../components";
import { searchData } from "../../data/results";
import { useHistory } from "react-router";

export const Addresses = () => {
  const history = useHistory();

  return (
    <AppLayout showNavigation={false}>
      <div className="addresses">
        <div className="header">
          <KeyboardBackspaceIcon
            onClick={() => {
              history.push("/profile");
            }}
            style={{ cursor: "pointer" }}
          />
          <span>Saved Addresses</span>
        </div>
        <div className='items'>
        
        {searchData.map((item, index) => (
          <AddressItem
            {...item}
            key={index}
          />
        ))}
        </div>
        <div className='new' onClick={()=>{history.push('/location')}} >
            <AddIcon />
            <span>New address</span>

        </div>
      </div>
    </AppLayout>
  );
};
