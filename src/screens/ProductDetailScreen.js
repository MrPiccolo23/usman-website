// import React from 'react'; 
// import { BsArrowLeft } from 'react-icons/bs';
// import { Fade } from 'react-awesome-reveal';
// import { Link, useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';
// import Accordion from '../components/products/Accordion'; // Import the Accordion component

// const ProductDetailScreen = () => {
//   const { title } = useParams();
//   const [data] = useFetch('products');

//   const product = data.find(item => item.title === title);

//   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWMnag7FtT4KzUvjAmJTVMSkL3vu0iEkTptdw_WLx-nhNfPw/viewform";

//   return (
//     <section className="max-w-screen-xl py-24 mx-auto px-6 overflow-y-hidden">
//       <div className="flex flex-col justify-center items-center pt-24">
//         {product && (
//           <div className="p-6 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
//             <div>
//               <Fade direction="left">
//                 <img className="w-full h-full mx-auto object-cover rounded-lg" src={product.image} alt="coverimg" />
//               </Fade>
//             </div>
//             <div className="flex flex-col justify-center h-full">
//               <Fade direction="left">
//                 <div className="border-b border-gray-400 pb-4">
//                   <h1 className="poppins text-gray-800 text-3xl">{product.title}</h1>
//                   <p className="text-gray-400 my-4">{product.description}</p>
//                 </div>

//                 {/* Price Options */}
//                 <div className="py-6">
//                   {product.priceOptions && product.priceOptions.length > 0 ? (
//                     product.priceOptions.map(option => (
//                       <div key={option.dosage} className="flex justify-between items-center py-2">
//                         <span className="text-gray-900 poppins">{option.dosage} </span>
//                         <span className="font-bold poppins text-gray-900">£{option.price.toFixed(2)}</span>
//                       </div>
//                     ))
//                   ) : (
//                     <h2 className="text-center font-bold poppins text-1xl">
//                       <span className="text-purple-500">Out of stock.</span>
//                     </h2>
//                   )}
//                 </div>
//                 <button
//                   disabled={!product.inStock}
//                   className={` ${!product.inStock ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"} w-36 btn-primary py-3 px-4 poppins text-sm flex items-center space-x-3 text-center justify-center`}
//                   onClick={() => {
//                     if (product.inStock) {
//                       window.open(googleFormUrl, '_blank');
//                     }
//                   }}
//                 >
//                   <span>Request Treatment</span>
//                 </button>

//                 {/* Mounjaro Accordion Sections */}
//                 <div className="mt-6">
//                   <Accordion title="1. What is Mounjaro®?">
//                     <p>
//                       Mounjaro® (tirzepatide) is a weekly injection for adults looking to lose weight, particularly those with high body mass indexes (BMIs). It contains tirzepatide as the active ingredient and is also known as Zepbound. Recently approved in the UK for weight loss, Mounjaro® is available on prescription through St Helens Pharmacy Group.
//                     </p>
//                     <p>
//                       To be effective, Mounjaro® should be used alongside a healthy lifestyle, including regular exercise and a reduced-calorie diet.
//                     </p>
//                   </Accordion>

//                   <Accordion title="2. How does Mounjaro® work?">
//                     <p>
//                       The active ingredient, tirzepatide, works by{' '}
//                       <a href="https://www.drugs.com/mounjaro.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         activating two hormones
//                       </a>{' '}
//                       (GIP and GLP-1). These hormones suppress your appetite, help regulate blood sugar, and slow down digestion, all of which support weight loss.
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li><strong>Suppresses appetite:</strong> Mimics natural hormones to reduce hunger.</li>
//                       <li><strong>Regulates blood sugar:</strong> Helps you feel full for longer.</li>
//                       <li><strong>Slows digestion:</strong> Keeps food in your stomach longer, which may lead to eating smaller portions.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="3. Mounjaro® dosage">
//                     <p>
//                       Mounjaro® comes in different doses,{' '}
//                       <a href="https://www.medicines.org.uk/emc/files/pil.15482.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         starting with a 2.5 mg dose
//                       </a>. This increases gradually to help manage side effects.
//                     </p>
//                   </Accordion>

//                   <Accordion title="4. How to use Mounjaro®?">
//                     <p>
//                       Mounjaro® is injected once a week into your stomach, thigh, or upper arm. It’s important to inject it on the same day each week. You can set a reminder to help you remember. Watch this{' '}
//                       <a href="https://uk.lilly.com/diabetes/patient/obesity/mounjaro" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         video
//                       </a>{' '}
//                       for more details on how to inject. Note that alcohol swabs are not provided.
//                     </p>
//                   </Accordion>

//                   <Accordion title="5. How to inject Mounjaro®?">
//                     <p>Here’s a simplified guide to using the Mounjaro® KwikPen:</p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Wash your hands.</li>
//                       <li>Check your pen’s expiry date and make sure the liquid is clear or slightly yellow. Don’t use it if it’s expired, cloudy, discoloured, or contains particles.</li>
//                       <li>Remove the grey base cap.</li>
//                       <li>Clean the red inner seal with a swab.</li>
//                       <li>Attach a new needle by twisting it onto the pen.</li>
//                       <li>Remove the needle caps.</li>
//                       <li>Turn the dose knob until it clicks twice and shows the correct dose in the window.</li>
//                       <li>Hold the pen with the needle pointing up and release a small amount of medicine into the air to prime it.</li>
//                       <li>Choose an injection site on your lower stomach, thigh, or upper arm, rotating the site each time.</li>
//                       <li>Press the button on the pen for 10 seconds until you hear two clicks, indicating the injection is complete.</li>
//                       <li>Remove the needle and, if necessary, apply light pressure to the site.</li>
//                       <li>Dispose of the needle in a sharps bin and replace the pen cap.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="6. Who can use Mounjaro®?">
//                     <p>Mounjaro® is suitable for:</p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Adults with a BMI of 30 or above</li>
//                       <li>Adults with a BMI of 27 or above who have weight-related health issues, such as heart disease, stroke, or sleep apnoea</li>
//                     </ul>
//                     <p>
//                       It should not be used if you’re allergic to any of the ingredients. Your pharmacist will assess whether Mounjaro® is safe for you, especially if you:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Have digestion problems</li>
//                       <li>Have had pancreatitis</li>
//                       <li>Have eye issues</li>
//                       <li>Take diabetes medication</li>
//                       <li>Are under 18 years old</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="7. What are the side effects of Mounjaro®?">
//                     <p>
//                       Like all medications, Mounjaro® can cause side effects, though many improve as your body adjusts. Side effects tend to occur when increasing the dose.
//                     </p>
//                     <p className="mt-2"><strong>Common side effects</strong> (affecting more than 1 in 10 people) include:</p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Nausea or vomiting</li>
//                       <li>Diarrhoea or constipation</li>
//                       <li>Skin reactions at the injection site</li>
//                       <li>Dizziness</li>
//                       <li>Decreased appetite</li>
//                       <li>Stomach pain, bloating, or indigestion</li>
//                       <li>Lower blood pressure</li>
//                       <li>Heartburn</li>
//                       <li>Hair loss</li>
//                     </ul>
//                     <p className="mt-2"><strong>Uncommon side effects</strong> include:</p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Gallstones</li>
//                       <li>Pain around the injection site</li>
//                       <li>Raised calcitonin levels (detected by your GP)</li>
//                     </ul>
//                     <p>
//                       These side effects are usually mild and often improve with time, especially after dose adjustments. Learn more from the{' '}
//                       <a href="https://mounjaro.lilly.com/how-to-use-mounjaro#possible-side-effects" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         patient information leaflet
//                       </a>.
//                     </p>
//                   </Accordion>

//                   <Accordion title="8. How effective is Mounjaro®?">
//                     <p>
//                       Results vary, but clinical trials show that people taking the highest dose of Mounjaro® (15 mg) lost up to 21% of their body weight. Around 96% of adults can{' '}
//                       <a href="https://clinicaltrials.gov/study/NCT04184622" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         expect to lose at least 5% of their starting weight
//                       </a>. Combining Mounjaro® with a healthy diet and exercise is key to achieving the best results.
//                     </p>
//                   </Accordion>

//                   <Accordion title="9. What foods should you avoid when taking Mounjaro®?">
//                     <p>
//                       If you experience nausea while using Mounjaro®, it may help to avoid strong-smelling or tasting foods. Instead, opt for bland foods like crackers, rice, or toast. Reducing your{' '}
//                       <a href="https://mounjaro.lilly.com/how-to-use-mounjaro#possible-side-effects" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         intake of fatty foods
//                       </a>{' '}
//                       may also help.
//                     </p>
//                   </Accordion>

//                   <Accordion title="10. Weight loss treatment tables">
//                     <div className="mt-8">
//                       <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr className="bg-gray-100 text-center font-bold">
//                               <th className="px-6 py-3">Name</th>
//                               <th className="px-6 py-3">Mounjaro®</th>
//                               <th className="px-6 py-3">Wegovy®</th>
//                               <th className="px-6 py-3">Victoza®</th>
//                               <th className="px-6 py-3">Orlistat</th>
//                               <th className="px-6 py-3">Mysimba</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Active ingredient</td>
//                               <td className="px-6 py-4">Tirzepatide</td>
//                               <td className="px-6 py-4">Semaglutide</td>
//                               <td className="px-6 py-4">Liraglutide</td>
//                               <td className="px-6 py-4">Orlistat</td>
//                               <td className="px-6 py-4">Bupropion-Naltrexone</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Type of treatment</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How to take it</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Daily injection</td>
//                               <td className="px-6 py-4">Up to three daily tablets</td>
//                               <td className="px-6 py-4">Twice daily</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How it works</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces fat absorption</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>

//                       <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

//                       <table className="mt-8 w-full bg-white border border-gray-200">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="px-6 py-3 text-left">Weight loss medication</th>
//                             <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="px-6 py-4">Mounjaro</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Wegovy</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Mysimba</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Orlistat</td>
//                             <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Victoza® (Liraglutide)</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </Accordion>
//                   </div>
//                                {/* Wegovy Accordion Sections*/}
//                 <div className="mt-6">
//                   <Accordion title="1. What is Wegovy®?">
//                     <p>
//                       Wegovy® is a weight loss drug containing semaglutide, which helps people lose up to{' '}
//                       <a href="https://www.medicines.org.uk/emc/product/13801/smpc" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         15% of their body weight
//                       </a> over 68 weeks. It is injected once a week and works best with a healthy diet and regular exercise. Wegovy® is now approved in the UK after being approved in the USA in 2021.
//                     </p>
//                   </Accordion>

//                   <Accordion title="2. How does Wegovy® work?">
//                     <p>
//                       Wegovy® helps with weight loss by reducing appetite. Its active ingredient, semaglutide, mimics a hormone that regulates hunger, so you feel fuller for longer. This can help you eat less and lose weight.
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li><strong>Starting dose:</strong> 0.25mg weekly, which can be increased after four weeks if tolerated.</li>
//                       <li><strong>Works best with:</strong> Healthy eating and regular exercise.</li>
//                       <li>85% of people lose at least 5% of their weight with Wegovy®.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="3. Where can I get Wegovy®?">
//                     <p>
//                       Wegovy® is only available with a prescription, so you’ll need to consult a healthcare professional to ensure it's the right treatment for you. While you can get over-the-counter medications like Orlistat, Wegovy® requires a prescription.
//                     </p>
//                   </Accordion>

//                   <Accordion title="4. Using our Wegovy® service">
//                     <p>
//                       To request Wegovy®, click the ‘Request Treatment’ button and fill out our questionnaire. We'll assess if Wegovy® is right for you. Note: If you live in Northern Ireland, Wegovy® may be prescribed off-label, as it hasn't been licensed there yet, but we'll ensure it's safe for you.
//                     </p>
//                   </Accordion>

//                   <Accordion title="5. Taking Wegovy®">
//                     <p>
//                       Wegovy® is injected once a week into your stomach, thigh, or upper arm. You can watch this{' '}
//                       <a href="https://www.wegovy.com/taking-wegovy/how-to-use-the-wegovy-pen.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         video
//                       </a> to learn how to inject yourself. The dose may vary depending on where you are in your treatment.
//                     </p>
//                   </Accordion>

//                   <Accordion title="6. How effective is Wegovy®?">
//                     <p>
//                       A{' '}
//                       <a href="https://www.medicines.org.uk/emc/product/13801/smpc" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         68-week study
//                       </a> showed that Wegovy® users who combined it with a healthy diet and exercise experienced:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>85% lost more than 5% of their body weight</li>
//                       <li>66% lost more than 10% of their body weight</li>
//                       <li>48% lost more than 15% of their body weight</li>
//                       <li>30% lost more than 20% of their body weight</li>
//                     </ul>
//                     <p>
//                       In comparison, only{' '}
//                       <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         60% of people lost 5%
//                       </a> with Saxenda®.
//                     </p>
//                   </Accordion>

//                   <Accordion title="7. Weight loss treatment tables">
//                     <div className="mt-8">
//                       <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr className="bg-gray-100 text-center font-bold">
//                               <th className="px-6 py-3">Name</th>
//                               <th className="px-6 py-3">Mounjaro®</th>
//                               <th className="px-6 py-3">Wegovy®</th>
//                               <th className="px-6 py-3">Victoza®</th>
//                               <th className="px-6 py-3">Orlistat</th>
//                               <th className="px-6 py-3">Mysimba</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Active ingredient</td>
//                               <td className="px-6 py-4">Tirzepatide</td>
//                               <td className="px-6 py-4">Semaglutide</td>
//                               <td className="px-6 py-4">Liraglutide</td>
//                               <td className="px-6 py-4">Orlistat</td>
//                               <td className="px-6 py-4">Bupropion-Naltrexone</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Type of treatment</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How to take it</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Daily injection</td>
//                               <td className="px-6 py-4">Up to three daily tablets</td>
//                               <td className="px-6 py-4">Twice daily</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How it works</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces fat absorption</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>

//                       <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

//                       <table className="mt-8 w-full bg-white border border-gray-200">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="px-6 py-3 text-left">Weight loss medication</th>
//                             <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="px-6 py-4">Mounjaro</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Wegovy</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Mysimba</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Orlistat</td>
//                             <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Victoza® (Liraglutide)</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </Accordion>
//                 </div>
//                  {/* Mysimba Accordion Sections */}
//                  <div className="mt-6">
//                   <Accordion title="1. What is Mysimba?">
//                     <p>
//                       Mysimba is a weight loss pill that contains two active ingredients: naltrexone and bupropion. These help support weight loss by reducing appetite and increasing energy use. You take up to four tablets daily, increasing the dosage over the first four weeks.
//                     </p>
//                   </Accordion>

//                   <Accordion title="2. What is Mysimba used for?">
//                     <p>
//                       Mysimba is prescribed for weight loss in adults who are overweight (BMI over 30) or those with a BMI over 27 with weight-related health conditions like high blood pressure or cholesterol. A healthcare professional will assess if it’s right for you.
//                     </p>
//                   </Accordion>

//                   <Accordion title="3. How does Mysimba work?">
//                     <p>
//                       Mysimba helps with weight loss by reducing appetite and increasing energy usage. It works best when combined with a healthy diet and exercise plan.
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Reduces appetite, making it easier to stick to a diet.</li>
//                       <li>Increases energy usage, helping to speed up weight loss.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="4. What are the ingredients in Mysimba?">
//                     <p>
//                       Mysimba contains two active ingredients: naltrexone and bupropion. Both help support weight loss by reducing appetite and boosting energy use.
//                     </p>
//                   </Accordion>

//                   <Accordion title="5. How to buy Mysimba online?">
//                     <p>
//                       You can request Mysimba online by clicking the ‘Request Treatment’ button and completing a healthcare questionnaire. This allows us to assess if Mysimba is the right treatment for you.
//                     </p>
//                   </Accordion>

//                   <Accordion title="6. How to take Mysimba?">
//                     <p>
//                       Mysimba tablets should be swallowed whole, without crushing or cutting them. Use water to help you swallow if needed. Always follow the instructions provided by your healthcare professional.
//                     </p>
//                   </Accordion>

//                   <Accordion title="7. What is the recommended Mysimba dosage?">
//                     <p>
//                       The dosage for Mysimba increases over the first four weeks. From week 4 onwards, the recommended dose is two tablets, twice a day.
//                     </p>
//                     <table className="min-w-full bg-white border border-gray-200 mt-4">
//                       <thead>
//                         <tr className="bg-gray-100 text-center font-bold">
//                           <th className="px-6 py-3">Week</th>
//                           <th className="px-6 py-3">Morning</th>
//                           <th className="px-6 py-3">Evening</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="px-6 py-4">Week 1</td>
//                           <td className="px-6 py-4">1</td>
//                           <td className="px-6 py-4">0</td>
//                         </tr>
//                         <tr>
//                           <td className="px-6 py-4">Week 2</td>
//                           <td className="px-6 py-4">1</td>
//                           <td className="px-6 py-4">1</td>
//                         </tr>
//                         <tr>
//                           <td className="px-6 py-4">Week 3</td>
//                           <td className="px-6 py-4">2</td>
//                           <td className="px-6 py-4">1</td>
//                         </tr>
//                         <tr>
//                           <td className="px-6 py-4">Week 4 onward</td>
//                           <td className="px-6 py-4">2</td>
//                           <td className="px-6 py-4">2</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </Accordion>

//                   <Accordion title="8. Is Mysimba dangerous?">
//                     <p>
//                       Mysimba may cause side effects, but it is generally safe when prescribed by a healthcare professional. Always provide accurate information during your consultation to ensure the treatment is safe for you.
//                     </p>
//                   </Accordion>

//                   <Accordion title="9. What are the main Mysimba side effects?">
//                     <p>
//                       Side effects are common with Mysimba, but they are usually mild and go away after a few days. The most common side effects include:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Feeling sick or vomiting</li>
//                       <li>Constipation</li>
//                       <li>Headaches</li>
//                     </ul>
//                     <p>
//                       For more information on side effects, consult the{' '}
//                       <a href="https://www.medicines.org.uk/emc/files/pil.2684.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         Mysimba patient information leaflet
//                       </a>.
//                     </p>
//                   </Accordion>

//                   <Accordion title="10. Who can't take Mysimba?">
//                     <p>
//                       Mysimba isn’t suitable for everyone. You shouldn’t take it if you have:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Uncontrolled high blood pressure</li>
//                       <li>A history of seizures</li>
//                       <li>A current brain tumour</li>
//                       <li>Severe liver disease</li>
//                       <li>End-stage kidney disease</li>
//                     </ul>
//                     <p>
//                       Always consult with a healthcare professional to assess your suitability for Mysimba.
//                     </p>
//                   </Accordion>

//                   <Accordion title="11. Weight loss treatment tables">
//                     <div className="mt-8">
//                       <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr className="bg-gray-100 text-center font-bold">
//                               <th className="px-6 py-3">Name</th>
//                               <th className="px-6 py-3">Mounjaro®</th>
//                               <th className="px-6 py-3">Wegovy®</th>
//                               <th className="px-6 py-3">Victoza®</th>
//                               <th className="px-6 py-3">Orlistat</th>
//                               <th className="px-6 py-3">Mysimba</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Active ingredient</td>
//                               <td className="px-6 py-4">Tirzepatide</td>
//                               <td className="px-6 py-4">Semaglutide</td>
//                               <td className="px-6 py-4">Liraglutide</td>
//                               <td className="px-6 py-4">Orlistat</td>
//                               <td className="px-6 py-4">Bupropion-Naltrexone</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Type of treatment</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How to take it</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Daily injection</td>
//                               <td className="px-6 py-4">Up to three daily tablets</td>
//                               <td className="px-6 py-4">Twice daily</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How it works</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces fat absorption</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>

//                       <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

//                       <table className="mt-8 w-full bg-white border border-gray-200">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="px-6 py-3 text-left">Weight loss medication</th>
//                             <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="px-6 py-4">Mounjaro</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Wegovy</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Mysimba</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Orlistat</td>
//                             <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Victoza® (Liraglutide)</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </Accordion>
//                 </div>
//                                 {/* Orlistat Accordion Sections */}
//                                 <div className="mt-6">
//                   <Accordion title="1. What is Orlistat?">
//                     <p>
//                       Orlistat is a weight loss medication suitable for adults with a BMI of 30 or over (or 28 if other risk factors are present). Orlistat is the generic version of{' '}
//                       <a href="https://www.drugs.com/xenical.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         Xenical
//                       </a>, containing the same active ingredient and working in the same way.
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Orlistat blocks about a third of the fat you consume from being absorbed.</li>
//                       <li>Helps support weight loss when combined with a healthy lifestyle.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="2. How does Orlistat work?">
//                     <p>
//                       Orlistat works by preventing the breakdown of around one-third of the fat you consume. The undigested fat is then passed out of your body through your stools. This medication works directly in your digestive system by attaching to enzymes called lipases.
//                     </p>
//                   </Accordion>

//                   <Accordion title="3. How long does Orlistat take to work?">
//                     <p>
//                       Orlistat starts to take effect within{' '}
//                       <a href="https://www.nhs.uk/conditions/obesity/treatment/" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         1 to 2 days
//                       </a> of use. However, for best results, it is recommended to follow a calorie-reduced diet and engage in regular exercise. 
//                     </p>
//                   </Accordion>

//                   <Accordion title="4. Does Orlistat burn existing fat?">
//                     <p>
//                       Orlistat does not burn existing body fat. Instead, it works by stopping your body from absorbing about one-third of the fat in your food. Following a low-fat diet is essential when taking Orlistat.
//                     </p>
//                   </Accordion>

//                   <Accordion title="5. Is Orlistat an effective weight loss treatment?">
//                     <p>
//                       Studies suggest that when Orlistat is taken as prescribed (three times a day for 12 weeks), patients typically lose about 5% of their starting weight. Over six months, some people may lose up to 10% of their weight, but results depend heavily on lifestyle factors, including diet and exercise. Learn more from{' '}
//                       <a href="https://patient.info/healthy-living/obesity-overweight/orlistat-weight-loss-medicine" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         studies on Orlistat effectiveness.
//                       </a>
//                     </p>
//                   </Accordion>

//                   <Accordion title="6. How to take Orlistat?">
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Take one 120 mg capsule three times a day, with water.</li>
//                       <li>Take the capsule before, during, or up to one hour after each main meal.</li>
//                       <li>If you skip a meal or eat a fat-free meal, you don’t need to take Orlistat for that meal.</li>
//                     </ul>
//                   </Accordion>

//                   <Accordion title="7. What is the recommended Orlistat dosage?">
//                     <p>
//                       The standard dosage of Orlistat is one 120 mg capsule taken with each main meal. Do not exceed the recommended dose, as taking more will not increase the effectiveness.
//                     </p>
//                   </Accordion>

//                   <Accordion title="8. Who can take Orlistat tablets?">
//                     <p>
//                       Orlistat is suitable for people who are medically overweight. You can be prescribed Orlistat if:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Your BMI is 30 or higher.</li>
//                       <li>Your BMI is 28 or higher, and you have weight-related health conditions such as high blood pressure.</li>
//                     </ul>
//                     <p>
//                       This medication should not be taken by pregnant or breastfeeding individuals. It should only be used under the supervision of a healthcare professional.
//                     </p>
//                   </Accordion>

//                   <Accordion title="9. Where to buy Orlistat?">
//                     <p>
//                       You can request Orlistat online by clicking the ‘Request Treatment’ button and completing our health questionnaire. This allows us to assess if Orlistat is the right treatment for you.
//                     </p>
//                   </Accordion>

//                   <Accordion title="10. What are the side effects of Orlistat?">
//                     <p>
//                       Side effects may occur, especially if you eat high-fat meals while taking Orlistat. These include:
//                     </p>
//                     <ul className="list-disc ml-6 mt-2">
//                       <li>Headache</li>
//                       <li>Abdominal discomfort</li>
//                       <li>Oily or fatty stools</li>
//                       <li>Increased urgency to open the bowels</li>
//                     </ul>
//                     <p>
//                       For full details of possible side effects, consult the{' '}
//                       <a href="https://www.medicines.org.uk/emc/files/pil.2592.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
//                         Orlistat patient information leaflet.
//                       </a>
//                     </p>
//                   </Accordion>
//                   <Accordion title="11. Weight loss treatment tables">
//                     <div className="mt-8">
//                       <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr className="bg-gray-100 text-center font-bold">
//                               <th className="px-6 py-3">Name</th>
//                               <th className="px-6 py-3">Mounjaro®</th>
//                               <th className="px-6 py-3">Wegovy®</th>
//                               <th className="px-6 py-3">Victoza®</th>
//                               <th className="px-6 py-3">Orlistat</th>
//                               <th className="px-6 py-3">Mysimba</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Active ingredient</td>
//                               <td className="px-6 py-4">Tirzepatide</td>
//                               <td className="px-6 py-4">Semaglutide</td>
//                               <td className="px-6 py-4">Liraglutide</td>
//                               <td className="px-6 py-4">Orlistat</td>
//                               <td className="px-6 py-4">Bupropion-Naltrexone</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Type of treatment</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How to take it</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Daily injection</td>
//                               <td className="px-6 py-4">Up to three daily tablets</td>
//                               <td className="px-6 py-4">Twice daily</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How it works</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces fat absorption</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>

//                       <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

//                       <table className="mt-8 w-full bg-white border border-gray-200">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="px-6 py-3 text-left">Weight loss medication</th>
//                             <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="px-6 py-4">Mounjaro</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Wegovy</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Mysimba</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Orlistat</td>
//                             <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Victoza® (Liraglutide)</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </Accordion>
//                 </div>
// {/* Liraglutide Accordion Sections */}
// <div className="mt-6">
//   <Accordion title="1. What is Liraglutide?">
//     <p>
//       Liraglutide is an injectable medication used to manage blood sugar levels in adults with type 2 diabetes. More recently, it has been approved as a treatment for weight loss. Liraglutide helps to reduce appetite and is typically prescribed alongside a calorie-controlled diet and exercise plan.
//     </p>
//     <p>
//       In the UK, liraglutide is available under two brand names:
//     </p>
//     <ul className="list-disc ml-6 mt-2">
//       <li><strong>Victoza:</strong> Used for the management of type 2 diabetes.</li>
//       <li><strong>Saxenda:</strong> Approved for weight loss treatment, though it is currently long-term out of stock in the UK.</li>
//     </ul>
//     <p>
//       Liraglutide will also soon be available under the generic drug name "liraglutide". Once in stock, you will be able to request liraglutide treatment for weight loss through the St Helens Pharmacy Group.
//     </p>
//   </Accordion>

//   <Accordion title="2. How does Liraglutide work for weight loss?">
//     <p>
//       Liraglutide mimics the action of a natural hormone in your body called GLP-1, which regulates appetite. After eating, GLP-1 is released and signals to your brain that you are full. By mimicking this hormone, liraglutide helps reduce appetite and makes you feel full for longer, making it easier to stick to a calorie-restricted diet.
//     </p>
//     <p>
//       In addition, liraglutide slows down the rate at which your stomach empties, meaning you stay full for a longer period after eating. This helps support weight loss when combined with a healthy diet and regular exercise.
//     </p>
//   </Accordion>

//   <Accordion title="3. How to take Liraglutide?">
//     <ul className="list-disc ml-6 mt-2">
//       <li>Liraglutide is injected once daily, at the same time each day, to keep medication levels stable in your body.</li>
//       <li>It can be injected with or without food and drink as it is not taken orally but administered under the skin.</li>
//       <li>Always inject under the skin (subcutaneously) and avoid injecting into veins or muscles.</li>
//       <li>Rotate the injection sites daily to avoid irritation. Recommended injection sites include the front of the abdomen, thigh, or upper arm.</li>
//       <li>Use a new needle for each injection, and ensure the needle is not damaged or unsealed.</li>
//     </ul>
//     <p>
//       For detailed instructions, follow the advice in the patient information leaflet provided with the medication or consult your healthcare provider.
//     </p>
//   </Accordion>

//   <Accordion title="4. Liraglutide dosage schedule">
//     <p>
//       Liraglutide is taken following a specific dosage schedule over 5 weeks to allow your body to adjust to the medication. The gradual increase in dosage helps minimise potential side effects such as nausea. 
//     </p>
//     <ul className="list-disc ml-6 mt-2">
//       <li><strong>Week 1:</strong> Start with a low dose of 0.6 mg per day.</li>
//       <li><strong>Week 2:</strong> Increase to 1.2 mg per day.</li>
//       <li><strong>Week 3:</strong> Increase to 1.8 mg per day.</li>
//       <li><strong>Week 4:</strong> Increase to 2.4 mg per day.</li>
//       <li><strong>Week 5 onwards:</strong> Reach the maintenance dose of 3 mg per day.</li>
//     </ul>
//     <p>
//       Liraglutide is <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">most effective once you reach the maintenance dose of 3 mg</a>. If you stop taking liraglutide, you will need to restart the dosage schedule. If side effects are too strong, you may be advised to stay on a lower dose for longer before increasing.
//     </p>
//   </Accordion>

//   <Accordion title="5. Liraglutide effectiveness">
//     <p>
//       Clinical studies have shown that Saxenda (liraglutide for weight loss) can help patients lose an average of <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">8% of their body weight</a> over 56 weeks when combined with a reduced-calorie diet and increased physical activity. This is compared to a 2.6% weight loss in those taking a placebo.
//     </p>
//     <p>
//       To maximise the effectiveness of liraglutide:
//     </p>
//     <ul className="list-disc ml-6 mt-2">
//       <li>Take it at the same time every day.</li>
//       <li>Stick to the prescribed diet and exercise plan.</li>
//       <li>Avoid missing doses, as consistency is key to achieving the desired effects.</li>
//     </ul>
//   </Accordion>

//   <Accordion title="6. Liraglutide side effects">
//     <p>
//       Like all medications, liraglutide can cause side effects, though most are mild and diminish over time as your body adjusts. You will be started on a lower dose to help reduce side effects, and your pharmacist may suggest staying on a lower dose if side effects persist.
//     </p>
//     <p><strong>Common side effects:</strong></p>
//     <ul className="list-disc ml-6 mt-2">
//       <li>Nausea</li>
//       <li>Vomiting</li>
//       <li>Diarrhoea</li>
//       <li>Headache</li>
//       <li>Constipation</li>
//     </ul>
//     <p><strong>Serious but rare side effects:</strong></p>
//     <ul className="list-disc ml-6 mt-2">
//       <li><strong>Anaphylaxis:</strong> Severe allergic reaction with swelling in the face or throat, dizziness, and difficulty breathing. Seek emergency medical attention if this occurs.</li>
//       <li><strong>Pancreatitis:</strong> Severe stomach pain, nausea, and vomiting. This requires urgent medical care.</li>
//     </ul>
//     <p>
//       If you experience any of these side effects, contact your healthcare provider.
//     </p>
//   </Accordion>

//   <Accordion title="7. How to get Liraglutide in the UK?">
//     <p>
//       Liraglutide is a prescription-only treatment, which means you will need to obtain it through a private prescription or, in some cases, through the NHS. Currently, Saxenda is out of stock in the UK, but the generic version of liraglutide will soon be available.
//     </p>
//     <p>
//       You can request a prescription for liraglutide through services like St Helens Pharmacy Group by clicking the "Request Treatment" button and filling out a health questionnaire to determine if the treatment is right for you.
//     </p>
//   </Accordion>

//   <Accordion title="8. Liraglutide alternatives">
//     <p>
//       Until liraglutide is widely available, you can consider alternative weight loss injections that work similarly. Both Wegovy and Mounjaro contain GLP-1 receptor agonists, and you can get a prescription for these treatments from St Helens Pharmacy Group.
//     </p>
//   </Accordion>

//   <Accordion title="9. Frequently asked questions about Liraglutide">
//     <p>
//       <strong>Does Liraglutide burn fat?</strong> No, liraglutide does not burn fat directly. Instead, it reduces appetite, making it easier to stick to a calorie-controlled diet, which leads to fat loss.
//     </p>
//     <p>
//       <strong>Can you drink alcohol with Liraglutide?</strong> While there is no direct interaction between alcohol and liraglutide, it is recommended to limit alcohol consumption, as it may worsen side effects such as nausea and hinder weight loss progress due to the high-calorie content in many alcoholic beverages.
//     </p>
//     <p>
//       <strong>Does Liraglutide need to be refrigerated?</strong> Yes, liraglutide must be stored in the refrigerator before its first use. Once you begin using the pen, it can be stored either in the refrigerator or at room temperature (below 30°C) for up to 30 days.
//     </p>
//   </Accordion>

//   <Accordion title="10. Weight loss treatment tables">
//                     <div className="mt-8">
//                       <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr className="bg-gray-100 text-center font-bold">
//                               <th className="px-6 py-3">Name</th>
//                               <th className="px-6 py-3">Mounjaro®</th>
//                               <th className="px-6 py-3">Wegovy®</th>
//                               <th className="px-6 py-3">Victoza®</th>
//                               <th className="px-6 py-3">Orlistat</th>
//                               <th className="px-6 py-3">Mysimba</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Active ingredient</td>
//                               <td className="px-6 py-4">Tirzepatide</td>
//                               <td className="px-6 py-4">Semaglutide</td>
//                               <td className="px-6 py-4">Liraglutide</td>
//                               <td className="px-6 py-4">Orlistat</td>
//                               <td className="px-6 py-4">Bupropion-Naltrexone</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">Type of treatment</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss injection</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                               <td className="px-6 py-4">Weight loss capsule</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How to take it</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Weekly injection</td>
//                               <td className="px-6 py-4">Daily injection</td>
//                               <td className="px-6 py-4">Up to three daily tablets</td>
//                               <td className="px-6 py-4">Twice daily</td>
//                             </tr>
//                             <tr>
//                               <td className="px-6 py-4 font-semibold">How it works</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                               <td className="px-6 py-4">Reduces fat absorption</td>
//                               <td className="px-6 py-4">Reduces/regulates appetite</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>

//                       <p className="text-xs mt-4">*% of people losing more than 5% of body weight.</p>

//                       <table className="mt-8 w-full bg-white border border-gray-200">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="px-6 py-3 text-left">Weight loss medication</th>
//                             <th className="px-6 py-3 text-left">Effectiveness in clinical studies</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="px-6 py-4">Mounjaro</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Wegovy</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Mysimba</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Orlistat</td>
//                             <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
//                           </tr>
//                           <tr>
//                             <td className="px-6 py-4">Victoza® (Liraglutide)</td>
//                             <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </Accordion>
//                 </div>


//               </Fade>
//             </div>
//             <Link to="/products" className="pt-4 text-purple-500 text-sm hover:underline flex items-center space-x-3">
//               <BsArrowLeft /> <span>Back</span>
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default ProductDetailScreen;


import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Accordion from '../components/products/Accordion'; // Import the Accordion component

const ProductDetailScreen = () => {
  const { title } = useParams();
  const [data] = useFetch('products');

  const product = data.find(item => item.title === title);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWMnag7FtT4KzUvjAmJTVMSkL3vu0iEkTptdw_WLx-nhNfPw/viewform";

  const renderAccordionSections = () => {
    switch (product?.title) {
      case 'Mounjaro':
        return (
          <>
            {/* Mounjaro Accordion Sections */}
            <div className="mt-6">
              <Accordion title="1. What is Mounjaro®?">
                <p>
                  Mounjaro® (tirzepatide) is a weekly injection for adults looking to lose weight, particularly those with high body mass indexes (BMIs). It contains tirzepatide as the active ingredient and is also known as Zepbound. Recently approved in the UK for weight loss, Mounjaro® is available on prescription through St Helens Pharmacy Group.
                </p>
                <p>
                  To be effective, Mounjaro® should be used alongside a healthy lifestyle, including regular exercise and a reduced-calorie diet.
                </p>
              </Accordion>

              <Accordion title="2. How does Mounjaro® work?">
                <p>
                  The active ingredient, tirzepatide, works by{' '}
                  <a href="https://www.drugs.com/mounjaro.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    activating two hormones
                  </a>{' '}
                  (GIP and GLP-1). These hormones suppress your appetite, help regulate blood sugar, and slow down digestion, all of which support weight loss.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Suppresses appetite:</strong> Mimics natural hormones to reduce hunger.</li>
                  <li><strong>Regulates blood sugar:</strong> Helps you feel full for longer.</li>
                  <li><strong>Slows digestion:</strong> Keeps food in your stomach longer, which may lead to eating smaller portions.</li>
                </ul>
              </Accordion>

              <Accordion title="3. Mounjaro® dosage">
                <p>
                  Mounjaro® comes in different doses,{' '}
                  <a href="https://www.medicines.org.uk/emc/files/pil.15482.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    starting with a 2.5 mg dose
                  </a>. This increases gradually to help manage side effects.
                </p>
              </Accordion>

              <Accordion title="4. How to use Mounjaro®?">
                <p>
                  Mounjaro® is injected once a week into your stomach, thigh, or upper arm. It’s important to inject it on the same day each week. You can set a reminder to help you remember. Watch this{' '}
                  <a href="https://uk.lilly.com/diabetes/patient/obesity/mounjaro" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    video
                  </a>{' '}
                  for more details on how to inject. Note that alcohol swabs are not provided.
                </p>
              </Accordion>

              <Accordion title="5. How to inject Mounjaro®?">
                <p>Here’s a simplified guide to using the Mounjaro® KwikPen:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Wash your hands.</li>
                  <li>Check your pen’s expiry date and make sure the liquid is clear or slightly yellow. Don’t use it if it’s expired, cloudy, discoloured, or contains particles.</li>
                  <li>Remove the grey base cap.</li>
                  <li>Clean the red inner seal with a swab.</li>
                  <li>Attach a new needle by twisting it onto the pen.</li>
                  <li>Remove the needle caps.</li>
                  <li>Turn the dose knob until it clicks twice and shows the correct dose in the window.</li>
                  <li>Hold the pen with the needle pointing up and release a small amount of medicine into the air to prime it.</li>
                  <li>Choose an injection site on your lower stomach, thigh, or upper arm, rotating the site each time.</li>
                  <li>Press the button on the pen for 10 seconds until you hear two clicks, indicating the injection is complete.</li>
                  <li>Remove the needle and, if necessary, apply light pressure to the site.</li>
                  <li>Dispose of the needle in a sharps bin and replace the pen cap.</li>
                </ul>
              </Accordion>

              <Accordion title="6. Who can use Mounjaro®?">
                <p>Mounjaro® is suitable for:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Adults with a BMI of 30 or above</li>
                  <li>Adults with a BMI of 27 or above who have weight-related health issues, such as heart disease, stroke, or sleep apnoea</li>
                </ul>
                <p>
                  It should not be used if you’re allergic to any of the ingredients. Your pharmacist will assess whether Mounjaro® is safe for you, especially if you:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Have digestion problems</li>
                  <li>Have had pancreatitis</li>
                  <li>Have eye issues</li>
                  <li>Take diabetes medication</li>
                  <li>Are under 18 years old</li>
                </ul>
              </Accordion>

              <Accordion title="7. What are the side effects of Mounjaro®?">
                <p>
                  Like all medications, Mounjaro® can cause side effects, though many improve as your body adjusts. Side effects tend to occur when increasing the dose.
                </p>
                <p className="mt-2"><strong>Common side effects</strong> (affecting more than 1 in 10 people) include:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Nausea or vomiting</li>
                  <li>Diarrhoea or constipation</li>
                  <li>Skin reactions at the injection site</li>
                  <li>Dizziness</li>
                  <li>Decreased appetite</li>
                  <li>Stomach pain, bloating, or indigestion</li>
                  <li>Lower blood pressure</li>
                  <li>Heartburn</li>
                  <li>Hair loss</li>
                </ul>
                <p className="mt-2"><strong>Uncommon side effects</strong> include:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Gallstones</li>
                  <li>Pain around the injection site</li>
                  <li>Raised calcitonin levels (detected by your GP)</li>
                </ul>
                <p>
                  These side effects are usually mild and often improve with time, especially after dose adjustments. Learn more from the{' '}
                  <a href="https://mounjaro.lilly.com/how-to-use-mounjaro#possible-side-effects" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    patient information leaflet
                  </a>.
                </p>
              </Accordion>

              <Accordion title="8. How effective is Mounjaro®?">
                <p>
                  Results vary, but clinical trials show that people taking the highest dose of Mounjaro® (15 mg) lost up to 21% of their body weight. Around 96% of adults can{' '}
                  <a href="https://clinicaltrials.gov/study/NCT04184622" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    expect to lose at least 5% of their starting weight
                  </a>. Combining Mounjaro® with a healthy diet and exercise is key to achieving the best results.
                </p>
              </Accordion>

              <Accordion title="9. What foods should you avoid when taking Mounjaro®?">
                <p>
                  If you experience nausea while using Mounjaro®, it may help to avoid strong-smelling or tasting foods. Instead, opt for bland foods like crackers, rice, or toast. Reducing your{' '}
                  <a href="https://mounjaro.lilly.com/how-to-use-mounjaro#possible-side-effects" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                    intake of fatty foods
                  </a>{' '}
                  may also help.
                </p>
              </Accordion>

              <Accordion title="10. Weight loss treatment tables">
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
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
                </div>
              </Accordion>
            </div>
          </>
        );
        case 'Wegovy':
            return (
              <>
  {/* Wegovy Accordion Sections*/}
  <div className="mt-6">
                  <Accordion title="1. What is Wegovy®?">
                    <p>
                      Wegovy® is a weight loss drug containing semaglutide, which helps people lose up to{' '}
                      <a href="https://www.medicines.org.uk/emc/product/13801/smpc" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        15% of their body weight
                      </a> over 68 weeks. It is injected once a week and works best with a healthy diet and regular exercise. Wegovy® is now approved in the UK after being approved in the USA in 2021.
                    </p>
                  </Accordion>

                  <Accordion title="2. How does Wegovy® work?">
                    <p>
                      Wegovy® helps with weight loss by reducing appetite. Its active ingredient, semaglutide, mimics a hormone that regulates hunger, so you feel fuller for longer. This can help you eat less and lose weight.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li><strong>Starting dose:</strong> 0.25mg weekly, which can be increased after four weeks if tolerated.</li>
                      <li><strong>Works best with:</strong> Healthy eating and regular exercise.</li>
                      <li>85% of people lose at least 5% of their weight with Wegovy®.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="3. Where can I get Wegovy®?">
                    <p>
                      Wegovy® is only available with a prescription, so you’ll need to consult a healthcare professional to ensure it's the right treatment for you. While you can get over-the-counter medications like Orlistat, Wegovy® requires a prescription.
                    </p>
                  </Accordion>

                  <Accordion title="4. Using our Wegovy® service">
                    <p>
                      To request Wegovy®, click the ‘Request Treatment’ button and fill out our questionnaire. We'll assess if Wegovy® is right for you. Note: If you live in Northern Ireland, Wegovy® may be prescribed off-label, as it hasn't been licensed there yet, but we'll ensure it's safe for you.
                    </p>
                  </Accordion>

                  <Accordion title="5. Taking Wegovy®">
                    <p>
                      Wegovy® is injected once a week into your stomach, thigh, or upper arm. You can watch this{' '}
                      <a href="https://www.wegovy.com/taking-wegovy/how-to-use-the-wegovy-pen.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        video
                      </a> to learn how to inject yourself. The dose may vary depending on where you are in your treatment.
                    </p>
                  </Accordion>

                  <Accordion title="6. How effective is Wegovy®?">
                    <p>
                      A{' '}
                      <a href="https://www.medicines.org.uk/emc/product/13801/smpc" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        68-week study
                      </a> showed that Wegovy® users who combined it with a healthy diet and exercise experienced:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>85% lost more than 5% of their body weight</li>
                      <li>66% lost more than 10% of their body weight</li>
                      <li>48% lost more than 15% of their body weight</li>
                      <li>30% lost more than 20% of their body weight</li>
                    </ul>
                    <p>
                      In comparison, only{' '}
                      <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        60% of people lost 5%
                      </a> with Saxenda®.
                    </p>
                  </Accordion>

                  <Accordion title="7. Weight loss treatment tables">
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
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
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Wegovy</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Mysimba</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Orlistat</td>
                            <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Victoza® (Liraglutide)</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                </div>
                </>
            );
          case 'Mysimba':
            return (
              <>
 {/* Mysimba Accordion Sections */}
 <div className="mt-6">
                  <Accordion title="1. What is Mysimba?">
                    <p>
                      Mysimba is a weight loss pill that contains two active ingredients: naltrexone and bupropion. These help support weight loss by reducing appetite and increasing energy use. You take up to four tablets daily, increasing the dosage over the first four weeks.
                    </p>
                  </Accordion>

                  <Accordion title="2. What is Mysimba used for?">
                    <p>
                      Mysimba is prescribed for weight loss in adults who are overweight (BMI over 30) or those with a BMI over 27 with weight-related health conditions like high blood pressure or cholesterol. A healthcare professional will assess if it’s right for you.
                    </p>
                  </Accordion>

                  <Accordion title="3. How does Mysimba work?">
                    <p>
                      Mysimba helps with weight loss by reducing appetite and increasing energy usage. It works best when combined with a healthy diet and exercise plan.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Reduces appetite, making it easier to stick to a diet.</li>
                      <li>Increases energy usage, helping to speed up weight loss.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="4. What are the ingredients in Mysimba?">
                    <p>
                      Mysimba contains two active ingredients: naltrexone and bupropion. Both help support weight loss by reducing appetite and boosting energy use.
                    </p>
                  </Accordion>

                  <Accordion title="5. How to buy Mysimba online?">
                    <p>
                      You can request Mysimba online by clicking the ‘Request Treatment’ button and completing a healthcare questionnaire. This allows us to assess if Mysimba is the right treatment for you.
                    </p>
                  </Accordion>

                  <Accordion title="6. How to take Mysimba?">
                    <p>
                      Mysimba tablets should be swallowed whole, without crushing or cutting them. Use water to help you swallow if needed. Always follow the instructions provided by your healthcare professional.
                    </p>
                  </Accordion>

                  <Accordion title="7. What is the recommended Mysimba dosage?">
                    <p>
                      The dosage for Mysimba increases over the first four weeks. From week 4 onwards, the recommended dose is two tablets, twice a day.
                    </p>
                    <table className="min-w-full bg-white border border-gray-200 mt-4">
                      <thead>
                        <tr className="bg-gray-100 text-center font-bold">
                          <th className="px-6 py-3">Week</th>
                          <th className="px-6 py-3">Morning</th>
                          <th className="px-6 py-3">Evening</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6 py-4">Week 1</td>
                          <td className="px-6 py-4">1</td>
                          <td className="px-6 py-4">0</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Week 2</td>
                          <td className="px-6 py-4">1</td>
                          <td className="px-6 py-4">1</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Week 3</td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">1</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Week 4 onward</td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </Accordion>

                  <Accordion title="8. Is Mysimba dangerous?">
                    <p>
                      Mysimba may cause side effects, but it is generally safe when prescribed by a healthcare professional. Always provide accurate information during your consultation to ensure the treatment is safe for you.
                    </p>
                  </Accordion>

                  <Accordion title="9. What are the main Mysimba side effects?">
                    <p>
                      Side effects are common with Mysimba, but they are usually mild and go away after a few days. The most common side effects include:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Feeling sick or vomiting</li>
                      <li>Constipation</li>
                      <li>Headaches</li>
                    </ul>
                    <p>
                      For more information on side effects, consult the{' '}
                      <a href="https://www.medicines.org.uk/emc/files/pil.2684.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        Mysimba patient information leaflet
                      </a>.
                    </p>
                  </Accordion>

                  <Accordion title="10. Who can't take Mysimba?">
                    <p>
                      Mysimba isn’t suitable for everyone. You shouldn’t take it if you have:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Uncontrolled high blood pressure</li>
                      <li>A history of seizures</li>
                      <li>A current brain tumour</li>
                      <li>Severe liver disease</li>
                      <li>End-stage kidney disease</li>
                    </ul>
                    <p>
                      Always consult with a healthcare professional to assess your suitability for Mysimba.
                    </p>
                  </Accordion>

                  <Accordion title="11. Weight loss treatment tables">
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
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
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Wegovy</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Mysimba</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Orlistat</td>
                            <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Victoza® (Liraglutide)</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                </div>
              </>
            );
          case 'Orlistat':
            return (
              <>
 {/* Orlistat Accordion Sections */}
 <div className="mt-6">
                  <Accordion title="1. What is Orlistat?">
                    <p>
                      Orlistat is a weight loss medication suitable for adults with a BMI of 30 or over (or 28 if other risk factors are present). Orlistat is the generic version of{' '}
                      <a href="https://www.drugs.com/xenical.html" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        Xenical
                      </a>, containing the same active ingredient and working in the same way.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Orlistat blocks about a third of the fat you consume from being absorbed.</li>
                      <li>Helps support weight loss when combined with a healthy lifestyle.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="2. How does Orlistat work?">
                    <p>
                      Orlistat works by preventing the breakdown of around one-third of the fat you consume. The undigested fat is then passed out of your body through your stools. This medication works directly in your digestive system by attaching to enzymes called lipases.
                    </p>
                  </Accordion>

                  <Accordion title="3. How long does Orlistat take to work?">
                    <p>
                      Orlistat starts to take effect within{' '}
                      <a href="https://www.nhs.uk/conditions/obesity/treatment/" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        1 to 2 days
                      </a> of use. However, for best results, it is recommended to follow a calorie-reduced diet and engage in regular exercise. 
                    </p>
                  </Accordion>

                  <Accordion title="4. Does Orlistat burn existing fat?">
                    <p>
                      Orlistat does not burn existing body fat. Instead, it works by stopping your body from absorbing about one-third of the fat in your food. Following a low-fat diet is essential when taking Orlistat.
                    </p>
                  </Accordion>

                  <Accordion title="5. Is Orlistat an effective weight loss treatment?">
                    <p>
                      Studies suggest that when Orlistat is taken as prescribed (three times a day for 12 weeks), patients typically lose about 5% of their starting weight. Over six months, some people may lose up to 10% of their weight, but results depend heavily on lifestyle factors, including diet and exercise. Learn more from{' '}
                      <a href="https://patient.info/healthy-living/obesity-overweight/orlistat-weight-loss-medicine" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        studies on Orlistat effectiveness.
                      </a>
                    </p>
                  </Accordion>

                  <Accordion title="6. How to take Orlistat?">
                    <ul className="list-disc ml-6 mt-2">
                      <li>Take one 120 mg capsule three times a day, with water.</li>
                      <li>Take the capsule before, during, or up to one hour after each main meal.</li>
                      <li>If you skip a meal or eat a fat-free meal, you don’t need to take Orlistat for that meal.</li>
                    </ul>
                  </Accordion>

                  <Accordion title="7. What is the recommended Orlistat dosage?">
                    <p>
                      The standard dosage of Orlistat is one 120 mg capsule taken with each main meal. Do not exceed the recommended dose, as taking more will not increase the effectiveness.
                    </p>
                  </Accordion>

                  <Accordion title="8. Who can take Orlistat tablets?">
                    <p>
                      Orlistat is suitable for people who are medically overweight. You can be prescribed Orlistat if:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Your BMI is 30 or higher.</li>
                      <li>Your BMI is 28 or higher, and you have weight-related health conditions such as high blood pressure.</li>
                    </ul>
                    <p>
                      This medication should not be taken by pregnant or breastfeeding individuals. It should only be used under the supervision of a healthcare professional.
                    </p>
                  </Accordion>

                  <Accordion title="9. Where to buy Orlistat?">
                    <p>
                      You can request Orlistat online by clicking the ‘Request Treatment’ button and completing our health questionnaire. This allows us to assess if Orlistat is the right treatment for you.
                    </p>
                  </Accordion>

                  <Accordion title="10. What are the side effects of Orlistat?">
                    <p>
                      Side effects may occur, especially if you eat high-fat meals while taking Orlistat. These include:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Headache</li>
                      <li>Abdominal discomfort</li>
                      <li>Oily or fatty stools</li>
                      <li>Increased urgency to open the bowels</li>
                    </ul>
                    <p>
                      For full details of possible side effects, consult the{' '}
                      <a href="https://www.medicines.org.uk/emc/files/pil.2592.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        Orlistat patient information leaflet.
                      </a>
                    </p>
                  </Accordion>
                  <Accordion title="11. Weight loss treatment tables">
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
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
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Wegovy</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Mysimba</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Orlistat</td>
                            <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Victoza® (Liraglutide)</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                </div>
              </>
            );
          case 'Liraglutide':
            return (
              <>
{/* Liraglutide Accordion Sections */}
<div className="mt-6">
  <Accordion title="1. What is Liraglutide?">
    <p>
      Liraglutide is an injectable medication used to manage blood sugar levels in adults with type 2 diabetes. More recently, it has been approved as a treatment for weight loss. Liraglutide helps to reduce appetite and is typically prescribed alongside a calorie-controlled diet and exercise plan.
    </p>
    <p>
      In the UK, liraglutide is available under two brand names:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Victoza:</strong> Used for the management of type 2 diabetes.</li>
      <li><strong>Saxenda:</strong> Approved for weight loss treatment, though it is currently long-term out of stock in the UK.</li>
    </ul>
    <p>
      Liraglutide will also soon be available under the generic drug name "liraglutide". Once in stock, you will be able to request liraglutide treatment for weight loss through the St Helens Pharmacy Group.
    </p>
  </Accordion>

  <Accordion title="2. How does Liraglutide work for weight loss?">
    <p>
      Liraglutide mimics the action of a natural hormone in your body called GLP-1, which regulates appetite. After eating, GLP-1 is released and signals to your brain that you are full. By mimicking this hormone, liraglutide helps reduce appetite and makes you feel full for longer, making it easier to stick to a calorie-restricted diet.
    </p>
    <p>
      In addition, liraglutide slows down the rate at which your stomach empties, meaning you stay full for a longer period after eating. This helps support weight loss when combined with a healthy diet and regular exercise.
    </p>
  </Accordion>

  <Accordion title="3. How to take Liraglutide?">
    <ul className="list-disc ml-6 mt-2">
      <li>Liraglutide is injected once daily, at the same time each day, to keep medication levels stable in your body.</li>
      <li>It can be injected with or without food and drink as it is not taken orally but administered under the skin.</li>
      <li>Always inject under the skin (subcutaneously) and avoid injecting into veins or muscles.</li>
      <li>Rotate the injection sites daily to avoid irritation. Recommended injection sites include the front of the abdomen, thigh, or upper arm.</li>
      <li>Use a new needle for each injection, and ensure the needle is not damaged or unsealed.</li>
    </ul>
    <p>
      For detailed instructions, follow the advice in the patient information leaflet provided with the medication or consult your healthcare provider.
    </p>
  </Accordion>

  <Accordion title="4. Liraglutide dosage schedule">
    <p>
      Liraglutide is taken following a specific dosage schedule over 5 weeks to allow your body to adjust to the medication. The gradual increase in dosage helps minimise potential side effects such as nausea. 
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Week 1:</strong> Start with a low dose of 0.6 mg per day.</li>
      <li><strong>Week 2:</strong> Increase to 1.2 mg per day.</li>
      <li><strong>Week 3:</strong> Increase to 1.8 mg per day.</li>
      <li><strong>Week 4:</strong> Increase to 2.4 mg per day.</li>
      <li><strong>Week 5 onwards:</strong> Reach the maintenance dose of 3 mg per day.</li>
    </ul>
    <p>
      Liraglutide is <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">most effective once you reach the maintenance dose of 3 mg</a>. If you stop taking liraglutide, you will need to restart the dosage schedule. If side effects are too strong, you may be advised to stay on a lower dose for longer before increasing.
    </p>
  </Accordion>

  <Accordion title="5. Liraglutide effectiveness">
    <p>
      Clinical studies have shown that Saxenda (liraglutide for weight loss) can help patients lose an average of <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">8% of their body weight</a> over 56 weeks when combined with a reduced-calorie diet and increased physical activity. This is compared to a 2.6% weight loss in those taking a placebo.
    </p>
    <p>
      To maximise the effectiveness of liraglutide:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>Take it at the same time every day.</li>
      <li>Stick to the prescribed diet and exercise plan.</li>
      <li>Avoid missing doses, as consistency is key to achieving the desired effects.</li>
    </ul>
  </Accordion>

  <Accordion title="6. Liraglutide side effects">
    <p>
      Like all medications, liraglutide can cause side effects, though most are mild and diminish over time as your body adjusts. You will be started on a lower dose to help reduce side effects, and your pharmacist may suggest staying on a lower dose if side effects persist.
    </p>
    <p><strong>Common side effects:</strong></p>
    <ul className="list-disc ml-6 mt-2">
      <li>Nausea</li>
      <li>Vomiting</li>
      <li>Diarrhoea</li>
      <li>Headache</li>
      <li>Constipation</li>
    </ul>
    <p><strong>Serious but rare side effects:</strong></p>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Anaphylaxis:</strong> Severe allergic reaction with swelling in the face or throat, dizziness, and difficulty breathing. Seek emergency medical attention if this occurs.</li>
      <li><strong>Pancreatitis:</strong> Severe stomach pain, nausea, and vomiting. This requires urgent medical care.</li>
    </ul>
    <p>
      If you experience any of these side effects, contact your healthcare provider.
    </p>
  </Accordion>

  <Accordion title="7. How to get Liraglutide in the UK?">
    <p>
      Liraglutide is a prescription-only treatment, which means you will need to obtain it through a private prescription or, in some cases, through the NHS. Currently, Saxenda is out of stock in the UK, but the generic version of liraglutide will soon be available.
    </p>
    <p>
      You can request a prescription for liraglutide through services like St Helens Pharmacy Group by clicking the "Request Treatment" button and filling out a health questionnaire to determine if the treatment is right for you.
    </p>
  </Accordion>

  <Accordion title="8. Liraglutide alternatives">
    <p>
      Until liraglutide is widely available, you can consider alternative weight loss injections that work similarly. Both Wegovy and Mounjaro contain GLP-1 receptor agonists, and you can get a prescription for these treatments from St Helens Pharmacy Group.
    </p>
  </Accordion>

  <Accordion title="9. Frequently asked questions about Liraglutide">
    <p>
      <strong>Does Liraglutide burn fat?</strong> No, liraglutide does not burn fat directly. Instead, it reduces appetite, making it easier to stick to a calorie-controlled diet, which leads to fat loss.
    </p>
    <p>
      <strong>Can you drink alcohol with Liraglutide?</strong> While there is no direct interaction between alcohol and liraglutide, it is recommended to limit alcohol consumption, as it may worsen side effects such as nausea and hinder weight loss progress due to the high-calorie content in many alcoholic beverages.
    </p>
    <p>
      <strong>Does Liraglutide need to be refrigerated?</strong> Yes, liraglutide must be stored in the refrigerator before its first use. Once you begin using the pen, it can be stored either in the refrigerator or at room temperature (below 30°C) for up to 30 days.
    </p>
  </Accordion>

  <Accordion title="10. Weight loss treatment tables">
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold text-center mb-4">Weight loss treatments table</h2>
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
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/15484/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 22.5%</a> of their starting weight on the 15 mg maintenance dose after 72 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Wegovy</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/13799/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">up to 15%</a> of their starting weight on the maintenance dose after 68 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Mysimba</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2684" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 8.1%</a> of their starting weight after 56 weeks of treatment.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Orlistat</td>
                            <td className="px-6 py-4">Found to help 37% of people lose <a href="https://www.medicines.org.uk/emc/product/2592#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">5% or more</a> of their starting weight after 12 weeks.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4">Victoza® (Liraglutide)</td>
                            <td className="px-6 py-4">People lost <a href="https://www.medicines.org.uk/emc/product/2313/smpc#gref" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">an average of 5-7%</a> of their starting weight after 56 weeks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                </div>
              </>
            );
      default:
        return null;
    }
  };

  return (
    <section className="max-w-screen-xl py-24 mx-auto px-6 overflow-y-hidden">
      <div className="flex flex-col justify-center items-center pt-24">
        {product && (
          <div className="p-6 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div>
              <Fade direction="left">
                <img className="w-full h-full mx-auto object-cover rounded-lg" src={product.image} alt="coverimg" />
              </Fade>
            </div>
            <div className="flex flex-col justify-center h-full">
              <Fade direction="left">
                <div className="border-b border-gray-400 pb-4">
                  <h1 className="poppins text-gray-800 text-3xl">{product.title}</h1>
                  <p className="text-gray-400 my-4">{product.description}</p>
                </div>

                {/* Price Options */}
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

                {/* Conditional Accordion Sections */}
                <div className="mt-6">
                  {renderAccordionSections()}
                </div>
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
};

export default ProductDetailScreen;
