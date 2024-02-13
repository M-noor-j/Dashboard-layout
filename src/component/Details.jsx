import React from "react";
import "./Details.css";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
const Details = () => {
  return (
    <>
      <div
        className="container mt-2 py-5 px-4 mb-3"
        style={{ background: "#F8F8F8", borderRadius: "30px" }}
      >
        {/* first layout */}
        <div>
          <div className="" style={{fontSize:"20px"}}>Skills</div>
          <div className="py-2 rounded mt-2" style={{ background: "#F0F0F0" }}>
            <div className=" d-flex ">
              <div className="  ms-3 rounded px-2 py-1 bg-light" style={{fontSize:"12px"}}>
                React js <RxCross2 className="ms-3" />{" "}
              </div>
              <div className="bg-light  ms-3 rounded px-2 py-1" style={{fontSize:"12px"}}>
                Angular js <RxCross2 className="ms-3" />
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className=" mt-4 " style={{fontSize:"20px"}}>Prev Jobs</div>
        <div className="d-flex ">
          <div>
            <form action="#">
              <div class="user__details">
                <div class="input__box">
                  <span class="details" style={{fontSize:"13px"}}>Job Title</span>

                  <input
                    type="text"
                    placeholder="Title"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2 "
                  />
                </div>
                <div class="input__box ">
                  <span class="details" style={{fontSize:"13px"}}>Company Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2 "
                  />
                </div>
                <div class="input__box">
                  <span class="details" style={{fontSize:"13px"}}>Company contact</span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
                <div class="input__box">
                  <span class="details" style={{fontSize:"13px"}}>Salary</span>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Salary"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
                <div class="input__box">
                  <span class="details" style={{fontSize:"13px"}}>Duration</span>
                  <div
                    className="d-flex align-items-center pe-3 rounded mt-2"
                    style={{ background: "#F0F0F0" }}
                  >
                    <input
                      type="text"
                      placeholder="Duration"
                      required
                      className=""
                      style={{ background: "none" }}
                    />
                    <SlCalender />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* second column */}

          <div className="">
            <form action="#" className="">
              <div className="user__details">
                <div className="input__box">
                  <span className="details"style={{fontSize:"13px"}}>Training Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
                <div className="input__box">
                  <span className="details" style={{fontSize:"13px"}}>Institute Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
                <div className="input__box">
                  <span className="details" style={{fontSize:"13px"}}>Description</span>
                  <input
                    type="email"
                    placeholder="Description"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
                <div className="input__box">
                  <span className="details" style={{fontSize:"13px"}}>Training Duration</span>
                  <div
                    className="d-flex align-items-center pe-3 rounded mt-2"
                    style={{ background: "#F0F0F0" }}
                  >
                    <input
                      type="text"
                      placeholder="Duration"
                      required
                      className=""
                      style={{ background: "none" }}
                    />
                    <SlCalender />
                  </div>
                </div>
                <div className="input__box">
                  <span className="details" style={{fontSize:"13px"}}>Outcome Details</span>
                  <input
                    type="text"
                    placeholder="Details"
                    required
                    style={{ background: "#F0F0F0" }}
                    className="mt-2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="save-details mt-5">
          <Button label={"Add Details"}  />
        </div>
      </div>
    </>
  );
};

export default Details;
