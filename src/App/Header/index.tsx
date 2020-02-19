import React from "react";

import Logo from "./Logo.svg";
import LogoWithoutShadows from "./LogoWithoutShadows.svg"
import "./index.css";

interface IHeader {
    isLoading?: boolean;
}

const Header = ({isLoading}: IHeader) => {
    return (
        <header>
            <header className="header">
                {isLoading
                    ? (
                        <img
                            className="header-logo-animated"
                            src={LogoWithoutShadows}
                            alt="Логотип"
                        />
                    )
                    : (
                        <img
                            src={Logo}
                            alt="Логотип"
                        />
                    )
                }
            </header>
        </header>
    )
};

export default Header;
