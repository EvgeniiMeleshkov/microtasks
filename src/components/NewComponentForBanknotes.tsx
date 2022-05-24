import React from "react";
import {FilterType} from "./Banknotes";
import {ButtonComponent} from "./ButtonComponent";

type NewComponentForBanknotesPropsType = {
    onClickFilterHandler: (buttonName: FilterType) => void
    currentMoney: {
        banknots: string
        value: number
        number: string
    }[]
}

export const NewComponentForBanknotes = (props: NewComponentForBanknotesPropsType) => {
    let mappedCurrentMoney = props.currentMoney.map((el, index) => {
        return (
            <li key={index}>
                <span>{el.banknots}</span>
                <span>{el.value}</span>
                <span>{el.number}</span>
            </li>
        )
    })

    return (
        <>
            <ul>
                {mappedCurrentMoney}
            </ul>
            <ButtonComponent callBack={() => props.onClickFilterHandler('All')} name={'All'}/>
            <ButtonComponent callBack={() => props.onClickFilterHandler('RUBLS')} name={'Rubles'}/>
            <ButtonComponent callBack={() => props.onClickFilterHandler('Dollars')} name={'Dollars'}/>
        </>
    )
}