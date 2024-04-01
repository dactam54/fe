import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <h1>Home Page</h1>
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


            </div>
        </div>
    )
}

export default Home