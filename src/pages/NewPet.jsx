import React, { useState } from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_cat.png';
import { InfoData } from '../components/infoData/InfoData';
import { useParams } from 'react-router-dom';
import { NewData } from '../components/infoData/NewData';

export const NewPet = () => {
    const [response_id, setReseponse_id] = useState(null);

    const {idUser }= useParams();
    console.log(idUser);

    const newPet = async (dataPet, typeSubmit) =>{
        dataPet.age = parseInt(dataPet.age);
        dataPet.weight = parseInt(dataPet.weight);

        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/create_pet/${idUser}`, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            method: 'POST',
            body: JSON.stringify(dataPet)
            });
            const responseJson = await response.json();
            alert("Mascota creada correctamente");
            console.log(responseJson);
            setReseponse_id(responseJson._id);
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
            <InfoData title="Nueva mascota" type="pet" action={newPet} />
            {response_id && <NewData tittypeTitlele="medicamento" id={response_id} goTo="/newmedicine" />}
            <Footer />
        </>
    )
}