import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () =>{

    const [cat, setCat] = useState([])

    return(
        <div>
            <header>
                <h2 className="title">GifExpertApp</h2>
                <AddCategory setCat = {setCat} />
                <hr />
            </header>

            <section>
                {   
                    cat.map( (category) =>
                        <GifGrid 
                            key = {category}
                            cat = {category}
                        />
                    )
                }
            </section>

        </div>
    );
}

