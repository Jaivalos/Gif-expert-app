import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () =>{

    const [cat, setCat] = useState(['Guard'])

    return(
        <div>
            <header>
                <h2 className="title">GifExpertApp</h2>
                <AddCategory setCat = {setCat} />
                <hr />
            </header>

            <ol>
                {
                    cat.map( (category) =>
                        <GifGrid 
                            key = {category}
                            cat = {category}
                        />
                    )
                }
            </ol>

        </div>
    );
}

