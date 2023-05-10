import { useContext, useEffect, useRef, RefObject, memo } from "react";
import Teste from "../../assets/teste.jpg"
import "./Contact.scss";

import { BsCheckAll } from 'react-icons/bs'

interface IContact {
    name: string;
    desc: string;
}

const Contact = (props: IContact) => {

    return (
        <div id="contact">
            <div className="contact-img">
                <img src={Teste} />
            </div>
            <div className="contact-info">
                <h3 className="font-segoe">{props.name}</h3>
                <p className="font-segoe"><BsCheckAll size={22} fill="#8696a0" />{props.desc}</p>
                <span className="contact-hour font-segoe">22:15</span>
            </div>
        </div>
    );
};

export default Contact;