import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Cars, CarType} from './components/Cars';
import {ButtonComponent} from './components/ButtonComponent';
import {UseStateButton} from './components/UseStateButton';
import {Banknotes} from './components/Banknotes';
import {FullInput} from './components/FullInput';
import {MessageType} from './someState/someState';
import {Input} from './components/Input_Button/Input';
import {Button} from './components/Input_Button/Button';

type AppPropsType = {
    cars: Array<CarType>
    messages: Array<MessageType>
}

function App({cars, messages}: AppPropsType) {

    const [value, setValue] = useState('')
    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const [messagesArr, setMessages] = useState<Array<MessageType>>(messages)
    const onButtonHandler = (value: string) => {
        setMessages([
            {message: value},
            ...messagesArr
        ])
        setValue('')
    }

    const [lable, setLable] = useState('')

    const callBackFoo1 = (subscriber: string, age: number, adress: string) => {
        setLable(`${subscriber}, ${age}, ${adress}`)
    }
    const callBackFoo2 = (subscriber: string) => {
        setLable(subscriber)
    }
    const callBackFoo3 = (subscriber: string) => {
        setLable('stupid button')
    }
    const callBackFoo4 = () => {
        setLable('')
    }

    return (
        <div>
            <Header titleForHeader={'Header'}/>

            <div className="App">
                <div>
                    <Input value={value} onTextChange={onTextChange}/>
                    <Button name={'+'} callBack={() => onButtonHandler(value)}/>
                    {/*<FullInput onButtonHandler={onButtonHandler} messages={messagesArr}/>*/}
                </div>
                {messagesArr.map(m => <h5>{m.message}</h5>)}
                <hr/>
                <div>
                    <Cars cars={cars}/>
                </div>
                <hr/>
                <div>
                    <UseStateButton/>
                </div>
                <hr/>
                <div>
                    <Banknotes/>
                </div>
                <hr/>
                <div>
                    <div><p>{lable}</p></div>
                    <ButtonComponent name={'Vasya'}
                                     callBack={() => callBackFoo1(
                                         'Hi! I`m Vasya',
                                         25,
                                         'Live in Minsk')}/>
                    <ButtonComponent name={'Dimich'} callBack={() => callBackFoo2('I`m Dimich!')}/>
                    <ButtonComponent name={'Stupid button'} callBack={() => callBackFoo3('')}/>
                    <ButtonComponent name={'Reset'} callBack={callBackFoo4}/>
                </div>
            </div>

            <Footer titleForFooter={'Footer'}/>
        </div>
    );
}

export default App;
