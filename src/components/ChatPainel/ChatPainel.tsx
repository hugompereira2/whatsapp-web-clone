import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import "./ChatPainel.scss";

import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineSearch } from "react-icons/ai";
import ChatBox from "../ChatBox/ChatBox";

const ChatPainel = () => {

    return (
        <div id="chat-painel">
            <div className="chat-contact-container">
                <div className="chat-contact-img">
                    <img src={Teste} />
                </div>
                <div className="chat-contact-info">
                    <h3 className="font-segoe">Hugo Mendonça Pereira</h3>
                    <p className="font-segoe">Clique aqui para dados do contato</p>
                </div>
                <div className="chat-contact-options">
                    <AiOutlineSearch size={22} fill="#aebac1" />
                    <BsThreeDotsVertical size={22} fill="#aebac1" />
                </div>
            </div>
            <ChatBox />
        </div>
    );
};

export default ChatPainel;