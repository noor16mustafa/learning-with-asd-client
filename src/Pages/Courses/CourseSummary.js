import React from 'react';

const CourseSummary = ({ course }) => {
    const { id, name, img, details, } = course;
    return (
        <div className='flex m-8 pb-5'>
            <div className='flex-auto w-1/3 '>
                <div>
                    <button className="btn btn-secondary btn-block sm:btn-block md:btn-md lg:btn-lg">{name}</button>
                </div>
            </div>
            <div className='flex-auto w-2/3 '>
                <div className=' '>
                    <h2>grid</h2>

                </div>
            </div>

        </div>

    );
};

export default CourseSummary;