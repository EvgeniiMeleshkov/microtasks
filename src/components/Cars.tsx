import React from "react";

export type CarType = {
    manufacturer: string
    model: string
}
type CarsPropsType = {
    cars: CarType[]
}

export const Cars = ({cars}: CarsPropsType) => {

    let mappedCars = cars.map((el, i) => {
        return (
            <table key={i}>
                <tr key={i + 2}>
                    <th key={el.manufacturer}>{el.manufacturer}</th>
                </tr>
                <tr key={i + 4}>
                    <td key={el.model}>{el.model}</td>
                </tr>
            </table>
        )
    })

    return (
        <>
            {mappedCars}

        </>
    )
}