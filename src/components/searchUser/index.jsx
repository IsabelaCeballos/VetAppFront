import React, { useState } from 'react';

//imagenes
import imgUser from '../../assets/user_dog.png';
import imgLupa from '../../assets/to_search.png';
import imgLupaMini from '../../assets/lupa.svg';

//components
import { Button } from '../button/Button'

export const ComponentSearchUser = (props) => {
    const { data, setData } = props;
    const [inputData, setInputData] = useState(null);

    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${inputData}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            setData(responseJson);
        } catch (error) {
            console.error(error);
        }
    };
    import('./style.css');
    console.log(inputData);
    return (
        <>
            <div className='content_searchUser'>
                <div className='content_imageOne'>
                    <img src={imgUser} alt="img_searchUser" />
                </div>
                <div className='content_input_button'>
                    <div className='content_input'>
                        <img src={imgLupaMini} alt="img_lupa_mini" />
                        <input onChange={(event) => setInputData(event.target.value)}
                            type="text" placeholder='Identificación del cliente' />
                    </div>
                    <div className='content_button'>
                        <Button borderColor="#F1517F" type="submit" onClick={getUser}>Buscar</Button>
                    </div>
                </div>
                {
                    !data ?
                        <div className='content_imageSecond'>
                            <img src={imgLupa} alt="Lupa" />
                        </div>
                        : null
                }
            </div>
        </>
    )
}