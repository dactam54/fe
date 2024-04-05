import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import actionTypes from '../../store/actions/actionTypes'

const Home = () => {
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.auth)
    const { isAdmin } = useSelector(state => state.app)
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch({ type: actionTypes.LOGOUT })
        navigate('/login')
    }

    return (
        <div>
            <div>
                <div>
                    <p>Đây là trang public</p>
                </div>
                <div>
                    <Link to='/manager_user'>Quản lý người dùng</Link>
                </div>
                <div>
                    <Link to='/login'>Đăng nhập</Link>
                </div>
                <div>
                    <Link to='/register'>Đăng kí</Link>
                </div>

                {/* <button onClick={() => dispatch({ type: actionTypes.LOGOUT })}>
                    <span>Logout</span>
                </button> */}

                <button onClick={handleLogout}>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default Home