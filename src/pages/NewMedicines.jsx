import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_cat.png';
import { InfoData } from '../components/infoData/InfoData';
import { useParams } from 'react-router-dom';

export const NewMedicines = () => {
    const {idPet }= useParams();
    console.log(idPet);

    const newMedicine = async (dataMedicine, typeSubmit) =>{
        dataMedicine.doses = parseInt(dataMedicine.doses);

        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/create_medicine/${idPet}`, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            method: 'POST',
            body: JSON.stringify(dataMedicine)
            });
            const responseJson = await response.json();
            alert("Medicamento creado correctamente");
            console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    };

    const content_imageOne = {
        width: "100%",
        marginTop: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    
    return (
        <>
            <Header />
            <div style={content_imageOne}>
                <img src={imgUser} alt="img_searchUser" style={{width: "10%"}}/>
            </div>
            <InfoData itle="Nueva medicina" type="medicine" action={newMedicine} />
            <Footer />
        </>
    )
}