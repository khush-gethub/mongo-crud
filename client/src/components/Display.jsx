import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Display = () => {
    const [user, setUser] = useState([]);
    const getData = async () => {
        const res = await axios.get('http://127.0.0.1:4000/users')
        setUser(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        getData()


    }, [])


    return (


        <>
            <div className="container">
                <h2 className="mb-4">User Data Display</h2>
                <table className="table table-striped table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(
                                (user ,i) => {
                                    <tr>
                                        <th scope="row">{i+1}</th>
                                        <td>{user.uname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                    </tr>
                                }
                            )
                        }

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Display