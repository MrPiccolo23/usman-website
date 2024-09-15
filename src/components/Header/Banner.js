
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';

const Banner = () => {
    const history = useHistory();

    return (
        <section className="max-w-screen-xl py-20 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-12">
                <Fade direction="left">
                    <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">
                        <div className="flex flex-col space-y-2">
                            <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">Best Quality <br /> <span className="text-5xl">Weight Loss Treatments</span></h1>
                            <p className="text-gray-500 text-light text-sm">With St Helens Online Pharmacy, you get more than just weight loss medication. Start or continue your weight loss journey and get prescription weight loss treatment, including weight loss injections and tablets, ongoing pharmacist care and guidance.<br/> Welcome to our shop.</p>
                        </div>
                        <Button className="bg-purple-500 hover:bg-purple-600 btn-primary py-3 px-4 poppins w-48 mt-6" text="Explore our shop" onClick={() => history.push('/products')} />
                    </div>
                </Fade>

                <Fade direction="right">
                    <div className="order-1 lg:order-2">
                        <img src="../../../assets/banner/banner.webp" alt="banner" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Banner;
