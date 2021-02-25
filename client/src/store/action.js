import Axios from "axios"
const baseUrlMovie = "https://api.themoviedb.org/3/movie/"
const baseUrlTv = "https://api.themoviedb.org/3/tv/"
const baseUrlPerson = "https://api.themoviedb.org/3/person/"

export function getDataMovie(status) {
    return(dispatch, getState) => {
        Axios({
            method: "GET",
            url: baseUrlMovie + status,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZlY2FiNzA3NjBmY2M1OGRjMGEzYjRiMDgxYWVjMCIsInN1YiI6IjYwMzVhODg4NmNmM2Q1MDA0MGZkM2Q5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDC5XlvMugB--6pmrYmS-vmZkCtK20oIlDWJQRMV6Ao"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_MOVIES",
                    payload: res
                })
            })
            .catch(err => {
                console.log(err, "ini err");
            })
    }
}

export function getDataTv(status) {
    return(dispatch, getState) => {
        // console.log(status, "masuuuk");
        Axios({
            method: "GET",
            url: baseUrlTv + status,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZlY2FiNzA3NjBmY2M1OGRjMGEzYjRiMDgxYWVjMCIsInN1YiI6IjYwMzVhODg4NmNmM2Q1MDA0MGZkM2Q5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDC5XlvMugB--6pmrYmS-vmZkCtK20oIlDWJQRMV6Ao"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_TV",
                    payload: res
                })
            })
            .catch(err => {
                console.log(err, "ini err");
            })
    }
}

export function getDataPeople(status) {
    return(dispatch, getState) => {
        // console.log(status, "masuuuk");
        Axios({
            method: "GET",
            url: baseUrlPerson + status,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZlY2FiNzA3NjBmY2M1OGRjMGEzYjRiMDgxYWVjMCIsInN1YiI6IjYwMzVhODg4NmNmM2Q1MDA0MGZkM2Q5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDC5XlvMugB--6pmrYmS-vmZkCtK20oIlDWJQRMV6Ao"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_PEOPLE",
                    payload: res
                })
            })
            .catch(err => {
                console.log(err, "ini err");
            })
    }
}