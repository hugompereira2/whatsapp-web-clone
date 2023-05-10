import { useContext, useEffect, useState, RefObject, memo } from "react";
import BgCommunity from "../../assets/bg-community.svg"
import ChatMessage from "../ChatMessage/ChatMessage";
import "./FullScreenModal.scss";

import { MdOutlineClose } from "react-icons/md";
import SearchInput from "../SearchInput/SearchInput";
import Contact from "../Contact/Contact";

interface IFullScreenModal {
    open: boolean;
    type: string;
    setClose: React.Dispatch<React.SetStateAction<boolean>>
}

const FullScreenModal = (props: IFullScreenModal) => {

    return (
        <dialog id="full-screen-modal" open={props.open}>
            <div className="modal-container">
                <MdOutlineClose className="close-icon" size={25} fill="#FFFFFF" onClick={() => props.setClose(!props.open)} />
                <div className="contact-list-container">
                    <div className="user-contact">
                        <Contact name="Meu status" desc="Nenhuma atualização" />
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default FullScreenModal;