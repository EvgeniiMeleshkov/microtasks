import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Cars, CarType} from "./components/Cars";
import {ButtonComponent} from "./components/ButtonComponent";
import {UseStateButton} from "./components/UseStateButton";
import {Banknotes} from "./components/Banknotes";

function App() {

    let tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "Type Script", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 3, title: "Redux", isDone: false}
    ]
    let tasks2 = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Titanic", isDone: true}
    ]
    let tasks3 = [
        {id: 1, title: "Whitney Houston", isDone: true},
        {id: 2, title: "Rock", isDone: false},
        {id: 3, title: "J-rock", isDone: true}
    ]
    let tasks4 = [
        {id: 1, title: "Idiot", isDone: true},
        {id: 2, title: "Learn Js", isDone: false},
        {id: 3, title: "Novel", isDone: true}
    ]
    let tasks5 = [
        {id: 1, title: "Scirym", isDone: true},
        {id: 2, title: "Pillars of eternity", isDone: false},
        {id: 3, title: "RPG", isDone: true}
    ]

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const callBackFoo1 = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const callBackFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const callBackFoo3 = () => {
        console.log('stupid button')
    }



    return (
        <div >
            <Header titleForHeader={'Header'}/>
            <Cars cars={topCars}/>
            <ButtonComponent name={'Vasya'} callBack={() => callBackFoo1("Hi! I`m Vasya", 25, 'Live in Minsk')}/>
            <ButtonComponent name={'Dimich'} callBack={() => callBackFoo2("I`m Dimich!")}/>
            <ButtonComponent name={'Stupid button'} callBack={callBackFoo3}/>
            <UseStateButton/>
            <Banknotes/>
            <div className="App">
                <TodoList title={'What to learn'} tasks={tasks1}/>
                <TodoList title={'Movies'} tasks={tasks2}/>
                <TodoList title={'Music'} tasks={tasks3}/>
                <TodoList title={'Books'} tasks={tasks4}/>
                <TodoList title={123} tasks={tasks5}/>
            </div>
            <Footer titleForFooter={'Footer'}/>
        </div>
    );
}

export default App;
