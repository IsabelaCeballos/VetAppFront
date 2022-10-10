import React, { useState } from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ComponentSearchUser } from '../components/searchUser';
import { InfoData } from '../components/infoData/InfoData';

export const SearchUser = () => {
    const [data, setData] = useState("");

    return (
        <>
            <Header />
            <ComponentSearchUser data={data} setData={setData} />
            {
                data ?
                    <InfoData data={data} title="Datos cliente" canEdit type="user" />
                    : null
            }
            <Footer />
        </>
    );
}