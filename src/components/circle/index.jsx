import React from 'react';

//imagenes 
import imgHuella from '../../assets/huella.svg';
import imgInyeccion from '../../assets/inyeccion.svg';

export const Circle = (props) => {
    import('./style.css');
    const { name, type } = props;
    return (
        <div className='content_ppal'>
            {
                type === "pet" ?
                    <div className='content_circle'>
                        <img src={imgHuella} alt="imagen huella" />
                        <p>{name}</p>
                    </div>
                    :
                    <div className='content_circle'>
                        <img src={imgInyeccion} alt="imagen huella" />
                        <p>{name}</p>
                    </div>
            }
        </div>
    );
}