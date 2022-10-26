import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import jsPDF from 'jspdf';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { id, name, img, details, price } = courseDetails;
    console.log(courseDetails);

    const generatePdf = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                pdf.save("course.pdf");
            }
        });
    }

    return (
        <div className='bg-slate-300 pt-6 pb-10'>
            <div className="card w-3/4 bg-base-100 shadow-xl m-auto mt-8">
                <div className="card-body items-center text-center">

                    <button onClick={generatePdf} className="btn btn-outline btn-accent"><FaArrowAltCircleDown style={{ width: '30px', height: '30px', paddingRight: "2px" }}></FaArrowAltCircleDown>Download</button>
                    <h2 className="card-title font-extrabold text-4xl text-yellow-500">{name}</h2>
                </div>

                <figure className="px-20 pt-6">
                    <img src={img} alt="" className="rounded-xl w-full" />
                </figure>
                <div id='content' style={{
                    width: '700px',

                    marginLeft: 'auto',
                    marginRight: 'auto'
                }} className="card-body items-center text-center">

                    <p className='text-lg'>{details}</p>
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