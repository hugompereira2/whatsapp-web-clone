import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import "./ContactPainel.scss";

import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDonutLarge } from 'react-icons/md'
import { MdChat } from 'react-icons/md'
import { BiFilter } from 'react-icons/bi'
import { RiInboxArchiveLine } from 'react-icons/ri'
import Contact from "../Contact/Contact";

const ContactPainel = memo(() => {

    return (
        <div id="contact-painel">
            <div className="navbar-contact">
                <img src={Teste} alt="user-foto" />
                <div className="user-options">
                    <MdChat size={22} />
                    <MdDonutLarge size={22} />
                    <BsThreeDotsVertical size={22} />
                </div>
            </div>
            <div className="search-filter-contact">
                <div className="search-contact">
                    <button>
                        <div className="search-container">
                            <AiOutlineSearch size={18} fill="#8696a0" />
                        </div>
                    </button>
                    <input className="font-segoe" placeholder="Pesquisar ou começar uma nova conversa" />
                </div>
                <BiFilter size={25} fill="#8696a0" />
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
});

export default ContactPainel;