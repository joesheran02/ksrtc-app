import axios from 'axios';
import React, { useState } from 'react';
import NavbarBus from './NavbarBus';

const SearchBus = () => {
    const [data, setData] = useState({ "bno": "" });
    const [result, setResult] = useState([]);

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        axios.post("http://localhost:8080/search", data)
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    };

    const deleteValue = (id) => {
        let input = { "_id": id };
        console.log(input)
        axios.post("http://localhost:8080/delete", input)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Deleted");
                    
                } else {
                    alert("Something went wrong");
                }
            })
            .catch((error) => {
                console.error("There was an error deleting the data!", error);
            });
    };

    return (
        <div>
            <NavbarBus />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="busNumber" className="form-label">Bus Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="bno"
                            value={data.bno}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-warning" onClick={readValue}>Search</button>
                    </div>
                    <div className="col-12 mt-5">
                        <center><h2>-----Result-----</h2></center>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Bus Number</th>
                                    <th>Bus Name</th>
                                    <th>Route</th>
                                    <th>Driver Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((value, index) => (
                                    <tr key={value._id}>
                                        <td>{value._id}</td>
                                        <td>{value.bname}</td>
                                        <td>{value.route}</td>
                                        <td>{value.dname}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={()=>{
                                                    deleteValue(value._id)
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBus;
