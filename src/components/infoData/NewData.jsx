import React from 'react';

//components
import { Button } from '../button/Button';

export const NewData = (props) => {
    const { typeTitle, id, goTo, children } = props;
    const newDataContainer = {
        width: "80%",
        margin: "0 auto 6rem",
    }
    return (
        <div style={newDataContainer}>
            <h2 style={{ color: "#6C70C9", margin: "1rem 0" }}>{typeTitle === "mascota" ? "Sus mascotas" : typeTitle === "medicamento" ? "Sus medicamentos" : ""}</h2>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
                {
                    children
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button borderColor="#6C70C9" goTo={`${goTo}/${id}`}>{
                    typeTitle === "mascota" ? "Nueva mascota"
                        : typeTitle === "medicamento" ?
                            "Nuevo medicamentos" : ""
                }</Button>
            </div>
        </div>
    )
}