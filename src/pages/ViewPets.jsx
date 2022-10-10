import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_dog.png';
import { InfoData } from '../components/infoData/InfoData';

export const ViewPets = () => {
    const DATA_PET = {
        _id: "633cc7db2c69a235c3be7f68",
        name: "Rocco",
        race: "Golden Retriever",
        age: 2,
        weight: 10,
        idUser: "633ca6c34370a18d0314210f",
        __v: 0
    }
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
            <InfoData data={DATA_PET} title="Datos mascota" canEdit type="pet" />
            <Footer />
        </>
    )
}