import React, { useState } from 'react';

import { Button } from '../button/Button';

export const InfoData = (props) => {
    const {data, title, canEdit, type, action} = props;

    const [editData, setEditData] = useState(false);
    const [submit, setSubmit] = useState("");

    const infoDataContainer = {
        width: "80%",
        margin: "0 auto 6rem",
    }
    const titleContent = {
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0"
    }
    const fileContent = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "#222222",
        margin: "10px 0"
    }
    const inputData = {
        width: "10rem",
        fontSize: "1rem",
        textAlign: "end",
        borderBottom: "1px dashed gray",
        outline: "none"
    };
    const canEditText = {
        textDecoration: "underline", 
        cursor:"pointer",
        color: "4B4B4B",
        fontWeight: "bolder"
    }
    const buttonsContainer = {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1rem 0",
        opacity: editData || !canEdit ? "1": "0.5"
    }

    const formRef = React.useRef();
    const handleSubmit = (evt)=> {
        evt.preventDefault();
        // const formData = formRef.current.elements.input;
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
        console.log(values);
        // action(values, submit);
    }

    return (
        <section style={infoDataContainer}>
            <div style={titleContent}>
                <h2 style={{color:"#6C70C9"}}>{title}</h2>
                {canEdit && <p style={canEditText} onClick={() => setEditData(!editData)}>Editar</p>}
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                {
                type === "user"?
                    <section>
                        {console.log(data)}
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Cedula:</p><input readOnly={!editData} type="text" name="cc" id="cc" defaultValue={data && data.cc} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre/s:</p><input readOnly={!editData} type="text" name="names" id="names" defaulValue={data && data.names} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Apellidos:</p><input readOnly={!editData} type="text" name="surnames" id="surnames" defaulValue={data && data.surnames} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Dirección:</p><input readOnly={!editData} type="text" name="address" id="address" defaulValue={data && data.address} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Teléfono:</p><input readOnly={!editData} type="number" name="phoneNumber" id="phoneNumber" defaulValue={data && data.phoneNumber} style={inputData}/></div>
                    </section>
                : type === "pet" ?
                    <section>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre:</p><input readOnly={!editData} type="text" name="name" id="name" defaulValue={data && data.name} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Raza:</p><input readOnly={!editData} type="text" name="race" id="race" defaulValue={data && data.race} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Edad:</p><input readOnly={!editData} type="number" name="age" id="age" defaulValue={data && data.age} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Peso:</p><input readOnly={!editData} type="number" name="weight" id="weight" defaulValue={data && data.weight} style={inputData}/></div>
                    </section>
                : type === "medicine"?
                <section>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre:</p><input readOnly={!editData} type="text" name="nameMedicine" id="nameMedicine" defaulValue={data && data.nameMedicine} style={inputData}/></div>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Descipción:</p><input readOnly={!editData} type="text" name="description" id="description" defaulValue={data && data.description} style={inputData}/></div>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Dosis:</p><input readOnly={!editData} type="number" name="doses" id="doses" defaulValue={data && data.doses} style={inputData}/></div>
                </section>
                :null
                }
                <div style={buttonsContainer}>
                    <Button borderColor="#6C70C9" typeButton="submit" funcionOnclick={()=>setSubmit("guardar")}>Guardar</Button>
                    {canEdit && <Button borderColor="#E86166" typeButton="submit" funcionOnclick={()=>setSubmit("eliminar")}>Eliminar</Button>}
                </div>
            </form>
        </section>
    )
}