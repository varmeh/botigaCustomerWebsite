import "./style.scss";

export const SearchSuggestion = ({
  name = "",
  address = "",
  last = false,
  onClick = () => 0,
}) => (
  <div className={`searchSuggestion ${last ? "last" : ""}`} onClick={onClick}>
    <h5>{name}</h5> 
    <p>{address}</p> 
  </div>
);
