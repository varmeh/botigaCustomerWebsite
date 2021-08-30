import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

import "./style.scss";

import { ReadMore } from "..";

import minusIcon from "../../assets/minus.svg"; 
import plusIcon from "../../assets/plus.svg";

export const Product = ({
  title = "",
  subTitle = "",
  price = 0,
  content = "",
  image = "",
}) => {
  const [count, setCount] = useState(0);
  const [preview, setPreview] = useState(false);

  const addToCart = () =>
    count === 0 ? (
      <button onClick={() => setCount(1)}>Add</button>
    ) : (
      <div className="actions">
        <button className="minus" onClick={() => setCount(prev => prev - 1)}>
          <img src={minusIcon} alt="minus" />
        </button>
        <span>{count}</span>
        <button className="plus" onClick={() => setCount(prev => prev + 1)}>
          <img src={plusIcon} alt="plus" />
        </button>
      </div>
    ); 

  return (
    <div className="product">
      <div className="details">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <h5>&#x20b9;{price}</h5>
        <ReadMore text={content} limit={40} />
      </div>
      <div
        className={`previewAction ${image ? "" : "noImage"} addToCartButton`}
      >
        {image && (
          <img src={image} alt="product" onClick={() => setPreview(true)} />
        )}
        {addToCart()}
      </div> 
      <Modal 
        isOpen={preview}
        toggle={() => setPreview(false)}
        className="productPreview"
      >
        <ModalBody>
          <img src={image} alt="product" />
          <div className="details addToCartButton">
            <div className="info" >
              <h3>{title}</h3>
              <h4>{subTitle}</h4>
              <h5>&#x20b9;{price}</h5>
            </div>
            {addToCart()}
          </div>
          <p>{content}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};
