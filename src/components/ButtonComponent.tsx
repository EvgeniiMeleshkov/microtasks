import React from "react";

export type ButtonComponentPropsType = {
    name: string
    callBack: () => void
}

export const ButtonComponent = ({name, callBack}: ButtonComponentPropsType) => {

    const onClickHandler = () => {
        callBack()
    }


    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}