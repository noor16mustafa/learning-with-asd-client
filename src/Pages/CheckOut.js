import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkout = useLoaderData();
    return (
        <div >
            <div className="card w-96 bg-primary text-primary-content m-auto mt-20">
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-4xl text-yellow-500">{checkout.name}</h2>
                    <p>Thanks For Your Premium Access...!!</p>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;