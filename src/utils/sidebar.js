
import path from "./path";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { BsFillBookmarkHeartFill } from "react-icons/bs"
import { MdMyLocation } from "react-icons/md";

export const adminSidebar = [
    {
        icon: "",
        name: "Trang chủ",
        path: path.ADMIN
    },
    {
        icon: <GrUserAdmin />,
        name: "Quản lí người dùng",
        path: path.ADMIN + '/' + path.MANAGER_USER
    },
    {
        icon: <MdOutlineAddLocationAlt />,
        name: "Quản lí địa điểm",
        path: path.ADMIN + '/' + path.MANAGER_LOCATION
    }

]

export const userSidebar = [
    {
        icon: <BiUserCircle />,
        name: "Trang chủ",
        path: path.USER
    },
    {
        icon: <BiUserCircle />,
        name: "Thông tin tài khoản",
        path: path.USER + '/' + path.PROFILE
    },
    {
        icon: <BsFillBookmarkHeartFill />,
        name: "Địa điểm yêu thích",
        path: path.USER + '/' + path.FAVORITE_LOCATION
    },
    {
        icon: <MdMyLocation />,
        name: "Địa điểm của tôi",
        path: path.USER + '/' + path.MY_LOCATION
    }
]