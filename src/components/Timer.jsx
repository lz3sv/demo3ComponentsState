import {useState} from 'react'
export default function Timer(){
    const [count,setCount]=useState(0)
    //let count=stateArr[0] //read only
    //let setCount=stateArr[1]
    setTimeout(()=>{
        setCount(count+1)
    }, 1000)
    return(
        <>
            <h2>Counter</h2>
            <p>{count}</p>
        </>
    )
}