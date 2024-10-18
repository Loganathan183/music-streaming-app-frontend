import { createContext } from "react";

const songcontext = createContext({
    currentsong: null,
    setcurrentsong: (currentsong) => {},
        soundplayed: null,
        setsoundplayed: () => {},
        ispaused: null,
        setispaused: () => { },
    
})  
export default songcontext;