import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { apiRegister } from '../../apis/user'

const Register = () => {
    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (!payload.email || !payload.password) {
            toast.warn('Vui lòng nhập đầy đủ thông tin');
        }
        try {
            const response = await apiRegister(payload)
            if (response.err === 0) {
                toast.success('Đăng kí thành công')
                navigate('/login')

            }
        } catch (err) {
            console.log('Xảy ra lỗi :', err)
            toast.error('Đăng kí thất bại')
        }
    }
    return (
        <div className='w-main flex'>
            <div className='w-1/3 flex-auto flex justify-center items-center'>
            </div>
            <div className='flex-auto flex flex-col justify-center gap-4 w-1/3'>
                <h3 className='font-bold text-[24px] text-center'>Đăng kí</h3>
                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập email'
                    value={payload.email}
                    onChange={e => setPayload(prev => ({ ...prev, email: e.target.value }))}
                />
                <input
                    type="password"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập mật khẩu'
                    value={payload.password}
                    onChange={e => setPayload(prev => ({ ...prev, password: e.target.value }))}
                />
                <button
                    type='button'
                    className='px-4 py-2 mx-auto bg-blue-500 text-white rounded-md font-semibold w-fit  '
                    onClick={handleSubmit}
                >
                    Đăng kí
                </button>
                <div>
                    Bạn đã có tài khoản? <Link to='/login' className='text-center'>Đăng nhập</Link>
                </div>



            </div>

            <div className='w-1/3 flex-auto flex justify-center items-center'>

            </div>
        </div>
    )
}

export default Register