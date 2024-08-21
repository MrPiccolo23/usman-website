
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            <Heading title="Products" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.map(product => (
                    <Bounce key={product.id}>
                        <Product {...product} />
                    </Bounce>
                ))}
            </div>
        </section>
    )
}

export default ProductsScreen;
