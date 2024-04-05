import React, { useState } from 'react'
import { apiConfirmResetPassword, apiResetPassword, apiNewPassword } from '../../apis/user'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'



const ForgotPassword = () => {
    const [payload, setPayload] = useState({
        email: '',
        passwordResetToken: '',
        password: ''
    })
    const navigate = useNavigate()
    const [sendCode, setSendCode] = useState(false)
    const [checkCode, setCheckCode] = useState(false)

    const handleSendCode = async () => {
        if (!payload.email) {
            toast.warn('Vui lòng nhập đầy đủ thông tin')
        }
        const response = await apiResetPassword(payload)
        if (response.err === 0) {
            toast.success('Vui lòng kiểm tra email')
            setSendCode(true)
        }
    }
    const handleCheckCode = async () => {
        const responseConfirm = await apiConfirmResetPassword(payload)
        if (responseConfirm.err === 0) {
            setCheckCode(true)
        }
    }

    const handleNewPassword = async () => {
        const responseNewPassword = await apiNewPassword(payload)
        if (responseNewPassword.err === 0) {
            toast.success('Đổi mật khẩu thành công')
            navigate('/login')
        }
    }

    return (
        <div className='w-main flex' >
            <div className='w-1/3 flex-auto flex justify-center items-center'>
            </div>
            <div className='flex-auto flex flex-col justify-center gap-4 w-1/3'>
                <h3 className='font-bold text-[24px] text-center'>Lấy lại mật khẩu</h3>
                <input
                    type="text"
                    className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                    placeholder='Nhập email'
                    value={payload.email}
                    onChange={e => setPayload(prev => ({ ...prev, email: e.target.value }))}
                />

                {
                    sendCode && <input
                        type="text"
                        className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                        placeholder='Nhập mã xác minh'
                        value={payload.passwordResetToken}
                        onChange={e => setPayload(prev => ({ ...prev, passwordResetToken: e.target.value }))}
                    />
                }

                {
                    checkCode && <input
                        type="password"
                        className='p-2 bg-gray-100 border rounded-md placeholder:italic placeholder:text-gray-700'
                        placeholder='Nhập mật khẩu mới'
                        value={payload.password}
                        onChange={e => setPayload(prev => ({ ...prev, password: e.target.value }))}
                    />
                }

                {!checkCode && <button
                    type='button'
                    className='px-4 py-2 mx-auto bg-blue-500 text-white rounded-md font-semibold w-fit  '
                    onClick={sendCode ? handleCheckCode : handleSendCode}
                >
                    {sendCode ? 'Xác nhận mã' : 'Gửi mã '}
                </button>}

                {
                    checkCode && <button
                        type='button'
                        className='px-4 py-2 mx-auto bg-blue-500 text-white rounded-md font-semibold w-fit  '
                        onClick={handleNewPassword}
                    >
                        Đổi mật khẩu
                    </button>
                }

            </div>
            <div className='w-1/3 flex-auto flex justify-center items-center'>
            </div>
        </div>)
}

export default ForgotPassword