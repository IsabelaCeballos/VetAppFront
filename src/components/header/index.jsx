import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import logoHeader from '../../assets/logo.svg';
import logoMorado from '../../assets/logoMora.jpg';
import huellaRosa from '../../assets/huellarosa.jpg';


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
            //debugger
            let i = 35;

            doc.addImage(logoMorado, 'JPG', 50, 8, 8, 8);
            doc.setTextColor(108, 112, 201);
            doc.setFontSize(17);
            doc.setFont("Helvetica");
            doc.text(60, 15, 'Reporte sobre clientes y medicinas');

            DATA_FULL[0].map((element) => {
                if (i > 280) {
                    doc.addPage()
                    i = 35;
                    doc.setTextColor(0, 0, 0);
                    doc.setFontSize(13);
                    doc.setFont("Helvetica");
                    doc.text(35, i, `${element.full_name}`)
                    doc.text(110, i, ` ${element.cedula}`)
                } else {
                    doc.setTextColor(0, 0, 0);
                    doc.setFontSize(13);
                    doc.setFont("Helvetica");
                    doc.text(35, i, `${element.full_name}`)
                    doc.text(110, i, ` ${element.cedula}`)
                }
                i = i + 10;
            })
            let j = i + 15
            let k = j - 8;

            //doc.addFont('ArialMS', 'Arial', 'normal');
            doc.setFont("Helvetica");
            doc.addImage(huellaRosa, 'JPG', 70, k, 8, 8);
            doc.setTextColor(254, 137, 156);
            doc.setFontSize(17);

            doc.text(80, j, 'Medicinas');
            i = i + 30;

            DATA_FULL[1].map((element) => {
                if (i > 280) {
                    doc.addPage()
                    i = 35;
                    doc.setTextColor(0, 0, 0);
                    doc.setFontSize(11);
                    doc.setFont("Helvetica");
                    doc.text(35, i, element);
                } else {
                    doc.setTextColor(0, 0, 0);
                    doc.setFontSize(11);
                    doc.setFont("Helvetica");
                    doc.text(35, i, element);
                }
                i = i + 10;
            })

            //doc.setTextColor(0, 0, 0);
            doc.setFontSize(15);
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