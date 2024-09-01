
// import React from 'react';
// import { Bounce } from 'react-awesome-reveal';
// import TextField from '../Form/TextField';
// import '../../styles/ContactForm.css';  // Import the custom CSS file

// const ContactForm = () => {
//     const Inputs = [
//         { id: 1, type: "text", placeholder: "Full Name" },
//         { id: 2, type: "email", placeholder: "Email" },
//         { id: 3, type: "number", placeholder: "Phone Number" },
//     ];

//     // Apply the custom-input class
//     const inputClass = "w-full px-4 py-3 rounded-lg border-gray-300 custom-input";

//     return (
//         <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => e.preventDefault()}>
//             <div className="flex flex-col space-y-6">
//                 <Bounce cascade>
//                     {Inputs.map(input => (
//                         <TextField
//                             key={input.id}
//                             type={input.type}
//                             placeholder={input.placeholder}
//                             className={inputClass}
//                         />
//                     ))}
//                 </Bounce>
//             </div>

//             <Bounce>
//                 <div className="mt-6">
//                     <textarea placeholder="Your Message" className={inputClass + " h-36 resize-none"}></textarea>
//                 </div>
//                 <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 w-36 mt-6 rounded-lg transition duration-300">
//                     Submit
//                 </button>
//             </Bounce>
//         </form>
//     );
// }

// export default ContactForm;

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






