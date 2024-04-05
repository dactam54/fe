// import axios from "axios"
import instance from "../axios"

export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        console.log('payloadApiLogin', payload)
        const response = await instance({
            method: 'POST',
            url: '/api/v1/login',
            data: payload
        })
        console.log('response', response)

        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }

})

// export const apiCreateUser = (payload) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await instance({
//             method: 'POST',
//             url: '/api/v1/createUser',
//             payload,
//             // credentials: 'include',
//             // withCredentials: true
//         })
//         resolve(response)
//     } catch (error) {
//         reject(error)
//     }
// })


// export const apiCreateUser = async (payload) => {
//     try {
//         const response = await axios.post('/api/v1/createUser', payload, {
//             withCredentials: true
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };


export const apiGetCurrentUser = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/user/getCurrentUser'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllUser = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/user/getAllUser'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetUserById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: `/api/v1/user/getUserById/${id}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }

})


export const apiUpdateUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/updateUser',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'DELETE',
            url: `/api/v1/user/deleteUser/${id}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangeRole = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/changeRole',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangeAvatar = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/changeAvatar',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiRemoveAvatar = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/removeAvatar',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangePassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/changePassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiResetPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/resetPassword ',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiConfirmResetPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/confirmResetPassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiNewPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/user/newPassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})