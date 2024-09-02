
// import React from 'react';
// import { BsArrowLeft } from 'react-icons/bs';
// import { Fade } from 'react-awesome-reveal';
// import { Link, useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';

// const ServicesDetailScreen = () => {
//     const { title } = useParams();
//     const [data] = useFetch('services');

//     const decodedTitle = decodeURIComponent(title);

//     return (
//         <section className="max-w-screen-xl py-24 mx-auto px-6">
//             {data.filter(item => item.title === decodedTitle).map(service => (
//                 <div key={service.id} className="shadow-lg p-6 box-border">
//                     <Fade direction="left">
//                         <img className="w-full h-96 mx-auto object-cover rounded-lg" src={service.image} alt="coverimg" />
//                     </Fade>
//                     <Fade direction="left">
//                         <div className="flex flex-col md:flex-row lg:flex-row  justify-center items-center space-x-3 py-4">
//                             <img className="w-12 mt-4" src={service.icon} alt="icon" />
//                             <h1 className="text-gray-600 poppins text-3xl text-center pt-3">{service.title}</h1>
//                         </div>
//                         <p className="text-gray-500 text-justify">{service.description}</p>
//                     </Fade>
//                     <Link to="/" className="pt-4 text-purple-500 text-sm hover:underline flex items-center space-x-3"><BsArrowLeft /> <span>Back</span></Link>
//                 </div>
//             ))}
//         </section>
//     )
// }

// export default ServicesDetailScreen;

import React, { useState } from 'react';
import { BsArrowLeft, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// AccordionItem component for the FAQ section
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button 
            onClick={onClick} 
            className="w-full text-left flex justify-between items-center py-3 px-4 focus:outline-none"
        >
            <span className="font-semibold text-gray-600">{question}</span>
            {isOpen ? <BsChevronUp className="text-gray-600" /> : <BsChevronDown className="text-gray-600" />}
        </button>
        {isOpen && <p className="text-gray-500 px-4 pb-3">{answer}</p>}
    </div>
);

const ServicesDetailScreen = () => {
    const { title } = useParams();
    const [data] = useFetch('services');
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const decodedTitle = decodeURIComponent(title);

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            {data.filter(item => item.title === decodedTitle).map(service => (
                <div key={service.id} className="shadow-lg p-6 box-border">
                    <Fade direction="left">
                        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center space-x-3 py-4">
                            <img className="w-12 mt-4" src={service.icon} alt="icon" />
                            <h1 className="text-gray-600 poppins text-3xl text-center pt-3">{service.title}</h1>
                        </div>
                        <p className="text-gray-500 text-justify">{service.description}</p>

                        {/* Summary for 'Medical questionnaire' */}
                        {service.title === 'Medical questionnaire' && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-center mb-4">Summary of the Questionnaire</h2>
                                <p className="text-gray-500 text-justify">
                                    You can find the health and weight loss questionnaire in Products {'>'} click the 'view' button for your preferred medicine {'>'} click the 'request treatment' button to start the questionnaire.
                                    <br/><br/>
                                    The questionnaire includes:
                                    <ul className="list-disc pl-5">
                                        <li>Questions about your current use of weight loss medication.</li>
                                        <li>Preference for the type of treatment (injections or tablets/capsules).</li>
                                        <li>Details about your medical history, such as diabetes, high blood pressure, and high cholesterol.</li>
                                        <li>Your personal details like height, weight, and allergies.</li>
                                        <li>Your GP's contact details.</li>
                                    </ul>
                                    Once you've completed the questionnaire, our pharmacist will review your responses and contact you for the next steps.
                                </p>
                            </div>
                        )}

                        {/* Collection and Delivery for 'Discreet collection & delivery' */}
                        {service.title === 'Discreet collection & delivery' && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-center mb-4">Collection from Pharmacy</h2>
                                <p className="text-gray-500 text-justify mb-4">
                                    Collect your weight loss medication from the closest pharmacy to you.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">St Helens, Merseyside</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/st-helens-pharmacy/FKH72" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">St Helens Pharmacy (130 Duke Street)</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/four-acre-chemist/FGJ61" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Four Acre Chemist</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/clarks-pharmacy/FRR24" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Clarks Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/fingerpost-pharmacy/FGJ47" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Fingerpost Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/atlas-pharmacy/FPR30" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Atlas Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/four-acre-chemist/FGJ61" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Four Acre Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/rainbow-pharmacy/FAF84" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Rainbow Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/ashtons-pharmacy/FNC54" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Ashtons Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Blackley, Manchester</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/blackley-pharmacy/FM512" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Blackley Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/mediward-pharmacy/FK824" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Mediward Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Lytham, Lancashire</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/tomlinsons-chemist/FPH13" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Tomlinsons Chemist</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Ditton, Widnes</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/ditton-pharmacy/FVE45" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Ditton Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Northwich, Cheshire</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/hoggs-chemist/FXR69" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Hoggs Chemist</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Liverpool, Merseyside</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/stephens-pharmacy/FKJ51" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Stephens Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Yorkshire</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/ash-grove-pharmacy/FA513" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Ash Grove Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/hill-top-pharmacy/FP630" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Hill Top Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/eggborough-pharmacy/FTG24" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Eggborough Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Ellesmere Port, Cheshire</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/sutton-pharmacy/FJR60" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Sutton Pharmacy</a></li>
                                        <li><a href="https://www.nhs.uk/services/pharmacy/great-sutton-pharmacy/FNJ85" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Great Sutton Pharmacy</a></li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">Burscough, West Lancs</h3>
                                    <ul className="list-disc pl-5">
                                        <li><a href="https://www.nhs.uk/services/pharmacy/fishlocks-pharmacy/FHG54" className="text-purple-500 underline" target="_blank" rel="noopener noreferrer">Fishlocks Pharmacy</a></li>
                                    </ul>
                                </div>
                                
                                <h2 className="text-2xl font-semibold text-center mb-4">Royal Mail Delivery Services</h2>
                                <p className="text-gray-500 text-justify">
                                    Any deliveries are subject to you answering our health and weight loss questionnaire, having a consultation with our pharmacist, and confirmation of payment for your selected medicine.<br/><br/>
                                    
                                    <strong>Next day delivery including refrigerated items (£3.50)</strong><br/>
                                    Your delivery will arrive the next working day when you place your order before 3pm on Monday to Friday.<br/><br/>
                                    
                                    <strong>Next day express delivery including refrigerated products (£7.00)</strong><br/>
                                    Your delivery will arrive the next day before 1pm when you place your order before 3pm Monday to Friday. This service includes Saturday delivery.<br/><br/>
                                    
                                    For refrigerated items, ensure someone is available to receive the delivery and ensure the item is placed in a refrigerator immediately. We cannot offer refunds for items that became unusable due to failed delivery attempts.
                                </p>
                            </div>
                        )}
                                          {/* Tables for 'Weight loss support' */}
                                          {service.title === 'Weight loss support' && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-center mb-4">Mounjaro® vs other weight loss treatments</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead>
                                            <tr className="bg-gray-100 text-center font-bold">
                                                <th className="px-6 py-3">Name</th>
                                                <th className="px-6 py-3">Mounjaro®</th>
                                                <th className="px-6 py-3">Wegovy®</th>
                                                <th className="px-6 py-3">Victoza®</th>
                                                <th className="px-6 py-3">Orlistat</th>
                                                <th className="px-6 py-3">Mysimba</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-6 py-4 font-semibold">Active ingredient</td>
                                                <td className="px-6 py-4">Tirzepatide</td>
                                                <td className="px-6 py-4">Semaglutide</td>
                                                <td className="px-6 py-4">Liraglutide</td>
                                                <td className="px-6 py-4">Orlistat</td>
                                                <td className="px-6 py-4">Bupropion-Naltrexone</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-semibold">Type of treatment</td>
                                                <td className="px-6 py-4">Weight loss injection</td>
                                                <td className="px-6 py-4">Weight loss injection</td>
                                                <td className="px-6 py-4">Weight loss injection</td>
                                                <td className="px-6 py-4">Weight loss capsule</td>
                                                <td className="px-6 py-4">Weight loss capsule</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-semibold">How to take it</td>
                                                <td className="px-6 py-4">Weekly injection</td>
                                                <td className="px-6 py-4">Weekly injection</td>
                                                <td className="px-6 py-4">Daily injection</td>
                                                <td className="px-6 py-4">Up to three daily tablets</td>
                                                <td className="px-6 py-4">Twice daily</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-semibold">How it works</td>
                                                <td className="px-6 py-4">Reduces/regulates appetite</td>
                                                <td className="px-6 py-4">Reduces/regulates appetite</td>
                                                <td className="px-6 py-4">Reduces/regulates appetite</td>
                                                <td className="px-6 py-4">Reduces fat absorption</td>
                                                <td className="px-6 py-4">Reduces/regulates appetite</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

                                <table className="mt-8 w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left">Weight loss medication</th>
                                            <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-6 py-4">Mounjaro</td>
                                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="nofollow noreferrer noopener" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4">Wegovy</td>
                                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="nofollow noreferrer noopener" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4">Mysimba</td>
                                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="nofollow noreferrer noopener" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4">Orlistat</td>
                                            <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="nofollow noreferrer noopener" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4">Victoza® (Liraglutide)</td>
                                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="nofollow noreferrer noopener" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Accordion for 'Pharmacist review' */}
                        {service.title === 'Pharmacist review' && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-center mb-4">Frequently asked questions before starting weight loss treatment</h2>
                                <div className="border border-gray-200 rounded-lg">
                                    {[
                                        {
                                            question: "Do I qualify for weight loss injections and pills?",
                                            answer: `
                                                Weight loss treatments are made for people with high BMIs. Maintaining a healthy weight for you is important, and weight loss injections or pills may help you achieve this.<br><br>
                                                Here at Online Doctor, we currently offer Mounjaro®, Wegovy®, Mysimba, Orlistat and Victoza®(Liraglutide).<br><br>
                                                <ul className="list-disc pl-5">
                                                    <li>Mounjaro®, Wegovy® and Victoza®(Liraglutide) are suitable for people with a BMI of over 30 (or 27-30 if you have a risk factor).</li>
                                                    <li>Orlistat and Mysimba can be prescribed for people with a BMI of over 30 (or 28 if you have a risk factor such as high blood pressure).</li>
                                                </ul><br>
                                                To check that you qualify for treatment, we'll ask about other medicines you're taking, and any conditions you have. The online questionnaire is completely confidential, and we'll use the information to ensure the treatment you have requested is safe to take.<br><br>
                                                To get started simply head to our Products page, click on the view button to your preferred medicine then click on request treatment to start the questionnaire.<br><br>
                                                After the questionnaire, our qualified pharmacist will contact you with a consultation by online video call or by phone.<br><br>
                                                Before we can prescribe any weight loss medication for you:<br><br>
                                                <ul className="list-disc pl-5">
                                                    <li>We'll need to check your ID and weight.</li>
                                                    <li>You need to ensure that your name on your ID matches the name on your Patient Record, otherwise your treatment can't begin.</li>
                                                </ul>`
                                        },
                                        {
                                            question: "Injection pens or capsule tablets: which are best for weight loss?",
                                            answer: `
                                                Injections (pens) like Mounjaro® or Wegovy® and tablets such as Orlistat can help with weight loss when used alongside regular exercise and a balanced diet. While tablets can help you lose weight by blocking the fat you eat from being digested, injections may be more effective for long-term weight loss as they stop you feeling hungry.<br><br>
                                                These treatments work in different ways and can cause side effects. So, which one you use depends on:<br><br>
                                                <ul className="list-disc pl-5">
                                                    <li>Qualifying for treatment</li>
                                                    <li>Your BMI</li>
                                                    <li>Any health conditions you have</li>
                                                    <li>Your weight loss goals</li>
                                                    <li>How comfortable you feel with any risks or side effects</li>
                                                    <li>Whether you have needle phobia</li>
                                                </ul><br>
                                                There’s a lot to consider when starting weight loss treatment, our clinicians are here to help.`
                                        },
                                        {
                                            question: "How do weight loss injections work?",
                                            answer: `Mounjaro®, Wegovy® and Victoza®(Liraglutide) are the weight loss injections (pens) that we offer. They work by suppressing your appetite, which means they make you feel less hungry and fuller quicker.`
                                        },
                                        {
                                            question: "How do weight loss pills work?",
                                            answer: `Mysimba and Orlistat (which both have the same active ingredient, orlistat, so they work in the same way) are prescribed as a tablet. They work by blocking up to a third of the fat in the food you eat from being absorbed into your system.`
                                        },
                                        {
                                            question: "Weight loss treatments and weight management?",
                                            answer: `The goal with weight management should be to reach a healthy weight for your height and build, and to maintain it. Achieving sustainable results and staying at your goal weight is best done by making adjustments to your lifestyle, being more active and eating a balanced diet. However, it is possible that prescription weight loss treatments can help you reach your goal weight. If you have any concerns about sudden weight gain, you should see your GP for advice.`
                                        },
                                        {
                                            question: "Doctor's weight loss advice?",
                                            answer: `How you feel about your weight is very personal. Many people do not need to be concerned about their weight, as they aren’t in immediate danger of health issues.<br><br>
                                            Medically speaking, you are 'overweight' if you have a BMI of more than 25. So, you might be advised by your GP to make lifestyle changes to try and lose weight.<br><br>
                                            You can use this NHS tool to calculate your BMI.`
                                        },
                                        {
                                            question: "What are the health benefits of losing weight?",
                                            answer: `If you’re looking to lose weight because you have a high BMI, you may be at higher risk of diabetes, heart disease, stroke, and cancer. Reaching a healthy weight can lower your risk of experiencing these serious health issues.<br><br>
                                            If you’re living with asthma or erectile dysfunction, weight loss can improve your symptoms. Some people find that reaching a healthy weight improves self-confidence and mental health. It can also make some activities more enjoyable as the strain on their joints is reduced as well.`
                                        },
                                        {
                                            question: "Diets and long-term weight maintenance?",
                                            answer: `Make changes to your lifestyle that you can stick to, and you will find maintaining a healthy weight easier. Fad diets tend to make your weight drop dramatically and then rise again, so avoid these. Instead, try to eat more whole fruits, vegetables, whole grains, and lean protein while increasing your activity level. Walk more, join a local sports team, or swim regularly. The occasional sugary treat is fine, but make sure it's occasional and part of a balanced diet.`
                                        },
                                        {
                                            question: "Our weight loss clinic?",
                                            answer: `We can prescribe Orlistat, Xenical, Mounjaro®, Wegovy®, and Saxenda® online. Simply request the treatment you'd like and complete the medical consultation. We’ll use this information to ensure that the treatment is safe and suitable for you.`
                                        },
                                    ].map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            question={item.question}
                                            answer={<span dangerouslySetInnerHTML={{ __html: item.answer }} />}
                                            isOpen={openIndex === index}
                                            onClick={() => handleToggle(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                    </Fade>
                    <Link to="/" className="pt-4 text-purple-500 text-sm hover:underline flex items-center space-x-3"><BsArrowLeft /> <span>Back</span></Link>
                </div>
            ))}
        </section>
    );
};

export default ServicesDetailScreen;






