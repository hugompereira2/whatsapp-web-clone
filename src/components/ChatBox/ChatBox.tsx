import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import "./ChatBox.scss";

import { BsCheckAll } from 'react-icons/bs'

const ChatBox = () => {

    return (
        <div id="chat-box">
            <div className="chat-box-send">
                <BsCheckAll />
            </div>
        </div>
    );
};

export default ChatBox;