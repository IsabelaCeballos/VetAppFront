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
    const saveOrRemove = async (dataUser, typeSubmit) => {
        if (typeSubmit === "guardar") {
            console.log("hay que guardar");
            dataUser.phoneNumber = parseInt(dataUser.phoneNumber);
            console.log(dataUser);

            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/update_user/${data.cc}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'PUT',
                    body: JSON.stringify(dataUser)
                });
                const responseJson = await response.json();
                alert("usuario actualizado correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        } else if (typeSubmit === "eliminar") {
            console.log("hay que eliminar");
            console.log(dataUser);
            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/delete_user/${data.cc}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'DELETE'
                });
                const responseJson = await response.json();
                alert("usuario eliminador correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <>
            <Header />
            <ComponentSearchUser data={data} setData={setData} setDataPet={setDataPet} />
            {
                data ?
                    <InfoData data={data} title="Datos cliente" canEdit type="user" action={saveOrRemove} />
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