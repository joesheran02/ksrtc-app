import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogin from './NavbarLogin'

const SignUp = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "phnno": "",
            "gender": "",
            "email": "",
            "password": "",
            "confirmpass": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/signUp", data).then(
            (response) => {
                if (response.data.status === "success" && data.password === data.confirmpass ) {
                    alert("Success, User is Added")
                } else {
                    alert("Details Dont Match, Check and Retry !!!")
                }
            }
        ).catch()
    }

    return (
        <div>
            <NavbarLogin/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name='phnno' value={data.phnno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" value={data.gender} onChange={inputHandler} id="">
                                    <option value="default">---Select From Here---</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                    <option value="o">Others</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmpass" value={data.confirmpass} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add User</button>
                                <br /><br /><br /><center>
                                    <Link to="/">Click Here to Go to Login Page</Link>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
