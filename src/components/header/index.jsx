import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import logoHeader from '../../assets/logo.svg';

export const Header = () => {
    import('./style.css');
    const [dataUsers,setDataUsers] = useState(null);
    const [dataMedicines,setDataMedicines] = useState(null);

    const getPdf = () => {
        console.log('holiii')
        //fetch users, medicine
        getUser();
        getMedicine();

        if (dataUsers !== null && dataMedicines !== null) {
            // console.log(dataUsers, dataMedicines)
            let userFilter = dataUsers.map((elm) => {
                return {full_name: `${elm.names} ${elm.surnames}`, cedula: elm.cc}
            });

            let medicineFilter = dataMedicines.map((elm) => {
                return (elm.nameMedicine).toUpperCase().trim()
            })

            let medicineUnics = [...new Set(medicineFilter)];

            const DATA_FULL = [userFilter, medicineUnics]
            console.log(DATA_FULL)
        }
        
        //instancia del objeto
        // const doc = new jsPDF();


        // doc.setFontSize(22);
        // doc.text(20, 20, 'This is a title');

        // doc.setFontSize(16);
        // doc.text(20, 30, 'This is some normal sized text underneath.');

        // doc.save('Reporte.pdf');
    }

    const getUser = async () => {
        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/reportUsers`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            setDataUsers(responseJson);
        } catch (error) {
            console.error(error);
        }
    };

    const getMedicine = async () => {
        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/reportMedicines`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            setDataMedicines(responseJson);
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