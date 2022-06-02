import React, {ChangeEvent} from 'react';
type InputPropsType = {
    value: string
    onTextChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const Input = ({onTextChange, value}: InputPropsType) => {
    return (
            <input value={value} onChange={onTextChange}/>
    );
};
