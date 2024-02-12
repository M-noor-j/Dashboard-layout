import React from "react";
import { LuBellRing } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <div class="d-flex align-items-center w-25 py-2 rounded px-3" style={{background:"#F3F3F3"}}>
        <IoSearchOutline />
          <input
            className="ps-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{border:"none",background:"#F3F3F3", }}
          />
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Sunday,30 August 2023
              </a>
            </li>
          </ul>
          <LuBellRing className="fs-4 me-4"/>
          <a class="navbar-brand " href="#">
           Hello, Mr.Monish <img src="https://pics.craiyon.com/2023-06-23/2c83e3163d0348e9b88660a0a5d86459.webp" class="" style={{width:"60px", borderRadius:"200px"}}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
