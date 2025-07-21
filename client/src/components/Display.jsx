import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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


    const handleDelete = async (id) => {
        await axios.delete(`http://127.0.0.1:4000/users/${id}`)
        setUser(user.filter(userss => userss._id !== id))
    }

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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, i) => (
                                <tr key={user._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{user.uname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => { handleDelete(user._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="btn btn-outline-dark">Back</button></Link>
            </div>
        </>
    )
}
export default Display