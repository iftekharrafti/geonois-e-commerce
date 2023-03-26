import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { BsFillPersonDashFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./Dashboard.css";
import Dropdown from "react-bootstrap/Dropdown";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-container d-flex">
      <div className={`sidebar ${open ? "active" : null}`} id="side_nav">
        <div className="header-box px-3 pt-3 pb-4 d-flex justify-content-between">
          <h1 className="fs-4">
            <span className="bg-white text-dark rounded shadow px-2 me-2">
              GN
            </span>
            <span className="text-white">Geonois</span>
          </h1>
          <button
            className="btn d-md-none d-block close-btn px-1 py-0 text-white"
            onClick={() => setOpen(false)}
          >
            <FaStream />
          </button>
        </div>
        <ul className="list-unstyled px-2">
          <li className="active">
            <Link to="/" className="text-decoration-none px-3 py-2 d-block">
              <BsFillPersonDashFill /> Visitor
            </Link>
          </li>
          <li className="">
            <Link to="/" className="text-decoration-none px-3 py-2 d-block">
              <IoIosNotifications /> Notification
            </Link>
          </li>
          <li className="">
            <Link to="/" className="text-decoration-none px-3 py-2 d-block">
              <FaHistory /> OTP History
            </Link>
          </li>
          <li className="">
            <Link to="/" className="text-decoration-none px-3 py-2 d-block">
              <FaShopify /> Shop
            </Link>
          </li>
          <li className="">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                style={{ background: "black", border: 0 }}
              >
                <MdOutlineManageAccounts /> Product Management
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "black", border: 0, width: '100%' }}>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Category
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Sub Category
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Brand List
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Product List
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Product Details
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                style={{ background: "black", border: 0 }}
              >
                <MdOutlineManageAccounts /> HR Management
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "black", border: 0, width: '100%' }}>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Employes
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Salary
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Report
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                style={{ background: "black", border: 0 }}
              >
                <AiOutlineSetting /> Site Settings
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "black", border: 0, width: '100%' }}>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Home
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    About
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Service
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Contact
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Address
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Social
                  </Dropdown.Item>
                </Link>
                <Link className="remove_underline_white" to="/">
                  <Dropdown.Item className="ms-3">
                    Slider
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="">
            <Link to="/" className="text-decoration-none px-3 py-2 d-block">
              <MdOutlineAdminPanelSettings /> Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className="content px-4">
        <div className="d-flex d-md-none d-block">
          <button
            className="btn px-1 py-0 open-btn"
            onClick={() => setOpen(true)}
          >
            <FaStream />
          </button>
          <span class="ps-3 fs-4 fw-bold">Geonois</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
