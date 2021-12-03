import React, {useState} from 'react';

export const GifExpertApp = () =>{
    // const cat = ['Guard', 'Shooting guard', 'Center'];

    const [cat, setCategories] = useState(['Guard', 'Shooting guard', 'Center'])

    const handleAdd = () =>{
        setCategories([...cat, 'Forward']);
    }

    return(
        <div>
            <header>
                <h2>GifExpertApp</h2>
                <hr />
            </header>

            <button onClick = { handleAdd }>Agregar</button>

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