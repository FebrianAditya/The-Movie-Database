import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function FormLoginDua() {
    const [device, setDevice] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem("device", device)
        localStorage.setItem("address", address)
        localStorage.setItem("phoneNumber", phoneNumber)
    }

    function backTo() {
        history.push("/login")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Do you have a laptop/PC ?</label>
                <div class="form-check">
                    <input class="form-check-input" onChange={(e) => setDevice(e.target.value)} value="yes" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" onChange={(e) => setDevice(e.target.value)} value="no" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                        No
                    </label>
                </div>
                <div class="form-group col-md-6">
                    <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.value.target)} value={address} class="form-control" onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div class="form-group col-md-6">
                        <label>Phone Number</label>
                        <input type="number" class="form-control" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                <button onClick={backTo}>Back</button>
                <button type="submit">Next</button>
            </form>
        </>
    )
}