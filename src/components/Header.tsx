import React from "react";

type HeaderPropsType = {
    titleForHeader: string
}

export const Header = ({titleForHeader}: HeaderPropsType) => {
    return (
        <div>{titleForHeader}</div>
    )
}