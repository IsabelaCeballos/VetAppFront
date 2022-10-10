import React from 'react';

export const InfoData = (props) => {
    const {data, title, canEdit, type} = props;
    return (
        <>
            <div>
                <h2>{title}</h2>
                {canEdit && "<p>Editar<p>"}
            </div>
            <form action="">
            {
                type === "user"?
                    <section>
                        <div><p>Cedula:</p><input readOnly={data?readOnly:null} type="text" name="cc" id="cc" value={data ? data.cc:"*"}/></div>
                        <div><p>Nombre/s:</p><input readOnly={data?readOnly:null} type="text" name="names" id="names" value={data ? data.names:"*"}/></div>
                        <div><p>Aprellidos:</p><input readOnly={data?readOnly:null} type="text" name="surnames" id="surnames" value={data ? data.surnames:"*"}/></div>
                        <div><p>Dirección:</p><input readOnly={data?readOnly:null} type="text" name="address" id="address" value={data ? data.address:"*"}/></div>
                        <div><p>Teléfono:</p><input readOnly={data?readOnly:null} type="text" name="phoneNumber" id="phoneNumber" value={data ? data.phoneNumber:"*"}/></div>
                    </section>
                : type === "pet" ?
                    <section>
                        <div><p>Nombre:</p><input readOnly={data?readOnly:null} type="text" name="name" id="name" value={data ? data.name:"*"}/></div>
                        <div><p>Raza:</p><input readOnly={data?readOnly:null} type="text" name="race" id="race" value={data ? data.race:"*"}/></div>
                        <div><p>Edad:</p><input readOnly={data?readOnly:null} type="text" name="age" id="age" value={data ? data.age:"*"}/></div>
                        <div><p>Peso:</p><input readOnly={data?readOnly:null} type="text" name="weight" id="weight" value={data ? data.weight:"*"}/></div>
                    </section>
                : type === "medicine"?
                <section>
                    <div><p>Nombre:</p><input readOnly={data?readOnly:null} type="text" name="nameMedicine" id="nameMedicine" value={data ? data.nameMedicine:"*"}/></div>
                    <div><p>Descipción:</p><input readOnly={data?readOnly:null} type="text" name="description" id="description" value={data ? data.description:"*"}/></div>
                    <div><p>Dosis:</p><input readOnly={data?readOnly:null} type="text" name="doses" id="doses" value={data ? data.doses:"*"}/></div>
                </section>
                :null
            }
            </form>

        </>
    )
}