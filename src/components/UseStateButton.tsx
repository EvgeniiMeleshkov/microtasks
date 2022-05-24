import React, {useState} from "react";

export const UseStateButton = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }
    const toZeroOnClickHandler = () =>{
        setA(0)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={toZeroOnClickHandler}>0</button>
        </>
    )
}