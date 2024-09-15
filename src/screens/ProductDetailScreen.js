
// import React from 'react'; 
// import { BsArrowLeft } from 'react-icons/bs';
// import { Fade } from 'react-awesome-reveal';
// import { Link, useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';

// const ProductDetailScreen = () => {
//     const { title } = useParams();
//     const [data] = useFetch('products');

//     const product = data.find(item => item.title === title);

//     const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWMnag7FtT4KzUvjAmJTVMSkL3vu0iEkTptdw_WLx-nhNfPw/viewform";

//     return (
//         <section className="max-w-screen-xl py-24 mx-auto px-6 overflow-y-hidden">
//             <div className="flex flex-col justify-center items-center pt-24">
//                 {product && (
//                     <div className="p-6 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
//                         <div>
//                             <Fade direction="left">
//                                 <img className="w-full h-full mx-auto object-cover rounded-lg" src={product.image} alt="coverimg" />
//                             </Fade>
//                         </div>
//                         <div className="flex flex-col justify-center h-full">
//                             <Fade direction="left">
//                                 <div className="border-b border-gray-400 pb-4">
//                                     <h1 className="poppins text-gray-800 text-3xl">{product.title}</h1>
//                                     <p className=" text-gray-400 my-4">{product.description}</p>
//                                 </div>
//                                 <div className="py-6">
//                                     {product.priceOptions && product.priceOptions.length > 0 ? (
//                                         product.priceOptions.map(option => (
//                                             <div key={option.dosage} className="flex justify-between items-center py-2">
//                                                 <span className="text-gray-900 poppins">{option.dosage} </span>
//                                                 <span className="font-bold poppins text-gray-900">£{option.price.toFixed(2)}</span>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <h2 className="text-center font-bold poppins text-1xl">
//                                             <span className="text-purple-500">Out of stock.</span>
//                                         </h2>
//                                     )}
//                                 </div>
//                                 <button
//                                     disabled={!product.inStock}
//                                     className={` ${!product.inStock ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"} w-36 btn-primary py-3 px-4 poppins text-sm flex items-center space-x-3 text-center justify-center`}
//                                     onClick={() => {
//                                         if (product.inStock) {
//                                             window.open(googleFormUrl, '_blank');
//                                         }
//                                     }}
//                                 >
//                                     <span>Request Treatment</span>
//                                 </button>
//                             </Fade>
//                         </div>
//                         <Link to="/products" className="pt-4 text-purple-500 text-sm hover:underline flex items-center space-x-3">
//                             <BsArrowLeft /> <span>Back</span>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
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

                {/* Accordion Sections */}
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
                      </a>. This increases gradually to help manage side effects. The dose is increased every four weeks, as follows:
                    </p>
                    <table className="min-w-full bg-white border border-gray-200 mt-4">
                      <thead>
                        <tr className="bg-gray-100 text-center font-bold">
                          <th className="px-6 py-3">Week</th>
                          <th className="px-6 py-3">Dosage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6 py-4">Weeks 1-4</td>
                          <td className="px-6 py-4">2.5 mg weekly</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Weeks 5-8</td>
                          <td className="px-6 py-4">5 mg weekly</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Weeks 9-12</td>
                          <td className="px-6 py-4">7.5 mg weekly</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Weeks 13-16</td>
                          <td className="px-6 py-4">10 mg weekly</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Weeks 17-20</td>
                          <td className="px-6 py-4">12.5 mg weekly</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Week 21 onwards</td>
                          <td className="px-6 py-4">15 mg weekly</td>
                        </tr>
                      </tbody>
                    </table>
                  </Accordion>

                  <Accordion title="4. How to use Mounjaro®">
                    <p>
                      Mounjaro® is injected once a week into your stomach, thigh, or upper arm. It’s important to inject it on the same day each week. You can set a reminder to help you remember. Watch this{' '}
                      <a href="https://uk.lilly.com/diabetes/patient/obesity/mounjaro" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
                        video
                      </a>{' '}
                      for more details on how to inject. Note that alcohol swabs are not provided.
                    </p>
                  </Accordion>

                  <Accordion title="5. How to inject Mounjaro®">
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
                      It should not be used if you’re allergic to any of the ingredients. Your doctor will assess whether Mounjaro® is safe for you, especially if you:
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

                  <Accordion title="10. Weight loss treatments table">
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
}

export default ProductDetailScreen;


