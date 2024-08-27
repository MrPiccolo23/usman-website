
import React from 'react';

const Testimonial = ({ username, review }) => {
    return (
        <div className="container px-5 py-12 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center bg-gray-50 p-4 shadow-lg">
                <img className="w-12 mx-auto mb-4" src="../../../assets/right-quote-sign.png" alt="quotes" />
                <p className="leading-relaxed poppins text-gray-500">{review}</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-600 mt-8 mb-6"></span>
                <div className="flex justify-center items-center space-x-3">
                    <h2 className="text-gray-900 font-medium poppins tracking-wider text-sm">{username}</h2>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
