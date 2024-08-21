
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import OrderCard from '../components/Order/OrderCard';
import useOrder from '../hooks/useOrder';

const OrderScreen = () => {
    const {orders} = useOrder();
    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            {orders.length === 0 ? (
                <div className="h-screen">
                    <h1 className="text-5xl poppins text-center text-purple-600">No Order added!!!</h1>
                </div>
            ) : (
                <>
                        <Bounce>
                            <div className="flex flex-col items-center space-x-2 pb-8">
                                <h1 className="text-gray-700 poppins text-3xl">All <span className="text-purple-600 font-semibold select-none">Orders</span></h1>
                                <div className="bg-purple-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                            </div>
                        </Bounce>
                        <div className="flex justify-center">
                            <div className="flex flex-col space-y-4">
                                {orders.map(item => (
                                    <OrderCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                </>
            )}
            
        </section>
    )
}

export default OrderScreen;
