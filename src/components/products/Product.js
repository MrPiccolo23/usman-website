import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';

const Product = (props) => {
    const { title, image, description, priceOptions, inStock } = props;
    const history = useHistory();

    // Determine the minimum price to display if the product is in stock
    const minPrice = priceOptions && priceOptions.length > 0 
        ? Math.min(...priceOptions.map(option => option.price)) 
        : null;

    return (
        <div className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl">
            <img className="w-full h-72 object-cover" src={image} alt={title} />
            <h1 className="text-gray-600 poppins text-lg text-center">{title}</h1>
            <p className="text-gray-500 text-center flex-grow">{description.slice(0, 70)}</p>

            {/* Price or Out of Stock Indicator */}
            <h2 className="text-center font-bold poppins text-1xl">
                {inStock ? (
                    <>
                        <span className="text-purple-500">In stock.</span>{' '}
                        <span className="text-gray-900">Prices from £{minPrice && minPrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="text-purple-500">Out of Stock</span>
                )}
            </h2>

            {/* View Button */}
            <div className="flex items-center space-x-3">
                <Button
                    className="bg-purple-500 hover:bg-purple-600 w-36 btn-primary py-3 px-2 poppins text-sm"
                    text="View"
                    onClick={() => history.push(`/products/${title}`)}
                />
            </div>
        </div>
    );
};

export default Product;

