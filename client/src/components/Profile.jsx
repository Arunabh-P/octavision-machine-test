import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
    const [profile,setProfile] = useState()
    const getProfile = async () =>{
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/finduser/${params.id}`)
            setProfile(data.user)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getProfile()
    },[])
  return (
    <div>
        <h1>Name : {profile?.name}</h1>
        <p>Phone Number : {profile?.phoneNumber}</p>
    </div>
  )
}

export default Profile