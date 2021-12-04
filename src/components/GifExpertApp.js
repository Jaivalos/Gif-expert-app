import React, {useState} from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () =>{

    const [cat, setCat] = useState(['Guard', 'Shooting guard', 'Center'])

    return(
        <div>
            <header>
                <h2 className="title">GifExpertApp</h2>
                <AddCategory setCat = {setCat} />
                <hr />
            </header>

            <ol>
                {
                    cat.map( (category) =>{
                        return <li key={category}> {category} </li>
                    } )
                }
            </ol>

        </div>
    );
}

