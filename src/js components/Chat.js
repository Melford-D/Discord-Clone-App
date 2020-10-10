import React, { useState } from "react";
import "../style components/Chat.css";
import ChatHeader from "../js components/ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "../js components/Message";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");

 

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__Messages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input 
          value={input} 
          disabled={!channelId}
          onChange={e => setInput(e.target.value)} 
          placeholder={"Message #Test"} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
