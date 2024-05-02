import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

  
    async function fetchData(tag) {
      setLoading(true);//Showing loader 
      
      const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);//API call on the basis of value of tag state variable
      const imageSource = data.data.images.downsized_large.url;//fetching the url of random gif from API response
      setGif(imageSource);//updating the value of gif state variable with the value of imageSource constant variable i.e url of random gif
      setLoading(false);//Removing loader and rendering <img> of gif
    }
    
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif
