import React from 'react';

//imagenes
import imgUser from '../../assets/user_dog.png';
import imgLupa from '../../assets/to_search.png';
import imgLupaMini from '../../assets/lupa.svg'

export const ComponentSearchUser = (props) => {
    const {data} = props;
    import('./style.css');
    return (
        <>
            <div className='content_searchUser'>
                <div className='content_imageOne'>
                    <img src={imgUser} alt="img_searchUser" />
                </div>
                <div className='content_input'>
                    <img src={imgLupaMini} alt="img_lupa_mini" />
                    <input type="text" placeholder='Identificación del cliente' />
                </div>
                {
                    !data ?
                        <div className='content_imageSecond'>
                            <img src={imgLupa} alt="Lupa" />
                        </div>
                    :null
                }
            </div>
        </>
    )
}