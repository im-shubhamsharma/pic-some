import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderStatus, setOrderStatus ] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((response) => setAllPhotos(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  function toogleFavorite(id) {
    setAllPhotos((prevPhotoArr) =>
      prevPhotoArr.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  }

  function addImageToCart(newImg) {
    setCartItems((prevCart) => [...prevCart, newImg]);
  }

  function removeImageFromCart(id) {
    setCartItems((prevCart) =>
      prevCart.filter(item => item.id !== id)
    );
  }


  return (
    <Context.Provider
      value={{
        allPhotos,
        toogleFavorite,
        cartItems,
        setCartItems,
        addImageToCart,
        removeImageFromCart,
        orderStatus,
        setOrderStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
