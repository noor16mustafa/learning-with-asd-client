import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from './CourseSummary';
import { Link } from 'react-router-dom';


const Courses = () => {
    const courses = useLoaderData();
    //console.log(courses);
    return (

        <div className='flex  pb-5  bg-slate-400'>

            <div className='flex-auto  sm:p-4 w-1/3 bg-green-300 lg:m-0'>
                <h2 className='text-2xl lg:text-4xl font-bold text-yellow-600 italic text-center p-4'>Our Course Outline</h2>
                {
                    courses.map(course => <button key={course.id} className="mb-4 btn btn-secondary btn-block sm:btn-lg  lg:btn-lg"><Link to={`/course/${course.id}`}>{course.name}</Link></button>)
                }

            </div>
            <div className='flex-auto  sm:m-0 w-2/3   lg:m-8 '>
                <div className='grid grid-cols-1 sm:m-0 lg:grid-cols-2  gap-7 m-8'>
                    {
                        courses.map(courseSum => <CourseSummary key={courseSum.id}
                            courseSum={courseSum}></CourseSummary>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Courses;