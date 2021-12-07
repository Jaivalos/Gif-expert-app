import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/GetGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {cat} ) => {

    // const [img, setimg] = useState([])
    const {data, loading} = useFetchGifs();

    // useEffect( () => {
    //     getGif( cat )
    //      .then( setimg );
            
    // }, [])

    return (
        <>
            <h3>{cat}</h3>

            {loading ? 'Cargando...' : 'Data cargada'}

            {/* <div className="card-grid">            {
                    img.map( i => (
                        <GifGridItem 
                            key = {i.id} 
                            {...i}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
