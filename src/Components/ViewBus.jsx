import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarBus from './NavbarBus'

const ViewBus = () => {
    const [data, changeData] = useState(
        []
    )

    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(() => fetchData(), [])
    return (
        <div>
            <NavbarBus/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-stripped" >
                            <thead>
                                <tr>
                                    <th>Bus Number</th>
                                    <th>Bus Name</th>
                                    <th>Route</th>
                                    <th>Driver Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <td>{value.bno}</td>
                                            <td>{value.bname}</td>
                                            <td>{value.route}</td>
                                            <td>{value.dname}</td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBus
