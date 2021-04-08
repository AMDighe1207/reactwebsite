import React from "react";
import "./Section.css";
import logo from "./logo.ico";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Nav, Table } from "react-bootstrap";

const Section = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className="main_container container">
      <div className="header row">
        <div className="bars" style={{ paddingLeft: "12px" }}>
          <FaIcons.FaBars style={{ margin: "18px", color: "#fff" }} onClick={sidebarOpen} />
        </div>
        {/* <h6
          style={{ paddingLeft: "36rem", paddingTop: "0.8rem", color: "#fff" }}
        >
          Change Language
        </h6>
        <h6
          style={{ paddingLeft: "4rem", paddingTop: "0.8rem", color: "#fff" }}
        >
          Hi,Muni
        </h6> */}
      </div>
      <div className="row">
        <div className="text">
          <h5 style={{ margin: "8px", color: "#878487" }}>Update Invoice <button className="btn" style={{ borderRadius: "0px", background: "#f05050", color: "#e0f9f2", marginLeft: "28rem" }}><IoIcons.IoIosSettings /> Quick Links</button> <button className="btn" style={{ borderRadius: "0px", background: "#27c24c", color: "#e0f9f2" }}><FaIcons.FaRegHandPointRight /> View Invoice</button></h5></div>
      </div>
      <hr />
      <div className="btn2" style={{ paddingLeft: "44.9rem" }}>
        <button className="btn" style={{ borderRadius: "0px", background: "#27c24c", color: "#e0f9f2" }}><FaIcons.FaSave /> Sava Invoice</button>
      </div>
      <div className="section">
        <div className="angle">
          From: <br />
          <div className="logo row">
            <img src={logo} alt="img" style={{ width: "3rem" }} />
            <h2>Atharva</h2>
          </div>
          <div className="text row">
            <h6 style={{ paddingLeft: "1rem" }}>
              AtharvaTutorial.net <br /> 2nd Floor,St jhon Street, <br />{" "}
              Aberdeenshire 2541, <br />
              London, uk, <br /> United States of America, <br />{" "}
              Mobile:454365475567, <br />
              Email:muni@smarttutorial.net
            </h6>
            <div className="section2" style={{ paddingLeft: "15rem" }}>
              TO: <br />
              <input className="form-control" type="text" style={{ width: "22rem" }} />
              <h6 style={{ color: "#80898e " }}>
                34,New Street,<br />

                California,California,<br />
                india-444444 <br />
                Email:muni2explore@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="angle2" style={{
          margin: "-1px"
        }}>
          <h6 style={{ color: "#27c24c", paddingTop: "14px", paddingLeft: "16rem" }}>Note:Type"s1,s2"for auto suggestions</h6></div>
      </div>
      <div className="table-section">
        <div className="table">
          <Table>
            <thead>
              <tr>
                {/* <th><input class="form-check-input" type="checkbox" /></th> */}
                <th>Products SKU</th>
                <th>Products Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#80898e", fontSize: "14px" }}>333</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Test Products Update</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>30</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>4</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}><input className="form-control" type="number" style={{ border: "none", background: "#eeeeee" }} /></td>
              </tr>
              <tr>
                <td style={{ color: "#80898e", fontSize: "14px" }}>344</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Test Products Update 44</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>30</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>5</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}><input className="form-control" type="number" style={{ border: "none", background: "#eeeeee" }} /></td>
              </tr>
              <tr>
                <td style={{ color: "#80898e", fontSize: "14px" }}>366</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Invoice Products</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>34</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>3</td>
                <td style={{ color: "#80898e", fontSize: "14px" }}><input className="form-control" type="number" style={{ border: "none", background: "#eeeeee" }} /></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Subtotal $402.00</td>
              </tr>
              <tr>
                <td style={{ color: "#80898e", fontSize: "14px" }}></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Tax 20% - $80.40 <br /><br /> Total $482.40</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Amount Paid $0</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "#80898e", fontSize: "14px" }}>Amount Due $482.40</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="section3">
        <div className="angle3 row ">
          <div className="button" style={{ paddingLeft: "48px" }}>

            <button className="btn" style={{ borderRadius: "0px", background: "#f05050", color: "#e0f9f2" }}>- Delete</button>
            <button className="btn" style={{ borderRadius: "0px", background: "#27c24c", color: "#e0f9f2", margin: "2px" }}>+ Add More</button>
          </div><div className="Nav" style={{ paddingLeft: "9.2rem" }}> <Nav variant="tabs"
            defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="#">Note To Client</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Invoice Terms</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/4">Footer Text</Nav.Link>
            </Nav.Item>
          </Nav>
            <textarea className="form-control" cols="55" rows="5" placeholder="Your Notes"></textarea>
          </div></div>
      </div>
    </div>
  );
}

export default Section;


/* <Dropdown>
  <Dropdown.Toggle variant="success" id="Dropdown-basic">
    Quick Links
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Action3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */