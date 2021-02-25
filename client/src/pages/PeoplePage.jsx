import React from "react"
import { useSelector } from "react-redux"
import { NavbarComponent, HeaderComponent } from "../components"

export default function PeoplePage() {
    const dataPeople = useSelector((state) => state.dataPeople)

    return(
        <>
            <HeaderComponent/>
            <NavbarComponent/>
            {JSON.stringify(dataPeople)}
        </>
    )
}