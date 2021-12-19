// import React,{useEffect,useState} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import { ImageList } from './ImageList';
// import { getGifs } from '../helpers/get';



export const CategoryGrid = ({category}) => {

    
    const {data:images,loading}=useFetchGifs(category);
    
    // const [images, setimages] = useState([]);



    // useEffect(() => {
    //   getGifs(category)
    //   .then(images=>setimages(images));
    // }, [category])

   

    return (
        <>
                <h3 className='animate__animated animate__fadeIn'>{category}</h3>

                { loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid '>
                {
                    images.map(image=>(
                         <ImageList 
                         key={image.id}
                         {...image}
                         />
                    ))
                }
            </div>
        </>
    )
}
