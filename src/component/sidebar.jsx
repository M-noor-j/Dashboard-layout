import React from "react";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import Capture from "../images/Capture.PNG"
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      
      <div className="sidebar-title">
        <img src={Capture} alt="" className=""/>
        <div className="sidebar-brand">Techilab HRMS</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineSpaceDashboard className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaRegUser className="icon" /> Employee
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoBagHandleOutline className="icon" />
           Vacancies
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <SlCalender className="icon" />
           Calender
          </a>
        </li>
        <li className="sidebar-list-item ">
          <a href="" className="">
            <IoDocumentTextOutline className="icon" />Document
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
