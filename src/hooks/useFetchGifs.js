
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = ( categoria ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {

        getGif( categoria )
            .then( imgs =>{

                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 2000);

            })
            
    }, [categoria])

    return state;

}



