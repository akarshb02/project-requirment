import React,{useState} from 'react';
import axios from 'axios';

function App(){
  const [count,setCount] = useState(4)

  function decrementCount(){
    setCount(count-1)
  }

  function increment(){
      //it doesn't increase by 2 so 
      //setCount(count+1)
      //setCount(count+1)

    setCount(prevalue => prevalue + 1)
    setCount(prevalue => prevalue + 1)
  }

return(
<>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
</>
)

}
  
export default App;
