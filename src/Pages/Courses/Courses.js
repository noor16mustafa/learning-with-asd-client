import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from './CourseSummary';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="h-full bg-teal-100">
            <h2 className='text-4xl font-bold text-yellow-600 italic text-center pt-4'>Our Course Outline</h2>
            {
                courses.map(course => <CourseSummary
                    key={course.id}
                    course={course}></CourseSummary>)
            }
        </div>
    );
};

export default Courses;