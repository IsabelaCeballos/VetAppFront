import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_cat.png';
import { InfoData } from '../components/infoData/InfoData';
import { useParams } from 'react-router-dom';

export const NewMedicines = () => {
    const content_imageOne = {
        width: "100%",
        marginTop: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    const {idPet }= useParams();
    console.log(idPet);
    return (
        <>
            <Header />
            <div style={content_imageOne}>
                <img src={imgUser} alt="img_searchUser" style={{width: "10%"}}/>
            </div>
            <InfoData title="Nueva medicina" type="medicine" />
            <Footer />
        </>
    )
}