import React from 'react';
import image1 from '../assets/pic1.jpg';

const Home = () => {
    return (
        <div>
            <div className='w-full h-screen bg-no-repeat bg-cover bg-fixed relative'>

                <img src={image1} alt="" className='w-full h-full  absolute' />
                <div className='absolute text-center grid place-items-center m-8 p-24'>
                    <h1 className='text-purple-700 text-6xl font-bold'>Edu For Autism Spectrum Disorder Children </h1>
                    <h2 className='text-black h-9 w-1/2 text-3xl font-bold'>This side is made for Disorder Children who can also gain knowledge and Education but in little different way.</h2>
                </div>

            </div>
            <div className='w-full h-96 bg-black'>

            </div>
        </div>
    );
};

export default Home;