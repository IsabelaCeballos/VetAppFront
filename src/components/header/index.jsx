import React from "react";
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import logoHeader from '../../assets/logo.svg';

export const Header = () => {
    import('./style.css');

    const getPdf = () => {
        console.log('holiii')

        //fetch users, medicine
        getUser()
        getMedicine()

        //instancia del objeto
        const doc = new jsPDF();


        doc.setFontSize(22);
        doc.text(20, 20, 'This is a title');

        doc.setFontSize(16);
        doc.text(20, 30, 'This is some normal sized text underneath.');

        doc.save('Reporte.pdf');
    }

    const getUser = async () => {
        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    const getMedicine = async () => {
        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className="header">
            <div className="content_header">
                <nav className="Links">
                    <Link to="/">Inicio</Link>
                </nav>
                <img className='ImgLogo' src={logoHeader} alt="Logo de la app" />
                <a onClick={() => { getPdf() }}>Generar reporte</a>
            </div>
        </header>
    );
}