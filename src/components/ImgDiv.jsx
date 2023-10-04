import React from 'react';
import image from '../images/react4-img.jpg';

const getImgDiv = () =>{
    return(
        <div style={{ flex: '1' , display: 'grid' , placeItems: 'center' }}>
            <img src={image} alt="info img" style={{width:'350px'}}/>
        </div>
    )
}

export default getImgDiv