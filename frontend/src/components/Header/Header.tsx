import React, { FC } from 'react';
import logo from '../assets/logo.svg';

import { HeaderComponents } from '.st'

const Header: FC = () => {
    return (
        <header>
            <img src={logo} alt="Logo ecoleta"/>
        </header>
    );
}

export default Header;