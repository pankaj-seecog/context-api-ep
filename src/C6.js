import React from 'react';
import {MyContext} from './index';

class C6 extends React.Component {
static contextType = MyContext;
constructor(){
  super()
}

componentDidMount(){
  let contextData = this.context;
  console.log('2..The context  data is ',contextData)
}

render(){
  let contextData = this.context;
  console.log('The context  data is ',contextData)
return (
  <>
  <h5>Inside C6 {contextData.a}</h5>

  </>
)
}
}

export default C6;