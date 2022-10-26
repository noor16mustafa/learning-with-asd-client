import React from 'react';
import { Link } from 'react-router-dom';


const CourseSummary = ({ courseSum }) => {
    const { id, name, img, enrolled } = courseSum;
    return (

        <div>
            <div className="card w-auto lg:w-96 glass">
                <figure><img className='w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold text-purple-800">{name}</h2>


                    <p className='p-2 font-bold text-2xl'>Enrolled: <span className='text-yellow-600'>{enrolled}</span></p>


                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">
                            <Link to={`/course/${id}`} >Learn more!</Link></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseSummary;