import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_dog.png';
import { InfoData } from '../components/infoData/InfoData';
import { NewData } from '../components/infoData/NewData';
import { Circle } from '../components/circle';

export const ViewPets = () => {
    const [pet, setPet] = useState("");
    const [medicine, setMedicine] = useState("");
    const { idPet } = useParams();

    useEffect(() => {
        viewPet()
    }, []);

    const viewPet = async () => {
        try {
            const responsePet = await fetch(`https://vet-hazel.vercel.app/api/pets/${idPet}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responsePetJson = await responsePet.json();
            setPet(responsePetJson);
            //getMedicine(responsePetJson);
            console.log(responsePetJson)
        } catch (error) {
            console.error(error);
        }
    }

    const getMedicine = async (responsePetJson) => {
        debugger
        const r = responsePetJson;
        try {
            const responseMedicine = await fetch(`https://vet-hazel.vercel.app/api/medicines/${r._id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseMedicineJson = await responseMedicine.json();
            setMedicine(responseMedicineJson);
            console.log("holiii" + responseMedicineJson);
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
                <img src={imgUser} alt="img_searchUser" style={{ width: "10%" }} />
            </div>
            <InfoData data={pet} title="Datos mascota" canEdit type="pet" />
            <NewData typeTitle="medicina" goTo={`/newmedicine`} id={pet._id}>
                {
                    medicine ?
                        medicine.map((element, index) => {
                            return (
                                <Circle key={index} name={element.name} dataMedicine={element} />
                            );
                        })
                        : null
                }
            </NewData>
            <Footer />
        </>
    )
}