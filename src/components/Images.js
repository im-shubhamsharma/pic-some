import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toogleFavorite, addImageToCart, cartItems, removeImageFromCart } =
    useContext(Context);

  function cartIcon() {
    if (cartItems.map((item) => item.id).includes(img.id)) {
      return (
        <i
          onClick={() => removeImageFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addImageToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />

      {hovered && (
        <i
          onClick={() => toogleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      )}

      {img.isFavorite && (
        <i
          onClick={() => toogleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      )}

      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
