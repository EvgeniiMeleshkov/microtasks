import React, {useState} from "react";
import {NewComponentForBanknotes} from "./NewComponentForBanknotes";

export type FilterType = 'All' | 'RUBLS' | 'Dollars'

export const Banknotes = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }
    filter === 'All'
        ? currentMoney = money
        : currentMoney = money.filter(el =>  el.banknots === filter)


    return (
       <NewComponentForBanknotes
           onClickFilterHandler={onClickFilterHandler}
           currentMoney={currentMoney}
       />
    )
}