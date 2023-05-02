import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import ChatMessage from "../ChatMessage/ChatMessage";
import "./ChatBox.scss";

import { BsCheckAll } from 'react-icons/bs'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'

const ChatBox = () => {

    return (
        <div id="chat-box">
            <div className="chat-message-container">
                <ChatMessage />
            </div>
            <div className="chat-box-send">
                <MdInsertEmoticon size={34} fill="#8696a0" />
                <AiOutlinePaperClip size={30} fill="#8696a0" />
                <input className="font-segoe" placeholder=" Mensagem" />
                <FaMicrophone size={23} fill="#8696a0" />
            </div>
        </div>
    );
};

export default ChatBox;