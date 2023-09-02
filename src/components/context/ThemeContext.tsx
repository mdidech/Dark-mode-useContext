import { createContext } from "react";
import { themes } from "./theme";


export const ThemeContext=createContext(themes)

type ThemeContextProviderProps={
 children:React.ReactNode
}

 const ThemeContextProvider=({children}:ThemeContextProviderProps)=>{


 return <ThemeContext.Provider value={themes}>
  {children}
 </ThemeContext.Provider>
}
export default ThemeContextProvider