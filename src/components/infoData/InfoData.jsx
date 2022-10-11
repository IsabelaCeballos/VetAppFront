import React, { useState } from 'react';

import { Button } from '../button/Button';

export const InfoData = (props) => {
    const {data, setData, title, canEdit, type, action} = props;

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
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
        let valuesFull = {}
        // console.log(values);
        if (canEdit) {
            const id = {_id: data._id};
            setData({...values, id});
            setEditData(!editData);
            valuesFull = {...values, id};
            console.log(valuesFull);
            action(valuesFull, submit);
        }else{
            console.log(values);
            action(values, submit)
        }

    }

    return (
        <section style={infoDataContainer}>
            <div style={titleContent}>
                <h2 style={{color:"#6C70C9"}}>{title}</h2>
                {canEdit && <p style={canEditText} onClick={() => setEditData(!editData)}>Editar</p>}
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                {
                type === "user" ?
                    <section>
                        {/* {console.log(data)} */}
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Cedula:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="cc" id="cc" value={data && data.cc} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="cc" id="cc" defaultValue={data && data.cc} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="cc" id="cc" value={data && data.cc} defaultValue={data && data.cc} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Nombre/s:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="names" id="names" value={data && data.names} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="names" id="names" defaultValue={data && data.names} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="names" id="names" defaultValue={data && data.names} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Apellidos:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="surnames" id="surnames" value={data && data.surnames} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="surnames" id="surnames" defaultValue={data && data.surnames} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="surnames" id="surnames" defaultValue={data && data.surnames} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Dirección:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="address" id="address" value={data && data.address} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="address" id="address" defaultValue={data && data.address} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="address" id="address" defaultValue={data && data.address} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Teléfono:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="number" name="phoneNumber" id="phoneNumber" value={data && data.phoneNumber} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="number" name="phoneNumber" id="phoneNumber" defaultValue={data && data.phoneNumber} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="number" name="phoneNumber" id="phoneNumber" defaultValue={data && data.phoneNumber} style={inputData}/> */}
                        </div>
                    
                        
                        {/* <div style={fileContent}><p style={{fontWeight: "bolder"}}>Nombre/s:</p><input readOnly={data && !editData ?true:null} type="text" name="names" id="names" defaultValue={data && data.names} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Apellidos:</p><input readOnly={data && !editData ?true:null} type="text" name="surnames" id="surnames" defaultValue={data && data.surnames} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Dirección:</p><input readOnly={data && !editData ?true:null} type="text" name="address" id="address" defaultValue={data && data.address} style={inputData}/></div>
                        <div style={fileContent}><p style={{fontWeight: "bolder"}}>Teléfono:</p><input readOnly={data && !editData ?true:null} type="number" name="phoneNumber" id="phoneNumber" defaultValue={data && data.phoneNumber} style={inputData}/></div> */}
                    </section>
                : type === "pet" ?
                    <section>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Nombre:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="name" id="name" value={data && data.name} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="name" id="name" defaultValue={data && data.name} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="name" id="name" defaultValue={data && data.name} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Raza:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="text" name="race" id="race" value={data && data.race} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="text" name="race" id="race" defaultValue={data && data.race} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="text" name="race" id="race" defaultValue={data && data.race} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Edad:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="number" name="age" id="age" value={data && data.age} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="number" name="age" id="age" defaultValue={data && data.age} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="number" name="age" id="age" defaultValue={data && data.age} style={inputData}/> */}
                        </div>
                        <div style={fileContent}>
                            <p style={{fontWeight: "bolder"}}>Peso:</p>
                            {
                                data && !editData 
                                ?<input readOnly={data && !editData ?true:null} type="number" name="weight" id="weight" value={data && data.weight} style={inputData}/>
                                :<input readOnly={data && !editData ?true:null} type="number" name="weight" id="weight" defaultValue={data && data.weight} style={inputData}/>
                            }
                            {/* <input readOnly={data && !editData ?true:null} type="number" name="weight" id="weight" defaultValue={data && data.weight} style={inputData}/> */}
                        </div>
                    </section>
                : type === "medicine"?
                <section>
                    <div style={fileContent}>
                        <p style={{fontWeight: "bolder"}}>Nombre:</p>
                        {
                            data && !editData 
                            ?<input readOnly={data && !editData ?true:null} type="text" name="nameMedicine" id="nameMedicine" value={data && data.nameMedicine} style={inputData}/>
                            :<input readOnly={data && !editData ?true:null} type="text" name="nameMedicine" id="nameMedicine" defaultValue={data && data.nameMedicine} style={inputData}/>
                        }
                        {/* <input readOnly={data && !editData ?true:null} type="text" name="nameMedicine" id="nameMedicine" defaultValue={data && data.nameMedicine} style={inputData}/> */}
                    </div>
                    <div style={fileContent}>
                        <p style={{fontWeight: "bolder"}}>Descipción:</p>
                        {
                            data && !editData 
                            ?<input readOnly={data && !editData ?true:null} type="text" name="description" id="description" value={data && data.description} style={inputData}/>
                            :<input readOnly={data && !editData ?true:null} type="text" name="description" id="description" defaultValue={data && data.description} style={inputData}/>
                        }
                        {/* <input readOnly={data && !editData ?true:null} type="text" name="description" id="description" defaultValue={data && data.description} style={inputData}/> */}
                    </div>
                    <div style={fileContent}>
                        <p style={{fontWeight: "bolder"}}>Dosis:</p>
                        {
                            data && !editData 
                            ?<input readOnly={data && !editData ?true:null} type="number" name="doses" id="doses" value={data && data.doses} style={inputData}/>
                            :<input readOnly={data && !editData ?true:null} type="number" name="doses" id="doses" defaultValue={data && data.doses} style={inputData}/>
                        }
                        {/* <input readOnly={data && !editData ?true:null} type="number" name="doses" id="doses" defaultValue={data && data.doses} style={inputData}/> */}
                    </div>
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