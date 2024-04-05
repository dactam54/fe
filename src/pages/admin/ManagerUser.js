import React, { useEffect, useState } from 'react'
import { apiGetAllUser } from '../../apis/user'

const ManagerUser = () => {



    // const [data, setData] = useState([])

    // const fetchData = async () => {
    //     const response = await apiGetAllUser()
    //     console.log('response', response.data)
    //     setData(response.data)
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
    return (
        <div>
            <h1>Manager User</h1>
            {/* <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul> */}
        </div>

    )

}

export default ManagerUser