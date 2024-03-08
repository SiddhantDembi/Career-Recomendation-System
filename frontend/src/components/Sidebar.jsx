import React, { useState } from "react";
import academic_managementIcon from "../assets/academic_managementIcon.svg";
import dashboardIcon from "../assets/dashboardIcon.svg";
import "../styles/Sidebar.css";

function Sidebar() {
const [isSBVisible, setIsSBVisible] = useState([]);

const sidebarData = [
    {
    id: 1,
    href: "/",
    text: "Dashboard",
    image: dashboardIcon,
    sub_text: [],
    },
    
    {
    id: 2,
    href: "/test",
    text: "Assessment",
    image: academic_managementIcon,
    sub_text: [],
    },
    {
    id: 3,
    href: "/chatbot",
    text: "Chatbot",
    image: academic_managementIcon,
    sub_text: [],
    },
    {
    id: 4,
    href: "/resources",
    text: "Resources",
    image: academic_managementIcon,
    sub_text: [],
    },
];

return (
    <aside>
    {sidebarData.map((data) => (
        <div className="sidebar-elements" key={data.id}>
        <a style={{textDecoration: "none"}} href={data.href} className="btn-click">
            <img src={data.image} alt={data.text} />
            {data.text}
        </a>
        </div>
    ))}
    </aside>
);

}

export default Sidebar;
