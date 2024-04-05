import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogin } from '../../apis/user'
import actionTypes from '../../store/actions/actionTypes'
import { toast } from 'react-toastify'

// import './styles/login.css'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isLogin } = useSelector(state => state.auth)
  const [login, setLogin] = useState(() => location.state?.register ? false : true)


  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLogin) {
      toast.success('Đăng nhập thành công')
      navigate('/manager_user')

    }
  }, [isLogin])

  const handleSubmit = async () => {
    if (login) {
      const response = await apiLogin({ email: payload.email, password: payload.password })
      console.log('response FE Login', response)
      if (response.err === 0) {
        dispatch({ type: actionTypes.LOGIN, accessToken: response.accessToken, isLogin: true })
        setPayload({ email: '', password: '' })
        toast.success('Đăng nhập thành công')
        navigate('/manager_location')
      } else {
        dispatch({
          type: actionTypes.ALERT, alert: response.rs, callback: () => {
            dispatch({ type: actionTypes.ALERT, alert: '' })
          }
        })
      }
    } else {
      navigate('/register')
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
          Đăng nhập
        </button>
        <div>
          Bạn chưa có tài khoản? <Link to='/register' className='text-center'>Đăng ký</Link>
        </div>
        <div>
          <Link to='/forgotpassword' className='text-center'>Quên mật khẩu</Link>
        </div>
      </div>

      <div className='w-1/3 flex-auto flex justify-center items-center'>

      </div>
    </div>



  )

}

export default Login