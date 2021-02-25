import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function FormLoginomponent() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [jobDesc, setJobDesc] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()

    function submitForm(e) {
        e.preventDefault()
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("jobDesc", jobDesc)
        localStorage.setItem("gender", gender)
        localStorage.setItem("email", email)
        history.push("/logindua")
    }

    // function cekDulu() {
    //     const firstData = {
    //         firstName: localStorage.getItem("firstName"),
    //         lastName: localStorage.getItem("lastName"),
    //         jobDesc: localStorage.getItem("jobDesc"),
    //         gender: localStorage.getItem("gender"),
    //         email: localStorage.getItem("email"),
    //     }
    //     console.log(firstData);
    // }

    return(
        <>
            <form onSubmit={submitForm}>
                <div class="form-row container">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" value={firstName} class="form-control" onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    {/* {firstName} */}
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    {/* {lastName} */}
                    <div class="form-group col-md-6">
                        <label>Job Desc</label>
                        <input type="text" class="form-control" onChange={(e) => setJobDesc(e.target.value)}/>
                    </div>
                    <label>Gender</label>
                    <div class="input-group">
                        <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e) => {
                            const selectedGender = e.target.value
                            setGender(selectedGender)
                        }}>
                            <option selected>Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit">Next</button>
            </form>
            
        </>
    )
}