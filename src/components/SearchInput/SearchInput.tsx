import { useEffect, useState } from "react";
import "./SearchInput.scss";

import { AiOutlineSearch } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'

interface ISearchInput {
    placeholder: string;
}

const SearchInput = (props: ISearchInput) => {
    const [isActive, setIsActive] = useState(false);

    const HandleSearchFocus = () => {
        setIsActive(!isActive);
    };

    return (
        <div id="search-input">
            <button>
                <div className="search-container">
                    {
                        isActive
                            ? <FaArrowRight className="on-click-animation search-svg" size={18} fill="#00a884" />
                            : <AiOutlineSearch className="off-click-animation search-svg" size={18} fill="#8696a0" />
                    }
                </div>
            </button>
            <input className="font-segoe" onFocus={HandleSearchFocus} onBlur={HandleSearchFocus} placeholder={props.placeholder} />
        </div>
    );
};

export default SearchInput;