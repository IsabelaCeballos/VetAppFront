import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import imgUser from '../assets/user_dog.png';
import { InfoData } from '../components/infoData/InfoData';

export const ViewMedicine = () => {
    // const DATA_MEDICINE = {
    //     _id: "633dd6dec1c69d59b0d99ffc",
    //     nameMedicine: "Suplemento",
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting indus…",
    //     doses: 2,
    //     idPet: "633dd63605ccba9956ca308f",
    //     __v: 0
    // }
    const [medicine, setMedicine] = useState("");
    const { idMedicine } = useParams();

    useEffect(() => {
        viewMedi()
    }, []);

    const viewMedi = async () => {
        try {
            const responseMedicine = await fetch(`https://vet-hazel.vercel.app/api/medicines/${idMedicine}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseMedicineJson = await responseMedicine.json();
            setMedicine(responseMedicineJson);
            console.log(responseMedicineJson)
        } catch (error) {
            console.error(error);
        }
    }

    const saveOrRemove = async (dataMedicine, typeSubmit) => {
        if (typeSubmit === "guardar") {
            console.log("hay que guardar");
            dataMedicine.doses = parseInt(dataMedicine.doses);
            console.log(dataMedicine);

            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/update_medicine/${idMedicine}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'PUT',
                    body: JSON.stringify(dataMedicine)
                });
                const responseJson = await response.json();
                alert("Medicina actualizada correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        } else if (typeSubmit === "eliminar") {
            console.log("hay que eliminar");
            console.log(dataMedicine);
            try {
                const response = await fetch(`https://vet-hazel.vercel.app/api/delete_medicine/${idMedicine}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    method: 'DELETE'
                });
                const responseJson = await response.json();
                alert("Medicina eliminada correctamente");
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
        }
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
            <InfoData data={medicine} setData={setMedicine} title="Datos medicina" canEdit type="medicine" action={saveOrRemove} />
            <Footer />
        </>
    )
}