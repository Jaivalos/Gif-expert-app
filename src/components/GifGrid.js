import React, {useState, useEffect} from 'react'
import { getGif } from '../helpers/GetGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {cat} ) => {

    const [img, setimg] = useState([])

    useEffect( () => {
        getGif( cat )
         .then( setimg );
            
    }, [])

    return (
        <>
            <h3>{cat}</h3>
            <div className="card-grid">            {
                    img.map( i => (
                        <GifGridItem 
                            key = {i.id} 
                            {...i}
                        />
                    ))
                }
            </div>
        </>
    )
}
