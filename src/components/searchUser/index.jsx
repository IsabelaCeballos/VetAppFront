import React, { useState } from 'react';

//imagenes
import imgUser from '../../assets/user_dog.png';
import imgLupa from '../../assets/to_search.png';
import imgLupaMini from '../../assets/lupa.svg';

//components
import { Button } from '../button/Button'

export const ComponentSearchUser = (props) => {
    const { data, setData, setDataPet } = props;
    const [inputData, setInputData] = useState(null);

    /*useEffect(() => {
        getPets();
    }, [data._id !== ""]);*/

    const getUser = async () => {
        try {
            const response = await fetch(`https://vet-hazel.vercel.app/api/users/${inputData}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            setData(responseJson);
            getPets(responseJson);
        } catch (error) {
            console.error(error);
        }
    };

    const getPets = async (responseJson) => {
        try {
            const responsePet = await fetch(`https://vet-hazel.vercel.app/api/petsUser/${responseJson._id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'GET'
            });
            console.log(responseJson._id)
            const responsePetJson = await responsePet.json();
            setDataPet(responsePetJson);
            console.log(responsePetJson)
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
                    <div className='content_button' onClick={() => { getUser() }}>
                        <Button borderColor="#F1517F" >Buscar</Button>
                    </div>
                </div>
                {
                    data === null ?
                        <div className='content_p'>
                            <p>¡No existe un cliente!</p>
                        </div>
                        : null
                }
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