import { useContext, useEffect, useRef, RefObject, memo } from "react";
import ContactPainel from "../ContactPainel/ContactPainel";
import ChatPainel from "../ChatPainel/ChatPainel";
import "./Home.scss";

const Home = () => {

    return (
        <main className="container">
            <ContactPainel />
            <ChatPainel />
        </main>
    );
};

export default Home;