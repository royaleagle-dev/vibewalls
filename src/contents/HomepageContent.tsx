import {useState, useEffect } from 'react';
import React from 'react';
import apiBase from '../apiBase';

interface RandomImage{
    image_link: string;
}

export default function HomepageContent() {
    
    const [randomImage, setRandomImage] = useState<RandomImage>({
        image_link: '',
    });
    
    useEffect(() => {    
        const fetchRandomImage = async() => {
            try{
                const api = apiBase;
                const response = await api.get('/index/getRandom');
                setRandomImage(response.data.data);
                console.log(response.data.data);
                
            }catch(error){
                console.error('Error fetching Data')
            }
        }
        fetchRandomImage();
        //api.post('/posts', {title: 'New Post'});
    }, [])


    return (
        <div>
            <section 
            id="welcome" 
            className="montserrat bg-gray-100 relative text-black py-16 px-5 md:px-20 flex gap-10 items-center justify-center flex-col md:flex-row"
            style={{
                background: randomImage.image_link
                ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${randomImage.image_link})`
                : `linear-gradient(45deg, #667eea, #764ba2)`
            }}
            >
                <div className="md:w-3/4 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Beautiful Wallpapers</h1>
                    <p className="text-lg mb-6 mx-auto max-w-[80%]">Free wallpapers for desktop, mobile, and tablet. Transform your screens with stunning visuals from our curated collection.</p>
                </div>
            </section>
        </div>
    )
}

//export default HomepageContent