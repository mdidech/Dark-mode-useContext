import {ThemeContext} from './context/ThemeContext';
import { useContext, useState } from 'react';
import "./box.css";

export const Box = () => {
  const [isDark,setIsDark]=useState(true)
  const themes=useContext(ThemeContext)
const styles={
  backgroundColor: isDark ? themes.dark.bg : themes.light.bg,
  color: !isDark ? themes.dark.bg : themes.light.bg,

}
  return <div className="box" style={styles}>
    <h1>{isDark ? 'Dark' : "Light"} Theme</h1>
    <span className="icons" onClick={()=>setIsDark(!isDark)}>
      {isDark ? (<i className="fa-solid fa-sun"></i>):(<i className="fa-regular fa-moon"></i>)}
      </span>
  </div>;
};
