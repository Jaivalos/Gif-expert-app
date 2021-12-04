import React, {useState, useEffect} from 'react'

export const GifGrid = ( {cat} ) => {

    const [cont, setcont] = useState(0)

    useEffect( () => {
        getGif();
    }, [])

    const getGif = async()=>{
        const url =' https://api.giphy.com/v1/gifs/search?q=Michael Jordan&limit=5&api_key=SBqbOdBrevdh1CiR0lFggV3dum7Qa7fT'
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

    }

    return (
        <>
            <h3>{cat}</h3>
            <h3>{cont}</h3>
            <button onClick={ ()=> setcont(cont + 1) }></button>
        </>
    )
}
