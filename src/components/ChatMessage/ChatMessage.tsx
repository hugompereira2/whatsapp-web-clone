import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import "./ChatMessage.scss";

import { BsCheckAll } from 'react-icons/bs'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'

const ChatMessage = () => {

    const messages = [
        {
            id: 1,
            user: "Hugo Mendonça Pereira",
            owner: true,
            text: "Hello World",
            date: "02/05/2023",
            hour: "22:15"
        },
        {
            id: 2,
            user: "Hugo Mendonça Pereira",
            owner: true,
            text: "Hello World",
            date: "02/05/2023",
            hour: "22:15"
        },
        {
            id: 3,
            user: "Fernando Correia",
            owner: false,
            text: "Hello Friend",
            date: "02/05/2023",
            hour: "22:15"
        },
        {
            id: 4,
            user: "Hugo Mendonça Pereira",
            owner: true,
            text: "Are you going??",
            date: "02/05/2023",
            hour: "22:15"
        },
        {
            id: 5,
            user: "Fernando Correia",
            owner: false,
            text: "idk, maybe...",
            date: "02/05/2023",
            hour: "22:15"
        },
    ];

    return (
        <div id="chat-message">
            <div className="message-container">
                {
                    messages.map(message => {
                        return (
                            <div className="message-line" key={message.id}>
                                {
                                    !message.owner &&
                                    <div className="message-contact-img">
                                        <img src={Teste} alt="messager-img" />
                                    </div>
                                }
                                <div className={`message ${message.owner ? "right-side" : "left-side"} }`}>
                                    <p className="font-segoe">{message.text}</p>
                                    <div className="message-info">
                                        <span className="font-segoe">{message.hour}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ChatMessage;