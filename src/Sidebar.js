import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcons from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>hello from Melford</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcons className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channnelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;