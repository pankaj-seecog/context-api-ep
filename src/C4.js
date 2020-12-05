import React from "react";
import "./style.css";
import C5 from './C5';
import {MyContext} from './index';
export default function C4() {
  return (
    <div>
    <MyContext.Consumer>
    {
({a})=>{
  return (
<h5>Inside C4 component <span style={{color:"red"}}>{a}</span></h5>
  )
}
    }
    </MyContext.Consumer>
    
      <C5 />
    </div>
  );
}
