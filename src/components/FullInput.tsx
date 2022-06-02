import React, {ChangeEvent, useState} from 'react';
import {MessageType} from '../someState/someState';

type FullInputPropsType = {
    messages: Array<MessageType>
    onButtonHandler: (value: string) => void
}


export const FullInput = ({messages, onButtonHandler}: FullInputPropsType) => {

    const [value, setValue] = useState<string>('')

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickCallBack = () => {
        onButtonHandler(value)
        setValue('')
    }

    let mappedMessages = messages.map((m, index) =>
        <h4 key={index}>{m.message}</h4>)

    return (
        <div>
            <input value={value} onChange={onTextChange}/>
            <button onClick={onClickCallBack}>+</button>
            <div>
                {mappedMessages}
            </div>
        </div>
    );
};
