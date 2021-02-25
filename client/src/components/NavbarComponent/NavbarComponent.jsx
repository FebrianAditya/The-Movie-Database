import React from "react"
import "../NavbarComponent/NavbarComponent.css"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getDataMovie, getDataTv, getDataPeople } from "../../store/action"

export default function NavbarComponent() {
    const history = useHistory()
    const dispatch = useDispatch()

    function goToMovie(status) {
        // alert(status)
        dispatch(getDataMovie(status))
        history.push(`/movie`)
    }

    function goToTv(status) {
        // alert(status)
        dispatch(getDataTv(status))
        history.push(`/tvshow`)
    }

    function goToPeople(status) {
        dispatch(getDataPeople(status))
        history.push(`/people`)
    }

    return(
        <>
            <nav className="navbar navbar-light bg-light colorBackground colorButton sticky-top">
                <div className="container">
                    <Link exact to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/512px-Tmdb.new.logo.svg.png" alt="" width="60" height="40" className="d-inline-block align-top"/>
                    </Link>
                    <div className="flexMenu">
                        <li className="nav-item dropdown">
                            <div className="row">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movies
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button onClick={() => goToMovie("popular")}>Popular</button></li>
                                    <li><button onClick={() => goToMovie("now_playing")}>Now Playing</button></li>
                                    <li><button onClick={() => goToMovie("upcoming")}>Upcoming</button></li>
                                    <li><button onClick={() => goToMovie("top_rated")}>Top Rated</button></li>
                                </ul>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TV Shows
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button onClick={() => goToTv("popular")}>Popular</button></li>
                                    <li><button onClick={() => goToTv("airing_today")}>Airing Today</button></li>
                                    <li><button onClick={() => goToTv("on_the_air")}>On Tv</button></li>
                                    <li><button onClick={() => goToTv("top_rated")}>Top Rated</button></li>
                                </ul>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    People
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button onClick={() => goToPeople("popular")}>Popular</button></li>
                                </ul>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}