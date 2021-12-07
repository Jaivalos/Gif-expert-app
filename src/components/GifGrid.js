import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {cat} ) => {

    const {data, loading} = useFetchGifs( cat );

    return (
        <>
            <h3>{cat}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">            {
                    data.map( i => (
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
