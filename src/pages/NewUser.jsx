import React, { useState } from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InfoData } from '../components/infoData/InfoData';
import imgUser from '../assets/user_cat.png';
import { NewData } from '../components/infoData/NewData';

export const NewUser = () => {
    const [response_id, setReseponse_id] = useState(null);

    const content_imageOne = {
        width: "100%",
        marginTop: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    const newUser = async (dataUser) => {
        dataUser.phoneNumber = parseInt(dataUser.phoneNumber);
        try {
            const response = await fetch("https://vet-hazel.vercel.app/api/create_user", {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'POST',
                body: JSON.stringify(dataUser)
            });
            const responseJson = await response.json();
            alert("usuario creado correctamente");
            console.log(responseJson);
            setReseponse_id(responseJson._id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div style={content_imageOne}>
                <img src={imgUser} alt="img_searchUser" style={{ width: "10%" }} />
            </div>
            <InfoData title="Nuevo cliente" type="user" action={newUser} />
            {response_id && <NewData idUser={response_id} />}
            <Footer />
        </>
    )
}