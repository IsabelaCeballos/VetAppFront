import React from "react";
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/logo.svg';

export const Header = () => {
    import('./style.css');
    return (
        <header className="header">
            <div className="content_header">
                <div className="content_link">
                    <nav className="Links">
                        <Link to="/">Inicio</Link>
                    </nav>
                </div>
                <img className='ImgLogo' src={logoHeader} alt="Logo de la app" />
            </div>
        </header>
    );
}