import { Avatar } from '@material-ui/core'
import React from 'react'
import "../style components/Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Message() {
    const user = useSelector(selectUser);
    return (
        <div className="message">
            <Avatar src={user.photo} />
        <div className="sidebar__profileInfo" />
            <div className="message__info">
                <h4>melford-d
                    <span className="message__timestamp">
                        this is a timestamp
                    </span>
                </h4>

                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
