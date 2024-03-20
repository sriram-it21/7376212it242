import { useEffect, useState } from "react"


const Counter = () => {
    const [count, setCount]= useState(10) 
    const [count1,setCount1]=useState(0)

    
    useEffect(() => {
        console.log('effect')
    },[count])

    const increment = () =>{
        setCount(count + 1)
    }
    
    const increment1 = () =>{
        setCount1(count1 + 1)
    }
    const decrement = () =>{
        
        if(count>0){
            setCount(count - 1)
        }
        else{
            alert('NO NEGETIVE VALUES')
        }
    }
        
return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={increment}>+</button>
        <button  onClick={decrement}>-</button>
    
        <h1>Count1:{count1}</h1>
        <button onClick={increment1}>+</button>
    </>
  )
}

export default Counter