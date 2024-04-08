import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogin } from '../../apis/user'
import actionTypes from '../../store/actions/actionTypes'
import { toast } from 'react-toastify'
import path from '../../utils/path'
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

  // useEffect(() => {
  //   if (isLogin) {
  //     toast.success('Đăng nhập thành công')
  //     navigate(`/${path.USER}`)
  //   }
  // }, [isLogin, updateCurrentUser])

  useEffect(() => {
    if (isLogin) {
      navigate(`/${path.USER}`)
      toast.success('Đăng nhập thành công')
    }
    // navigate('/')

  }, [isLogin])

  const handleSubmit = async () => {
    if (login) {
      const response = await apiLogin({ email: payload.email, password: payload.password })
      console.log('response FE Login', response)
      if (response.err === 0) {
        dispatch({ type: actionTypes.LOGIN, accessToken: response.accessToken, isLogin: true })
        setPayload({ email: '', password: '' })
        toast.success('Đăng nhập thành công')
        navigate(`/${path.USER}`)
      } else {
        dispatch({
          type: actionTypes.ALERT, alert: response.rs, callback: () => {
            dispatch({ type: actionTypes.ALERT, alert: '' })
            toast.warn('response.rs')
          }
        })
      }
    } else {
      navigate(`/${path.REGISTER}`)
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
        {/* <div>
          Bạn chưa có tài khoản? <Link to='/dang-ki' className='text-center'>Đăng ký</Link>
        </div> */}
        <span className='flex gap-1'>
          <span>{isLogin ? 'Bạn chưa có tài khoản?' : 'Đã có tài khoản?'}</span>
          <span
            className='text-blue-500 hover:underline cursor-pointer'
            onClick={() => setLogin(prev => !prev)}

          >{isLogin ? 'Đăng ký tài khoản' : 'Đăng nhập ngay'}</span>
        </span>
        <div>
          <Link to='/quen-mat-khau' className='text-center'>Quên mật khẩu</Link>
        </div>
      </div>

      <div className='w-1/3 flex-auto flex justify-center items-center'>

      </div>
    </div>



  )

}

export default Login