import React from "react";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import logo from "./logo.ico";

const Sidebar = () => {
  return (
    <div className="sidebar shadow">
      <div className="sidebar__img">
        <img
          src={logo}
          alt="logo"
          style={{ width: "4.3rem", height: "3rem" }}
        />
        <h1 style={{ fontSize: "30px" }}>Atharva</h1>
      </div>{" "}
      <div className="sidebar__title">
        <div className="sidebar__menu">
          {/* <div className="sidebar__link"> */}
          <div className="sidebar__link active_menu_link">
            <IoIcons.IoIosSpeedometer style={{ color: "#fff" }} />{" "}
            <a
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Dashboard
            </a>
            {/* </div> */}
          </div>
          <div className="sidebar__link">
            <FaIcons.FaIdCard style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Invoice
            </a>
          </div>
          <div className="sidebar__link">
            {/* <FaIcons.FaTags style={{ color: "#fff" }} />{" "} */}Q
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Quotes
            </a>
          </div>
          <div className="sidebar__link">
            <FaIcons.FaBuilding style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Companies
            </a>
          </div>
          <div className="sidebar__link">
            <IoIcons.IoIosCard style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Payments
            </a>
          </div>
          <div className="sidebar__link">
            <FaIcons.FaIdCardAlt style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Clients
            </a>
          </div>
          <div className="sidebar__link">
            <FaIcons.FaProductHunt style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Products
            </a>
          </div>
          <div className="sidebar__link">
            <FaIcons.FaUsers style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Users
            </a>
          </div>
          <div className="sidebar__link">
            <IoIcons.IoIosSettings
              style={{ color: "#fff", fontWeight: "600" }}
            />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Settings
            </a>
          </div>
          <div className="sidebar__link">
            <FaIcons.FaEnvelope style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Email
            </a>
          </div>
          <div className="sidebar__link">
            <MdIcons.MdGTranslate style={{ color: "#fff" }} />{" "}
            <a
              href="#"
              style={{
                paddingLeft: "15px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Languages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
