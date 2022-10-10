import React from 'react';

//components
import { Button } from '../button/Button';

export const NewData= (props) => {
    const {idUser} = props;
    const newDataContainer = {
        width: "80%",
        margin: "0 auto 6rem",
    }
    return (
        <div style={newDataContainer}>
            <h2 style={{color:"#6C70C9", margin:"1rem 0"}}>Sus mascotas</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button borderColor="#6C70C9" goTo={`newpet/${idUser}`}>Nueva mascota</Button>
            </div>  
        </div>
    )
}