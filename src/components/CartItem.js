import React, {useState, useContext} from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types"

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const {removeImageFromCart} = useContext(Context)
   
  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeImageFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
    item : PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
}

export default CartItem;
