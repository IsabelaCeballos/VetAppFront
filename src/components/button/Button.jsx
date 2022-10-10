import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/*Ejemplo de como usar los botones:
    <Button fillColor="#F1517F" borderColor="#F1517F" goTo="/">Guardar</Button>
    <Button borderColor="#F1517F" goTo="/searchuser">Eliminar</Button>
    <Button borderColor="#6C70C9" width="15rem" goTo="/viewpets">Registrar nuevo cliente</Button>
    <Button borderColor="#E86166" width="15rem" goTo="/viewmedicine">Buscar cliente</Button> 
*/


export const Button = (props) => {
    const {fillColor, borderColor, width, goTo ,children } = props;

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const buttonStyle = {
        width: width ? width : "8rem" ,
        height: "2rem",
        fontWeight: "bolder",
        color: fillColor? "white" :borderColor,
        backgroundColor: fillColor? fillColor: "white",
        borderRadius: "10px",
        border: `solid 2px ${borderColor}`,
        fontSize: "1rem",
        cursor: "pointer"
    }
    const buttonStyleHover = {
        width: width ? width : "8rem" ,
        height: "2rem",
        fontWeight: "bolder",
        color: fillColor? borderColor :"white",
        backgroundColor: fillColor? "white" :borderColor,
        borderRadius: "10px",
        border: `solid 2px ${borderColor}`,
        fontSize: "1rem",
        cursor: "pointer"
    }

    return (
        <Link to={goTo ? goTo: "/"}>
            <button 
                style={isHovering?buttonStyleHover:buttonStyle} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                {children}
            </button>
        </Link>
    )
}