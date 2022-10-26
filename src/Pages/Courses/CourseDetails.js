import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { id, name, img, details, price } = courseDetails;
    console.log(courseDetails);
    return (
        <div className='bg-slate-300 pt-6 pb-10'>
            <div className="card w-3/4 bg-base-100 shadow-xl m-auto mt-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold text-4xl text-yellow-500">{name}</h2>
                    <button className="btn btn-outline btn-accent"><FaArrowAltCircleDown style={{ width: '30px', height: '30px', paddingRight: "2px" }}></FaArrowAltCircleDown>Download</button>
                </div>

                <figure className="px-20 pt-6">
                    <img src={img} alt="" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">

                    <p className='text-xl'>{details}</p>
                    <div>
                        <h2 className='text-2xl font-bold'>Price: <span className='text-red-600 text-4xl font-extrabold'>$ {price}</span></h2>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;