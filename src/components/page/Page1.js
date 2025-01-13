import React, { useState } from 'react'

const Page1 = () => {
    const [count,setCount] = useState(0);
    const onCount = () =>{
        setCount((prevCount =>{
            return prevCount +1;
        }));  
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={}>Count</button>
    </div>
  )
}

export default Page1
