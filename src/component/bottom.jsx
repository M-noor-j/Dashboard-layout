import React from "react";
import Button from "./Button";
import { IoPersonAddSharp } from "react-icons/io5";
const Bottom = () => {
  return (
    <>
      <div className="container pt-5 pb-3 " style={{borderBottom:"1px solid black"}}>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h1 className="text-uppercase fw-bold" style={{fontSize:"24px"}}>Karl employee details page</h1>
          </div>
          <div>
            <Button label={"New Employee"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
