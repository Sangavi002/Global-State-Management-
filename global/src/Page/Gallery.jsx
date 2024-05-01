
import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="box">
            {data.map(item => (
                <ImageCard key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Gallery;
