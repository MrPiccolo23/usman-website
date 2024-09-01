// // import React from 'react';
// // import { Bounce } from 'react-awesome-reveal';
// // import TextField from '../Form/TextField';

// // const ContactForm = () => {
// //     const Inputs = [
// //         { id: 1, type: "text", placeholder: "Full Name" },
// //         { id: 2, type: "email", placeholder: "Email" },
// //         { id: 3, type: "number", placeholder: "Phone Number" },
// //     ];

// //     return (
// //         <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => e.preventDefault()}>
// //             <div className="flex flex-col space-y-6">
// //                 <Bounce cascade>
// //                     {Inputs.map(input => (
// //                         <TextField
// //                             key={input.id}
// //                             type={input.type}
// //                             placeholder={input.placeholder}
// //                             className="w-full px-4 py-3 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
// //                         />
// //                     ))}
// //                 </Bounce>
// //             </div>

// //             <Bounce>
// //                 <div className="mt-6">
// //                     <textarea placeholder="Your Message" className="w-full px-4 py-3 h-36 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"></textarea>
// //                 </div>
// //                 <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 w-36 mt-6 rounded-lg transition duration-300">
// //                     Submit
// //                 </button>
// //             </Bounce>
// //         </form>
// //     );
// // }

// // export default ContactForm;

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

import React, { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import TextField from '../Form/TextField';
import '../../styles/ContactForm.css';  // Import the custom CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
        botField: ''  // Added honeypot field
    });

    const Inputs = [
        { id: 1, type: "text", placeholder: "Full Name", name: "fullName" },
        { id: 2, type: "email", placeholder: "Email", name: "email" },
        { id: 3, type: "number", placeholder: "Phone Number", name: "phoneNumber" },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const inputClass = "w-full px-4 py-3 rounded-lg border-gray-300 custom-input";

    return (
        <form 
            className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
        >
            {/* Hidden input for Netlify to process form */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field - Hidden from users */}
            <input type="hidden" name="bot-field" value={formData.botField} onChange={handleChange} />

            <div className="flex flex-col space-y-6">
                <Bounce cascade>
                    {Inputs.map(input => (
                        <TextField
                            key={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            name={input.name}
                            className={inputClass}
                            value={formData[input.name]}
                            onChange={handleChange}
                            required
                        />
                    ))}
                </Bounce>
            </div>

            <Bounce>
                <div className="mt-6">
                    <textarea 
                        placeholder="Your Messages" 
                        name="message" 
                        className={inputClass + " h-36 resize-none"} 
                        value={formData.message} 
                        onChange={handleChange}
                        required>
                    </textarea>
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 w-36 mt-6 rounded-lg transition duration-300">
                    Submit
                </button>
            </Bounce>
        </form>
    );
}

export default ContactForm;


