import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';

const Login = () => {
    let navigate = useNavigate();
    const [data, changeData] = useState({
        "email": "",
        "password": ""
    });

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/signIn", data)
            .then((response) => {
                if (response.data.status === "Success") {
                    alert("Success");
                    sessionStorage.setItem("Token", response.data.token);
                    sessionStorage.setItem("UserID", response.data._id);
                    navigate("/addbus");
                } else {
                    alert(response.data.status); // Display the actual error message
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred during sign-in. Please try again later.");
            });
    };

    return (
        <div>
            <NavbarLogin />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            <form onSubmit={readValue}>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Email ID :</label>
                                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Password :</label>
                                    <input type="password" name="password" id="" value={data.password} onChange={inputHandler} className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button type="submit" className="btn btn-success">Login</button>
                                    <br /><br /><br /><center>
                                        <Link to="/signup">Click Here if you are a New User</Link>
                                    </center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
