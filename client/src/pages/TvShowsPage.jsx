import React from "react"
import { useSelector } from "react-redux"
import { NavbarComponent, HeaderComponent } from "../components/index"

export default function TvShowsPage() {
    const dataTv = useSelector((state) => state.dataTv)

    return(
        <>
            <HeaderComponent/>
            <NavbarComponent/>  
            { JSON.stringify(dataTv)}
        </>
    )
}