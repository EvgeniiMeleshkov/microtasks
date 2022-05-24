import React from "react";
type FooterPropsType = {
    titleForFooter: string
}
export const Footer = ({titleForFooter}: FooterPropsType) => {
    return (
        <div>{titleForFooter}</div>
    )
}