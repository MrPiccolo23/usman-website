import React from 'react';
import '../../styles/ContactForm.css';  // Import the custom CSS file

const ContactForm = () => {
    return (
        <div className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeqAcQ5-RYbmep6DW0M6MzQ9aXazGuqe69EammQN4j3nQASgw/viewform?embedded=true"
                className="border-0"  // Remove inline styles for height and other properties
                title="Contact Us Form"
                allowFullScreen
            >
                Loading…
            </iframe>
        </div>
    );
}

export default ContactForm;






