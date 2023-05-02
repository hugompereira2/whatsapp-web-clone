import { useContext, useEffect, useRef, RefObject, memo, useState } from "react";
import Teste from "../../assets/teste.jpg"
import "./ContactPainel.scss";

import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDonutLarge } from 'react-icons/md'
import { MdChat } from 'react-icons/md'
import { BiFilter } from 'react-icons/bi'
import { RiInboxArchiveLine } from 'react-icons/ri'
import { FaArrowRight } from "react-icons/fa";
import Contact from "../Contact/Contact";

const ContactPainel = () => {
    const [isActive, setIsActive] = useState(false);

    const HandleSearchFocus = () => {
        setIsActive(!isActive);
    };

    return (
        <div id="contact-painel">
            <div className="navbar-contact">
                <img src={Teste} alt="user-foto" />
                <div className="user-options">
                    <div className="svg-container-tooltip">
                        <MdDonutLarge size={22} />
                        <span className="font-segoe">Status</span>
                    </div>
                    <div className="svg-container-tooltip">
                        <MdChat size={22} />
                        <span className="font-segoe">Nova conversa</span>
                    </div>
                    <div className="svg-container-tooltip">
                        <BsThreeDotsVertical size={22} />
                        <span className="font-segoe">Mais opções</span>
                    </div>
                </div>
            </div>
            <div className="search-filter-contact">
                <div className="search-contact">
                    <button>
                        <div className="search-container">
                            {
                                isActive
                                    ? <FaArrowRight className="on-click-animation" size={18} fill="#00a884" />
                                    : <AiOutlineSearch className="off-click-animation" size={18} fill="#8696a0" />
                            }
                        </div>
                    </button>
                    <input className="font-segoe" onFocus={HandleSearchFocus} onBlur={HandleSearchFocus} placeholder="Pesquisar ou começar uma nova conversa" />
                </div>
                <div className="svg-container-tooltip">
                    <BiFilter size={25} fill="#8696a0" />
                    <span className="font-segoe">Filtro de conversas não lidas</span>
                </div>
            </div>
            <div className="contact-deck">
                <div className="archive-contact">
                    <div className="archive-container">
                        <RiInboxArchiveLine size={20} fill="#00a884" />
                    </div>
                    <div className="archive-text">
                        <span className="font-segoe archive-text-title">Arquivadas</span>
                        <span className="font-segoe archive-text-number">1</span>
                    </div>
                </div>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    );
}

export default ContactPainel;