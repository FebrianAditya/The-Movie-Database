import React from "react"
import "../HeaderComponent/HeaderComponent.css"
import { Link, useHistory } from "react-router-dom"

export default function HeaderComponent() {
    const history = useHistory()
    function goToLogin() {
        history.push("/login")
    }

    return(
        <>
            <nav className="navbar navbar-light colorHeader">
                <div className="container">
                    <Link className="navbar-brand mx-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/512px-Tmdb.new.logo.svg.png" alt="" width="80" height="60"/>
                    </Link>
                    <div className="ml-auto colorButton">
                        <button onClick={goToLogin} type="button" className="btn btn-outline-primary">Register</button>
                    </div>
                </div>
            </nav>
        </>
    )
}