import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function ConfirmationComponent() {
    const [fullName, setFullName] = useState("")
    const [jobdesc, setJobdesc] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [device, setDevice] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const firstName = localStorage.getItem("firstName")
        const lastName = localStorage.getItem("lastName")
        const jobDesc = localStorage.getItem("jobDesc")
        const gender = localStorage.getItem("gender")
        const email = localStorage.getItem("email")
        const device = localStorage.getItem("device")
        const phoneNumber = localStorage.getItem("phoneNumber")
        const address = localStorage.getItem("address")
        setFullName(`${firstName} ${lastName}`)
        setJobdesc(jobDesc)
        setGender(gender)
        setEmail(email)
        setDevice(device)
        setPhoneNumber(phoneNumber)
        setAddress(address)
    }, [])

    function backTo() {
        history.push("/logindua")
    }

    function finishRegister() {
        localStorage.clear();
        history.push("")
    }

    return(
        <>
            <div className="container">
                <h3>Confirmation data of entry</h3><br/><br/>
                <p>Full Name: {fullName}</p> <br/>
                <p>Job Desc: {jobdesc}</p> <br/>
                <p>Gender: {gender}</p> <br/>
                <p>email: {email}</p> <br/>
                <p>Have a Laptop/PC: {device}</p> <br/>
                <p>address: {address}</p> <br/>
                <button onClick={backTo}>Back</button>
                <button onClick={finishRegister}>Submit</button>
            </div>
        </>
    )
}