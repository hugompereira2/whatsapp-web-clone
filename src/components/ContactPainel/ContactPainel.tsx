import { useContext, useEffect, useRef, RefObject, memo, useState } from "react";
import Teste from "../../assets/teste.jpg"
import "./ContactPainel.scss";

import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDonutLarge } from 'react-icons/md'
import { MdChat } from 'react-icons/md'
import { BiFilter } from 'react-icons/bi'
import { RiInboxArchiveLine } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'
import { FaArrowRight } from "react-icons/fa";
import LeftModal from "../LeftModal/LeftModal";
import Contact from "../Contact/Contact";
import SearchInput from "../SearchInput/SearchInput";
import FullScreenModal from "../FullScreenModal/FullScreenModal";

const ContactPainel = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openFullScreen, setOpenFullScreen] = useState(false);
    const [typeModal, setTypeModal] = useState("talk");
    const [typeFullScreen, setTypeFullScreen] = useState("talk");

    const handleOpenModal = (type: string) => {
        setOpenModal(!openModal);
        setTypeModal(type);
    }

    const handleOpenFullScreen = (type: string) => {
        setOpenFullScreen(!openFullScreen);
        setTypeFullScreen(type);
    }

    return (
        <div id="contact-painel">
            <LeftModal type={typeModal} open={openModal} setClose={setOpenModal} />
            <FullScreenModal type={typeFullScreen} open={openFullScreen} setClose={setOpenFullScreen} />
            <div className="navbar-contact">
                <img src={Teste} alt="user-foto" onClick={() => handleOpenModal("profile")}/>
                <div className="user-options">
                    <div className="svg-container-tooltip" onClick={() => handleOpenModal("community")}>
                        <IoIosPeople size={22} />
                        <span className="font-segoe">Comunidades</span>
                    </div>
                    <div className="svg-container-tooltip" onClick={() => handleOpenFullScreen("status")}>
                        <MdDonutLarge size={22} />
                        <span className="font-segoe">Status</span>
                    </div>
                    <div className="svg-container-tooltip" onClick={() => handleOpenModal("talk")}>
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
                <SearchInput placeholder="Pesquisar ou começar uma nova conversa" />
                <div className="svg-container-tooltip filter-ml">
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
                {
                    Array.from(Array(15)).map(() => {
                        return (
                            <Contact key={Math.random()} name="Hugo Mendonça Pereira" desc="Tesssteeeee" />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContactPainel;