import React,{useContext} from "react";
import "./style.css";
import C4 from './C4';
import {MyContext} from './index';
export default function C3() {
  //Let us use the hook. useContext
  //useState, useReducer , useEffect , useRef , useMemo , (useLayoutEffect , useImperativeHandle)

//Now , let us use the hook useContext to access the provider data
const rawData = useContext(MyContext);

  return (
      <div>
<h5>Inside C3 component <span style={{color:"red"}}>{rawData.b+1}</span></h5>
  
      <C4 />
    </div>
  );
}
