import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const {toogleFavorite} = useContext(Context);

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

      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
}

export default Image;
