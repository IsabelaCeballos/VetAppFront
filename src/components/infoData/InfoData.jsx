import React, { useState } from 'react';

import { Button } from '../button/Button';

export const InfoData = (props) => {
    const {data, title, canEdit, type, action} = props;
    const [editData, setEditData] = useState(false);

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
        border: "none",
        outline: "none"
    }
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
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
        action(values);
    }

    return (
        <section style={infoDataContainer}>
            <div style={titleContent}>
                <h2 style={{color:"#6C70C9"}}>{title}</h2>
                {canEdit && <p style={canEditText} onClick={() => setEditData(true)}>Editar</p>}
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                {
                type === "user"?
                    <section>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Cedula:</p><input readOnly={data && !editData ?true:null} type="text" name="cc" id="cc" defaultValue={data ? data.cc:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre/s:</p><input readOnly={data && !editData ?true:null} type="text" name="names" id="names" defaultValue={data ? data.names:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Apellidos:</p><input readOnly={data && !editData ?true:null} type="text" name="surnames" id="surnames" defaultValue={data ? data.surnames:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Dirección:</p><input readOnly={data && !editData ?true:null} type="text" name="address" id="address" defaultValue={data ? data.address:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Teléfono:</p><input readOnly={data && !editData ?true:null} type="text" name="phoneNumber" id="phoneNumber" defaultValue={data ? data.phoneNumber:"*"} style={inputData}/></div>
                    </section>
                : type === "pet" ?
                    <section>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre:</p><input readOnly={data && !editData ?true:null} type="text" name="name" id="name" defaultValue={data ? data.name:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Raza:</p><input readOnly={data && !editData ?true:null} type="text" name="race" id="race" defaultValue={data ? data.race:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Edad:</p><input readOnly={data && !editData ?true:null} type="text" name="age" id="age" defaultValue={data ? data.age:"*"} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Peso:</p><input readOnly={data && !editData ?true:null} type="text" name="weight" id="weight" defaultValue={data ? data.weight:"*"} style={inputData}/></div>
                    </section>
                : type === "medicine"?
                <section>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre:</p><input readOnly={data && !editData ?true:null} type="text" name="nameMedicine" id="nameMedicine" defaultValue={data ? data.nameMedicine:"*"} style={inputData}/></div>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Descipción:</p><input readOnly={data && !editData ?true:null} type="text" name="description" id="description" defaultValue={data ? data.description:"*"} style={inputData}/></div>
                    <div style={fileContent}><p style={{fontWeight: "bolder"}}>Dosis:</p><input readOnly={data && !editData ?true:null} type="text" name="doses" id="doses" defaultValue={data ? data.doses:"*"} style={inputData}/></div>
                </section>
                :null
                }
                <div style={buttonsContainer}>
                    <Button borderColor="#6C70C9" type="submit" >Guardar</Button>
                    {canEdit && <Button borderColor="#E86166" >Eliminar</Button>}
                </div>
            </form>
        </section>
    )
}