import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Search from './Search'
import { apiGetCurrentUser } from '../apis/user'
import actionTypes from '../store/actions/actionTypes'
import Button from './Button'
import path from '../utils/path'
import { BsCart4 } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isShowMenu, setIsShowMenu] = useState(false)
    const [username, setUsername] = useState(null)


    const { isLogin } = useSelector(state => state.auth)
    const { isAdmin } = useSelector(state => state.app)
    const { updateCurrentUser } = useSelector(state => state.user)

    const getCurrentUser = async () => {
        const response = await apiGetCurrentUser()
        if (response.err === 0) {
            setUsername(response?.data?.name || "Chưa có thông tin")
            // alert('Đăng nhập thành công {response.data?.role === admin ? "Admin" : "User"}')
            console.log('Đăng nhập thành công', response)

        } else {
            dispatch({ type: actionTypes.LOGIN })
        }
    }
    useEffect(() => {
        if (isLogin) {
            setTimeout(() => {
                getCurrentUser()
            }, 500)
        }
        // getCurrentUser()
    }, [isLogin, updateCurrentUser])

    return (
        <div className='w-main m-auto h-16 flex gap-[10px] items-center px-[10px]'>

            <Link to={'/'}>
                <p className='ml-10'>Trang chủ</p>
            </Link>

            <div className='flex-auto ml-16 mr-12'>
                <Search />
            </div>

            {
                !isLogin ? <Button
                    text='Đăng nhập'
                    styles='bg-[#DF3346] px-2 py-2 text-white h-[42px] text-xs'
                    iconBefore={<BiUserCircle size={25} />}
                    handleClick={() => navigate(`/${path.LOGIN}`)}

                /> : <div
                    onClick={() => setIsShowMenu(prev => !prev)}
                    className='flex cursor-pointer text-sm px-2 py-2 rounded-md relative text-white h-[42px] flex-col'
                >
                    {isShowMenu && <div className='absolute top-full flex flex-col right-0 min-w-[150px] bg-white text-black shadow-md '>
                        <span
                            className='px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-200'
                            onClick={() => navigate(`/${path.USER}/${path.PROFILE}`)}
                        >
                            <GrUserAdmin />
                            <span>Nguời dùng</span>
                        </span>
                        {isAdmin && <span
                            className='px-4 flex border-b items-center gap-2 py-2 cursor-pointer hover:bg-gray-200'
                            onClick={() => navigate(`/${path.ADMIN}`)}
                        >
                            <GrUserAdmin />
                            <span>Quản trị</span>
                        </span>}
                        <span
                            className='px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-200'
                            onClick={() => dispatch({ type: actionTypes.LOGOUT })}
                        >
                            <AiOutlineLogout />
                            <span>Đăng xuất</span>
                        </span>
                    </div>}
                    <span style={{ color: "black" }}>Xin chào,</span>
                    <span style={{ color: "black" }}>{username}</span>
                </div>
            }
        </div>
    )
}

export default Header