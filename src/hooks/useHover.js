import React, {useState} from "react"

function useHover(){
    const [hovered, setHovered] = useState(false)

    enter = () => setHovered(true)
    leave = () => setHovered(false)
}

export default useHover