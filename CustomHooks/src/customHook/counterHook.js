import React, { useEffect, useState } from 'react'

const useCounter = (flag=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    if(flag) {
        setTimeout(() => {
            setCounter((prevCounter)=> prevCounter + 1)
        }, 1000); 
    } else {
        setTimeout(() => {
            setCounter((prevCounter)=> prevCounter - 1)
        }, 1000); 
    }

  })
    return counter
}
export default useCounter