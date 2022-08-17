import React, {useContext} from "react";
import Image from "../components/Images";
import { getClass } from "../utils/index";
import { Context } from "../context/Context";

function Photos() {
  const {allPhotos} = useContext(Context);
  
  const allPhotosElement = allPhotos.map((photo, idx) =>  (
       <Image key={photo.id} img={photo} className={getClass(idx)}/>
  ))

  return (
    <main className="photos">
      {allPhotosElement}
    </main>
  );
}

export default Photos;
