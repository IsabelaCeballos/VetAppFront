import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import logoHeader from '../../assets/logo.svg';

export const Header = () => {
    import('./style.css');
    const [dataUsers, setDataUsers] = useState(null);
    const [dataMedicines, setDataMedicines] = useState(null);

    const getPdf = () => {
        console.log('holiii')
        //fetch users, medicine
        getUser();
        getMedicine();

        if (dataUsers !== null && dataMedicines !== null) {
            // console.log(dataUsers, dataMedicines)
            let userFilter = dataUsers.map((elm) => {
                return { full_name: `${elm.names} ${elm.surnames}`, cedula: elm.cc }
            });

            let medicineFilter = dataMedicines.map((elm) => {
                return (elm.nameMedicine).toUpperCase().trim()
            })

            let medicineUnics = [...new Set(medicineFilter)];

            const DATA_FULL = [userFilter, medicineUnics]
            console.log(DATA_FULL)

            //instancia del objeto
            const doc = new jsPDF();
            debugger
            let i = 50;

            DATA_FULL.map((element) => {
                return (
                    doc.text(20, i, element)
                );
                i = (i + 10);
            })
            doc.setFontSize(22);
            doc.save('Reporte.pdf');
        }

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
                <p onClick={() => { getPdf() }}>Generar reporte</p>
            </div>
        </header>
    );
}