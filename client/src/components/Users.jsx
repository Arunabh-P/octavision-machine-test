import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/getAllUsers')
            console.log(data.users)
            setUsers(data.users)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log('here');
        getAllUsers()
    }, [])

    return (
        <div>

            {users && users?.map((user) => (

             <Link to = {`/profile/${user._id}`} > <p >{user.name}</p></Link>  

            ))}
        </div>
    )
}

export default Users