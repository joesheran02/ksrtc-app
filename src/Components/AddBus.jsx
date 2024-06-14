import axios from 'axios'
import React, { useState } from 'react'
import NavbarBus from './NavbarBus'

const AddBus = () => {
    const [data, setData] = useState(
        {
            "bname":"",
            "route":"",
            "bno":"",
            "dname":""
        })

    const inputHandler = (event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                if (response.data.status ==="success") {
                    alert("Bus is Added Successfully")
                } else {
                    alert("Something Went Wrong! Bus not Added")
                }
            }
        ).catch()
    }
return (
    <div>
        <NavbarBus/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Number</label>
                            <input type="text" className="form-control" name='bno' value={data.bno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Route</label>
                            <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Driver Name</label>
                            <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue} >Add Bus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddBus
