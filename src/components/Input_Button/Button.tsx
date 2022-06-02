import React from 'react';
type ButtonPropsType = {
    name: string
    callBack: () => void
}
export const Button = ({name, callBack}: ButtonPropsType) => {

    const buttonOnClickHandler = () => {
        callBack()

    }

    return (
            <button onClick={buttonOnClickHandler}>{name}</button>
    );
};
