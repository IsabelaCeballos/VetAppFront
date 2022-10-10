import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ComponentSearchUser } from '../components/searchUser';
import { InfoData } from '../components/infoData/InfoData';

export const SearchUser = () => {
    const DATA_USER = {
        _id:"633ce5f2e19ec40cd3707862",
        cc: "1001469387",
        names:"Danielaa",
        surnames: "Jurado Blandón",
        address:"120 East 68th",
        phoneNumber:320742217,
        __v:0
    };
    
    return (
        <>
            <Header />
            <ComponentSearchUser data={DATA_USER}/>
            {
                DATA_USER ? 
                <InfoData data={DATA_USER} title="Datos cliente" canEdit type="user" />
                :null
            }
            <Footer />
        </>
    );
}