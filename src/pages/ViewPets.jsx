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
            getMedicine(responsePetJson);
            console.log(responsePetJson)
        } catch (error) {
            console.error(error);
        }
    }

    const saveOrRemove = async (dataPet, typeSubmit) => {
        if (typeSubmit === "guardar") {
            console.log("hay que guardar");
            dataPet.age = parseInt(dataPet.age);
            dataPet.weight = parseInt(dataPet.weight);
            console.log(dataPet);

            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/update_pet/${idPet}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'PUT',
                    body: JSON.stringify(dataPet)
                });
                const responseJson = await response.json();
                alert("Mascota actualizada correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        } else if (typeSubmit === "eliminar") {
            console.log("hay que eliminar");
            console.log(dataPet);
            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/delete_pet/${idPet}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'DELETE'
                });
                const responseJson = await response.json();
                alert("Mascota eliminada correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        }
    }
    const getMedicine = async () => {
        try {
            const responseMedicine = await fetch(`https://vet-hazel.vercel.app/api/medicinesPet/${idPet}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseMedicineJson = await responseMedicine.json();
            setMedicine(responseMedicineJson);
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
            <InfoData data={pet}setData={setPet}  title="Datos mascota" canEdit type="pet" action={saveOrRemove} />
            <NewData typeTitle="medicina" goTo="/newmedicine" id={idPet}>
                {
                    medicine ?
                        medicine.map((element, index) => {
                            return (
                                <Circle key={index} name={element.nameMedicine} dataMedicine={element} />
                            );
                        })
                        : null
                }
            </NewData>
            <Footer />
        </>
    )
}