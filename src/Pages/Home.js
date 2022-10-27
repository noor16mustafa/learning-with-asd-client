import React from 'react';



const Home = () => {
    return (
        <div>


            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/8709543/pexels-photo-8709543.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Edu For Autism Spectrum Disorder Children</h1>
                        <p className="mb-5">This side is made for Disorder Children who can also gain knowledge and Education but in little different way.</p>

                    </div>
                </div>
            </div>
            <div className='m-auto text-center my-20 w-2/5'>
                <h1 className='text-5xl font-bold text-yellow-500 text-center mt-14'>About Us</h1>
                <p className='text-lg'>We design our courses for special children which are different from other child. They need special care and someone who can understand them.They can earn knowledge more effectively then normal child because of their sharp thinking.But the ability is differ in different case.  </p>
            </div>


        </div>
    );
};

export default Home;