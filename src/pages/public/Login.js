import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogin, apiCreateUser } from '../../apis/user'
import actionTypes from '../../store/actions/actionTypes'
// import './styles/login.css'

const Login = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location', location.pathname)

  const [payload, setPayload] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    errorEmail: '',
    errorPassword: ''
  })
  const [isLogin, setIsLogin] = useState(() => location.pathname !== '/login' ? false : true)
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    if (isLoggedIn)
      navigate('/detail')
  }, [isLoggedIn])

  const handleSubmit = async () => {
    if (isLogin) {
      dispatch({ type: actionTypes.LOADING, flag: true })
      const response = await apiLogin({ email: payload.email, password: payload.password })
      console.log('payload', payload)
      dispatch({ type: actionTypes.LOADING, flag: false })

      if (response.err === 0) {
        dispatch({ type: actionTypes.LOGIN, accessToken: response.data.accessToken, isLoggedIn: true })
        setPayload({ email: '', password: '' })
      }
      else {
        dispatch({
          type: actionTypes.ALERT, alert: response.rs, callback: () => {
            dispatch({ type: actionTypes.ALERT, alert: '' })
          }
        })
      }
    } else {
      dispatch({ type: actionTypes.LOADING, flag: true })
      const response = await apiCreateUser({ email: payload.email, password: payload.password })
      dispatch({ type: actionTypes.LOADING, flag: false })

      if (response.err === 0) {
        dispatch({
          type: actionTypes.ALERT,
          alert: response.mes,
          callback: () => {
            dispatch({ type: actionTypes.ALERT, alert: '' })
            navigate('/login')
          }
        })
        setPayload({ email: '', password: '' })
      }


      // if (payload.email === '') {
      //   setError(prevState => ({
      //     ...prevState,
      //     errorEmail: 'vui lòng nhập  địa chỉ email'
      //   }));
      // }

      // if (payload.password === '') {
      //   setError(prevState => ({
      //     ...prevState,
      //     errorPassword: 'vui lòng nhập mật khẩu'
      //   }));
      // }
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

}
export default Login