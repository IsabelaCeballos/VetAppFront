import React from 'react';
import { Link } from 'react-router-dom';

//imagenes 
import imgHuella from '../../assets/huella.svg';
import imgInyeccion from '../../assets/inyeccion.svg';

export const Circle = (props) => {
    import('./style.css');
    const { name, type, dataPet, dataMedicine } = props;

    return (
        <div className='content_ppal'>
            {
                type === "pet" ?
                    <Link to={`/viewPets/${dataPet._id}`}>
                        <div className='content_circle'>
                            <img src={imgHuella} alt="imagen huella" />
                            <p>{name}</p>
                        </div>
                    </Link>
                    :
                    <Link to={`/viewmedicine/${dataMedicine._id}`}>
                        <div className='content_circle'>
                            <img src={imgInyeccion} alt="imagen huella" />
                            <p>{name}</p>
                        </div>
                    </Link>
            }
        </div>
    );
}