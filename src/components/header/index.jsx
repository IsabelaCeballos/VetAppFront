import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import logoHeader from '../../assets/logo.svg';

export const Header = () => {
    import('./style.css');
    const [users, setUsers] = useState("");
    const [medicines, setMedicines] = useState("");

    const getPdf = () => {
        console.log('holiii')

        //fetch users, medicine
        getUser()
        getMedicine()

        //instancia del objeto
        const doc = new jsPDF();
        debugger
        let i = 50;
        users.map((element) => {
            return (
                doc.text(20, i, element.fullname)
            );
            i = (i + 10);
        })

        doc.text(20, 40, users.fullname);


        doc.setFontSize(22);

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
            setUsers(responseJson);
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
            const responseMJson = await response.json();
            setMedicines(responseMJson);
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