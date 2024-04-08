import React, { useEffect, useState } from 'react'
import { apiGetAllLocation, apiGetLocationById } from '../../apis/location'

const ManagerLocation = () => {

    // const dispatch = useDispatch()


    const [data, setData] = useState([])
    const [dataModal, setDataModal] = useState(null)


    const fetchData = async () => {
        const response = await apiGetAllLocation()
        console.log('response', response.data)
        setData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const getId = async (id) => {
        console.log('id', id)
        try {
            const response = await apiGetLocationById(id)
            setDataModal(response.data)
            console.log('getId', response.data)
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <div>
            <h1>Danh sách địa điểm</h1>
            {data.filter(item => item.status == true).map((item, index) => {
                return (
                    <ul key={index}>
                        <li>{item.name}</li>
                        <li>{item.region}</li>

                        {item?.isHot == true && <li>{"Đang hiện hành"}</li>}
                        <li>
                            {item?.openTime[0]} AM
                        </li>
                        <button onClick={() => getId(item.id)}>Xem chi tiết</button>

                    </ul>
                )
            })
            }
        </div>
    )
}

export default ManagerLocation