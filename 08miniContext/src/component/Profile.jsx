import React, { useContext } from 'react'
import { userContext } from '../context/userContextProvider'

function Profile() {
    const { user } = useContext(userContext);
    return (
        <div>
            {user ? <p>Welcome {user.username}</p> : <p>Please login</p>}
        </div>
    )
}

export default Profile
