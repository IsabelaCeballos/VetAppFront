import React from 'react';
import { Button } from '../components/button/Button';

import user_dog  from "../assets/user_dog.png";
import user_cat  from "../assets/user_cat.png";

export const Home = () => {

    const todoItem = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const imgPet = {
        width: "15rem",
        height: "20rem"
    }
    const contentItems = {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }

    return (
        <>
            <section style={contentItems}>
                <div style={todoItem}>
                    <img style={imgPet}  src={user_dog} alt="pet" />
                    <Button 
                        fillColor="#F1517F" 
                        borderColor="#F1517F"  
                        width="15rem" 
                        goTo="/searchuser">
                        Buscar cliente
                    </Button>
                </div>
                <div style={todoItem}>
                    <img style={imgPet}  src={user_cat} alt="pet" />
                    <Button 
                        fillColor="#6C70C9" 
                        borderColor="#6C70C9"  
                        width="15rem" 
                        goTo="/newuser">
                        Registrar nuevo cliente
                    </Button>
                </div>
            </section>
        </>
    )
}