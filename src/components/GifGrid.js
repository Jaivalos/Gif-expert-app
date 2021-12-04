import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {cat} ) => {

    const [img, setimg] = useState([])

    useEffect( () => {
        getGif();
    }, [])

    const getGif = async()=>{
        const url =' https://api.giphy.com/v1/gifs/search?q=Michael Jordan&limit=10&api_key=SBqbOdBrevdh1CiR0lFggV3dum7Qa7fT'
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map(img=>{
            return{
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })

        console.log(gifs);
        setimg(gifs);

    }

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
