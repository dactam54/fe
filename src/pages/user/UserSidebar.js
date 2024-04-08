import React, { useEffect } from 'react'
import path from '../../utils/path'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSidebar } from '../../utils/sidebar'


const activedStyles = 'flex gap-2 p-2 items-center bg-[#fee] text-main border rounded-md border-[#d70018]'
const notActivedStyles = 'flex gap-2 p-2 items-center'


const UserSidebar = () => {
    const { islLogin } = useSelector(state => state.auth)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    if (!islLogin) return <Navigate to={`/${path.LOGIN}`} />


    return (
        <div className='w-full min-h-screen bg-white mt-[30px] flex justify-center'>
            <div className='w-main flex py-8 gap-4'>
                <div className='bg-gray-100 px-4 py-4 rounded-lg h-full flex-auto'>
                    {userSidebar.map(item => (
                        <NavLink
                            key={item.path}
                            to={`/${item.path}`}
                            className={({ isActive }) => isActive ? activedStyles : notActivedStyles}
                        >
                            <span>{item.icons}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
                <div className='h-full flex-none w-[78%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserSidebar