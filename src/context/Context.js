import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

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
        photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite}
          : photo
      )
    );
  }

  console.log(allPhotos);

  return (
    <Context.Provider value={{ allPhotos, toogleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
