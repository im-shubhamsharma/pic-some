import React, {useState, useEffect} from "react"
import axios from "axios"

const Context = React.createContext();

function ContextProvider(){

    const [allPhotos, setAllPhotos] = useState;
    
    useEffect(()=>{
        axios
          .get("https://api.unsplash.com/photos/?client_id=GRk2h5FasXAPQl_mo0oG3SQsAhKsH3WfLHTRhHMUPHc")
          .then((response) => console.log(response.data))
    },[])

}
