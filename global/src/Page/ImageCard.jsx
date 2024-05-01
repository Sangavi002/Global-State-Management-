
import React from 'react';
import './Gallery.css';

const ImageCard = ({ item }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={item.image} alt={item.category} />
            </div>
            <h4 style={{ height: '40px', textOverflow: 'ellipsis', overflow: 'hidden' }}>{item.title}</h4>
            <h4>₹ {item.price}</h4>
        </div>
    );
}

export default ImageCard;
