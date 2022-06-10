import React, {useState, useEffect} from 'react'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const {data:imgs, loading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {loading && <p>Loading...</p>}
        <div className="card-grid">
            {imgs.map(img => (
                <GifGridItem key={img.id} {...img}/>
            ))}
        </div>
    </>
  )
} 

export default GifGrid;