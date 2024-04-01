import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiCreateUser } from '../../apis/user'
import { toast } from 'react-toastify'

const Register = () => {
    const [payload, setPayload] = React.useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    })

    const navigate = useNavigate()

    const handleSubmit = async (payload) => {

        if (payload.email === '' || payload.password === '' || payload.name === '') {
            toast.warn('Vui lòng nhập đầy đủ thông tin')
        }

        // const response = await apiCreateUser({ email: payload.email, password: payload.password, name: payload.name, phone: payload.phone, address: payload.address })
        const response = await apiCreateUser(payload)
        if (response.err === 0) {
            toast.success('Đăng kí thành công')

            navigate('/login')
        }

    }

    return (
        <div className='w-main flex' >
            <div className='w-1/3 flex-auto flex justify-center items-center'>
            </div>
            <div className='flex-auto flex flex-col justify-center gap-4 w-1/3'>
                <h3 className='font-bold text-[24px] text-center'>Đăng nhập</h3>

                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập tên'
                    value={payload.name}
                    onChange={e => setPayload(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập địa chỉ'
                    value={payload.address}
                    onChange={e => setPayload(prev => ({ ...prev, address: e.target.value }))}
                />
                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập số điện thoại'
                    value={payload.phone}
                    onChange={e => setPayload(prev => ({ ...prev, phone: e.target.value }))}
                />
                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập email'
                    value={payload.email}
                    onChange={e => setPayload(prev => ({ ...prev, email: e.target.value }))}
                />
                {/* {
              error.errorEmail && <label className="errorLabel">{error.errorEmail}</label>
            } */}

                <input
                    type="password"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập mật khẩu'
                    value={payload.password}
                    onChange={e => setPayload(prev => ({ ...prev, password: e.target.value }))}
                />
                {/* {
              error.errorPassword && <label className="errorLabel">{error.errorPassword}</label>
            } */}
                <button
                    type='button'
                    className='px-4 py-2 mx-auto bg-blue-500 text-white rounded-md font-semibold w-fit  '
                    onClick={handleSubmit}
                >
                    Đăng kí
                </button>
                <div>
                    Bạn chưa có tài khoản? <Link to='/login' className='text-center'>Đăng nhập</Link>
                </div>

            </div>

            <div className='w-1/3 flex-auto flex justify-center items-center'>

            </div>
        </div>

    )
}

export default Register