import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import actionTypes from '../../store/actions/actionTypes'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'


const Home = () => {

    return (
        <div className='w-full h-full relative'>
            <div>Trang chủ</div>
            <div className='w-full bg-repeat-y bg-contain relative bg-white'>
                <div className='fixed z-50 top-0 w-full bg-main shadow-xl text-white'>
                    <Header />
                </div>

                <div className='w-full h-full'>
                    <div className='w-full h-16'></div>
                    <div className='w-full h-full'>
                        <Outlet />
                    </div>

                    <div className='w-full mt-4 border-t bg-gray-100 text-xs flex justify-center py-6'>
                        <div className='w-main flex justify-between gap-4'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home