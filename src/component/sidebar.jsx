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
            <MdOutlineSpaceDashboard className="icon pe-3 fs-1 pb-1" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaRegUser className="icon pe-3 fs-2 pb-1" /> Employee
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoBagHandleOutline className="icon pe-3 fs-1 pb-1" />
           Vacancies
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <SlCalender className="icon pe-3 fs-1 pb-1" />
           Calender
          </a>
        </li>
        <li className="sidebar-list-item ">
          <a href="" className="">
            <IoDocumentTextOutline className="icon pe-3 fs-1 pb-2" />Document
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
