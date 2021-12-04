import React, {useState} from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () =>{
    // const cat = ['Guard', 'Shooting guard', 'Center'];

    const [cat, setCategories] = useState(['Guard', 'Shooting guard', 'Center'])

    // const handleAdd = () =>{
    //     setCategories([...cat, 'Forward']);
    // }

    return(
        <div>
            <header>
                <h2 className="title">GifExpertApp</h2>
                <AddCategory />
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