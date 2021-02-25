import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HeaderComponent, NavbarComponent, CarouselComponent, FooterComponent, PageGridsComponent } from "../components"
import Sandbox from "./sandbox"
import { getDataMovie } from "../store/action"

export default function LandingPage() {
    const dataMovie = useSelector((state) => state.dataMovie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataMovie("popular"))
        // console.log(dataMovie)
    }, [])

    return(
        <>
            {/* {JSON.stringify(dataMovie.data.results)} */}
            <Sandbox/>
            <CarouselComponent/>
            <div className="container mb-5">
                <div className="row mx-auto">
                    <div className="col-12 text-center my-5">
                        Preview
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                        <PageGridsComponent movie={dataMovie}/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </>
    )
}