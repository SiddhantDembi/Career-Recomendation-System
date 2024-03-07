import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   LineController,
//   PointElement,
//   LineElement,
//   Title,
// } from "chart.js";
import Header from "../pages/Header";
import academic_managementIcon from "../assets/academic_managementIcon.svg";
// import resource_managementIcon from "../assets/resource_managementIcon.svg";
// import lifestyleIcon from "../assets/lifestyleIcon.svg";
import dashboardIcon from "../assets/dashboardIcon.svg";
// import skillIcon from "../assets/skillIcon.svg";
// import campusIcon from "../assets/campusIcon.svg";
import subMenuIcon from "../assets/subMenuIcon.svg";
// import helpIcon from "../assets/helpIcon.svg";
import "../DashboardTemplate.css";
import Application from "./Application";
// import { Route } from "react-router-dom";
// import Apply from "./jobs";
import Address from "./Address";
// import emblem from "../components/images/img1.jpg"
// import photo from "../components/images/img2.jpg"
import dashboardImg1 from "../images/img1.jpg"
import dashboardImg2 from "../images/img2.png"


function Sidebar() {
const [isSBVisible, setIsSBVisible] = useState([]);

const sidebarClick = (key) => {
    // setIsSBVisible((prevISVisible) => {
    //   let visibleAarry = [...prevISVisible];
    //   visibleAarry[key] = !prevISVisible[key];
    //   return visibleAarry;
    // });
    
    sidebarData.map((data) => {
    if (key === data.id) {
        return (
        <>
            <Application />
        </>
        );
    }
    });
};

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
    href: "/diff",
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
        <a href={data.href} className="btn-click">
            <img src={data.image} alt={data.text} />
            {data.text}
        </a>
        </div>
    ))}
    </aside>
);

}

export default Sidebar;
