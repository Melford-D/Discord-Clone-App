import React, { useEffect, useState } from "react";
import "../style components/Sidebar.css";
import AddIcons from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  
  useEffect(() => {
  db.collection('channels').onSnapshot(snapshot => {
    setChannels(snapshot.docs.map(doc => ({
      id: doc.id,
      channel: doc.data()
    })))
  })
  }, [])

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        channelName,
        // or you can use, channelName: channelName
      })
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4>hello from Melford </h4>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcons onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channnelsList">
          {channels.map(({id, channel}) => (
          <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar onClick={ () => auth.signOut() } src= {user.photo} />
        <div className="sidebar__profileInfo">
          <h3> { user.displayName } </h3>
          <p> #{ user.uid.substring(0, 5) } </p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
