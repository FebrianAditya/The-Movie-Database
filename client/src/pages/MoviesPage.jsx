import React, { useEffect } from "react"
import { NavbarComponent, HeaderComponent, ListCardComponent } from "../components"
import { useDispatch, useSelector } from "react-redux"

export default function MoviesPage() {
    const dispatch = useDispatch()
    const dataMovie = useSelector((state) => state.dataMovie)
    // useEffect(() => {
    //     // getDataMovie()
    //     dispatch(getDataMovie())
    // }, [])

    return(
        <>
            <HeaderComponent/>
            <NavbarComponent/>
            <ListCardComponent/>
            {/* { JSON.stringify(dataMovie) } */}

        </>
    )
}