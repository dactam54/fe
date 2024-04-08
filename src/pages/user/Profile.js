import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Profile = () => {
    const { isLogin } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div>Profile</div>
    )
}

export default Profile