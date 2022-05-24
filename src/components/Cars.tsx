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

                <tr key={i}>
                    <th key={el.manufacturer}>{el.manufacturer}</th>
                    <td key={el.model}>{el.model}</td>
                </tr>

        )
    })

    return (
        <table>
            {mappedCars}
        </table>
    )
}