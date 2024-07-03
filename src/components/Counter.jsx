import { useState } from "react"
import './Counter.css'
import KillCounter from "./KillCounter"
export default function Counter(){
    const [count2, incrementCount]=useState(0)
    const incrementButtonClickHandler=()=>{
        //console.log('Click')
        incrementCount(count2+1)
    }
    const decrementButtonClickHandler=()=>{
        //console.log('Click')
        incrementCount(count2-1)
    }
    const resetButtonClickHandler=()=>{
        //console.log(e)
        incrementCount(0)
    }
    let countText=`Positive ${count2}`
    let color='green'
   
    if(count2<0){
        countText=`Negative ${count2}`
        color='red'
        
    }
    return(
        <>
            <h2>Counter</h2>
            <KillCounter count={count2} />

            <p 
            style={{color: color}} 
            className={count2<0 ? 'negative-text' : 'positive-text'}
            >
                {countText}
            </p>
            <button onClick={decrementButtonClickHandler}>Decrement me!</button>
            <button onClick={incrementButtonClickHandler}>Increment me!</button>
            {count2<10 && <button onClick={resetButtonClickHandler}>Reset!</button>}
        </>

    )
}