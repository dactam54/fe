import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogin, apiCreateUser } from '../../apis/user'
import actionTypes from '../../store/actions/actionTypes'
// import './styles/login.css'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin } = useSelector(state => state.auth)


  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLogin) {
      navigate('/manager_user')
    }
  }, [isLogin])

  const handleSubmit = async () => {
    try {
      const response = await apiLogin(payload)
      if (response.error === 200) {
        console.log('Login success')
        dispatch({ type: actionTypes.LOGIN, isLogin: true, accessToken: response.accessToken })
        navigate('/manager_user')
      }
    } catch (error) {
      console.log('Login failed', error)
    }
  }

  return (
    <div className='w-main flex'>
      <div className='w-1/3 flex-auto flex justify-center items-center'>
      </div>
      <div className='flex-auto flex flex-col justify-center gap-4 w-1/3'>
        <h3 className='font-bold text-[24px] text-center'>Đăng nhập</h3>
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
          Đăng nhập
        </button>
      </div>
      <div className='w-1/3 flex-auto flex justify-center items-center'>
      </div>
    </div>

  )

}
export default Login