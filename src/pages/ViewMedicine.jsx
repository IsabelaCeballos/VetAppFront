import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_dog.png';
import { InfoData } from '../components/infoData/InfoData';

export const ViewMedicine = () => {
    const DATA_MEDICINE = {
        _id: "633dd6dec1c69d59b0d99ffc",
        nameMedicine: "Suplemento",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting indus…",
        doses: 2,
        idPet: "633dd63605ccba9956ca308f",
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
            <InfoData data={DATA_MEDICINE} title="Datos medicina" canEdit type="medicine" />
            <Footer />
        </>
    )
}