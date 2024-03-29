import React, { useEffect, useState } from 'react'
import { apiGetAllLocation } from '../../apis/location'

const ManagerLocation = () => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await apiGetAllLocation()
        console.log('response', response)
        setData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Detail</h1>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <li>{item.name}</li>
                        <li>{item.region}</li>
                        {/* <li>{item?.address}</li> */}
                        {item?.isHot == true && <li>{"Đang hiện hành"}</li>}
                        <li>
                            {item?.openTime[0]} AM
                        </li>

                    </div>
                )
            })
            }
        </div>
    )
}

export default ManagerLocation