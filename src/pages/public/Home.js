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
                <Link to='/login'>Đăng nhập/ Đăng kí</Link>
            </div>
        </div>
    )
}

export default Home