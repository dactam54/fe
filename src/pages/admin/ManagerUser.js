import React, { useEffect, useState } from 'react'
import { apiGetAllUser } from '../../apis/user'

const ManagerUser = () => {


    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await apiGetAllUser()
        console.log('response', response.data)
        setData(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1>Manager User</h1>
            <ul>
                {data.map((item, index) => {
                    return (
                        <ul key={item.id}>
                            <li>{item.name || "Chưa có thông tin "}</li>
                            <li>{item.email || "Chưa có thông tin "}</li>
                            <li>{item.role || "Chưa có thông tin "}</li>
                        </ul>

                    )
                })}
            </ul>
        </div>

    )

}

export default ManagerUser