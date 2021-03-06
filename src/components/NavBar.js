import React, { useState } from "react";
import { Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
import ham from "../assets/images/ham.png";
import Drawerroutes from "./DrawerRoutes";
const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  return (
    <div style={{}}>
      <div
        className="header-container"
        style={
          name
            ? name === "VIEW PROFILE"
              ? {
                  background: "transparent",
                  position: "absolute",
                  zIndex: 2,
                  width: "100%",
                  // background:
                  //   "transparent linear-gradient(180deg, #04040400 0%, #000000B3 100%) 0% 0% no-repeat padding-box",
                  // opacity: "0.5",
                  color: "#FFFFFF",
                  fontSize: isBrowser ? "3rem" : "1.5rem",
                }
              : {}
            : {}
        }
      >
        <div className="header-ham" onClick={() => setShowDrawer(true)}>
          <img alt="ham" src={ham} style={{ opacity: "0.5" }}></img>
        </div>
        <div
          className="header-title"
          style={
            name
              ? name === "VIEW PROFILE"
                ? {
                    color: "#fff",
                    fontSize: isBrowser ? "3rem" : "1.5rem",
                  }
                : { fontSize: isBrowser ? "3rem" : "1.5rem" }
              : { fontSize: isBrowser ? "3rem" : "1.5rem" }
          }
        >
          {name
            ? name === "VIEW PROFILE"
              ? "PROFILE"
              : name.includes("page")
              ? "MINT NFT"
              : name
            : "MUZIX.TECH"}
        </div>
      </div>
      <Drawer
        placement="left"
        visible={showDrawer}
        onClose={() => setShowDrawer(false)}
        width={"40%"}
        // size={"large"}
        className="drawer"
        drawerStyle={{ backgroundColor: "#1a1a1a" }}
        title={<div className="drawer-title">MENU</div>}
        headerStyle={{ backgroundColor: "#1a1a1a", padding: 0, border: "none" }}
      >
        <Drawerroutes
          {...props}
          closeDrawer={() => setShowDrawer(false)}
        ></Drawerroutes>
      </Drawer>
    </div>
  );
};

export default NavBar;
