import { useContext, useEffect, useState, RefObject, memo } from "react";
import BgCommunity from "../../assets/bg-community.svg"
import Teste from "../../assets/teste.jpg"
import ChatMessage from "../ChatMessage/ChatMessage";
import "./LeftModal.scss";

import { BiLeftArrowAlt } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import SearchInput from "../SearchInput/SearchInput";
import Contact from "../Contact/Contact";

interface ILeftModal {
    open: boolean;
    type: string;
    setClose: React.Dispatch<React.SetStateAction<boolean>>
}

const LeftModal = (props: ILeftModal) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        switch (props.type) {
            case "talk":
                setTitle("Nova conversa")
                break;
            case "profile":
                setTitle("Perfil")
                break;
            case "community":
                setTitle("Comunidades")
                break;
        }
    }, [props.type])

    const infoModal = () => {
        if (props.type == "talk") {
            return (
                <div className="contact-list">
                    <div className="search-list">
                        <SearchInput placeholder="Pesquisar contatos" />
                    </div>
                    {
                        Array.from(Array(15)).map(() => {
                            return (
                                <Contact key={Math.random()} name="Hugo Mendonça Pereira" desc="Tesssteeeeee" />
                            )
                        })
                    }
                </div>
            )
        } else if (props.type == "profile") {
            return (
                <div className="profile-container">
                    <img className="profile-img" src={Teste} alt="profile-img" />
                    <div className="input-container">
                        <div className="input-group">
                            <label>Seu nome</label>
                            <div className="input-line">
                                {/* <input type="text" className="" /> */}
                                <span>Hugo Mendonça</span>
                                <button><MdModeEdit size={25} fill="#8696a0" /></button>
                            </div>
                            <p className="small-alert">Esse não é seu nome de usuário e nem seu PIN. Esse nome será exibido para seus contatos do WhatsApp.</p>
                        </div>
                        <div className="input-group">
                            <label>Recado</label>
                            <div className="input-line">
                                {/* <input type="text" className="" /> */}
                                <span>Available</span>
                                <button><MdModeEdit size={25} fill="#8696a0" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="community-container">
                    <img className="box-img" src={BgCommunity} alt="community" />
                    <h3 className="box-title">Apresentamos as comunidades</h3>
                    <p className="box-desc">
                        Organize grupos relacionados e envie avisos com facilidade. Agora,
                        suas comunidades, como bairros ou escolas, podem ter seu próprio espaço.
                    </p>
                    <button className="box-button">Criar comunidade</button>
                </div>
            )
        }
    }

    return (
        <dialog id="left-modal" className={`${props.open ? "fade-in" : "fade"}`} open>
            <div className="modal-container">
                <div className="return-container">
                    <BiLeftArrowAlt size={32} onClick={() => props.setClose(!props.open)} />
                    <h3 className="return-title">{title}</h3>
                </div>
                {infoModal()}
            </div>
        </dialog>
    );

}

export default LeftModal;