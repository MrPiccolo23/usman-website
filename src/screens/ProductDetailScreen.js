import React from 'react';  // Removed useState since it's not used
import { BsArrowLeft } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDetailScreen = () => {
    const { title } = useParams();
    const [data] = useFetch('products');

    const product = data.find(item => item.title === title);

    // Google Form URL
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWMnag7FtT4KzUvjAmJTVMSkL3vu0iEkTptdw_WLx-nhNfPw/viewform";

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6 overflow-y-hidden">
            <div className="flex flex-col justify-center items-center pt-24">
                {product && (
                    <div className="p-6 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div>
                            <Fade left>
                                <img className="w-full h-full mx-auto object-cover rounded-lg" src={product.image} alt="coverimg" />
                            </Fade>
                        </div>
                        <div className="flex flex-col justify-center h-full">
                            <Fade left>
                                <div className="border-b border-gray-400 pb-4">
                                    <h1 className="poppins text-gray-800 text-3xl">{product.title}</h1>
                                    <p className=" text-gray-400 my-4">{product.description}</p>
                                </div>
                                <div className="py-6">
                                    {product.priceOptions && product.priceOptions.length > 0 ? (
                                        product.priceOptions.map(option => (
                                            <div key={option.dosage} className="flex justify-between items-center py-2">
                                                <span className="text-gray-900 poppins">{option.dosage} </span>
                                                <span className="font-bold poppins text-gray-900">£{option.price.toFixed(2)}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <h2 className="text-center font-bold poppins text-1xl">
                                            <span className="text-purple-500">Out of stock.</span>
                                        </h2>
                                    )}
                                </div>
                                <button
                                    disabled={!product.inStock}
                                    className={` ${!product.inStock ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"} w-36 btn-primary py-3 px-4 poppins text-sm flex items-center space-x-3 text-center justify-center`}
                                    onClick={() => {
                                        if (product.inStock) {
                                            window.open(googleFormUrl, '_blank');
                                        }
                                    }}
                                >
                                    <span>Request Treatment</span>
                                </button>
                            </Fade>
                        </div>
                        <Link to="/products" className="pt-4 text-purple-500 text-sm hover:underline flex items-center space-x-3">
                            <BsArrowLeft /> <span>Back</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductDetailScreen;


