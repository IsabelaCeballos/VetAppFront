import React, { useState } from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ComponentSearchUser } from '../components/searchUser';
import { InfoData } from '../components/infoData/InfoData';
import { Circle } from '../components/circle';

export const SearchUser = () => {
    const [data, setData] = useState("");
    const [dataPet, setDataPet] = useState("");

    return (
        <>
            <Header />
            <ComponentSearchUser data={data} setData={setData} setDataPet={setDataPet} />
            {
                data ?
                    <InfoData data={data} title="Datos cliente" canEdit type="user" />
                    : null
            }
            {
                dataPet ?
                    dataPet.map((element, index) => {
                        return (
                            <Circle key={index} name={element.name} type={"pet"} />
                        );
                    })
                    : null
            }
            <Footer />
        </>
    );
}