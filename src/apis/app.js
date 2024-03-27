import axios from "axios";
export const apiGetAllLocation = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'GET',
            url: '/api/v1/location/getAllLocation'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})