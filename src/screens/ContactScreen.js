import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import ContactForm from '../components/Contact/ContactForm';

const ContactScreen = () => {
    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6 overflow-y-hidden">
            <Bounce>
                <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-gray-700 poppins text-3xl">
                        Contact <span className="text-purple-600 font-semibold select-none">Us</span>
                    </h1>
                    <div className="bg-purple-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                </div>
            </Bounce>
            <ContactForm />
        </section>
    );
};

export default ContactScreen;
