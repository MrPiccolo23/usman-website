// import React, { useState } from 'react';
// import Bounce from 'react-reveal/Bounce';
// import TextField from '../Form/TextField';

// const ContactForm = () => {
//     const [dobDay, setDobDay] = useState('');
//     const [dobMonth, setDobMonth] = useState('');
//     const [dobYear, setDobYear] = useState('');
//     const [confirmAge, setConfirmAge] = useState(false);
//     const [usingMedication, setUsingMedication] = useState(null);
//     const [currentMedication, setCurrentMedication] = useState('');
//     const [preferredTreatment, setPreferredTreatment] = useState('');
//     const [usedMedication, setUsedMedication] = useState(null);
//     const [lastUsedTimeframe, setLastUsedTimeframe] = useState('');
//     const [lastUsedMedicationName, setLastUsedMedicationName] = useState('');
//     const [sex, setSex] = useState('');
//     const [height, setHeight] = useState({ ft: '', in: '', cm: '' });
//     const [heightUnit, setHeightUnit] = useState('ft');
//     const [weight, setWeight] = useState({ st: '', lbs: '', kg: '' });
//     const [weightUnit, setWeightUnit] = useState('st');
//     const [ethnicBackground, setEthnicBackground] = useState('');
//     const [otherEthnicGroup, setOtherEthnicGroup] = useState('');
//     const [medicalConditions, setMedicalConditions] = useState([]);
//     const [eatingDisorder, setEatingDisorder] = useState(null);
//     const [eatingDisorderDetails, setEatingDisorderDetails] = useState('');
//     const [pregnancyStatus, setPregnancyStatus] = useState(null);
//     const [pregnancyDetails, setPregnancyDetails] = useState('');
//     const [otherConditions, setOtherConditions] = useState(null);
//     const [medication, setMedication] = useState(null);
//     const [medicationDetails, setMedicationDetails] = useState('');
//     const [allergies, setAllergies] = useState([]);
//     const [otherAllergies, setOtherAllergies] = useState('');
//     const [gpDetails, setGpDetails] = useState({ name: '', address: '' });
//     const [agreement, setAgreement] = useState(false);
    
//     const handleSubmit = () => {
//         // Redirect to Google Forms URL
//         window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfHaB-dxJuE5auE7rFStMszk5WEBo3JsnOtR4LZG_FdUI6Dnw/viewform?usp=sf_link';
//     };
//     const calculateAge = (day, month, year) => {
//         const today = new Date();
//         const birthDate = new Date(year, month - 1, day);
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDifference = today.getMonth() - birthDate.getMonth();

//         if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }

//         return age;
//     };

//     const isValidDate = dobDay.match(/^\d{2}$/) && dobMonth.match(/^\d{2}$/) && dobYear.match(/^\d{4}$/);
//     const age = isValidDate ? calculateAge(dobDay, dobMonth, dobYear) : null;

//     const Inputs = [
//         { id: 1, type: "text", placeholder: "Full Name" },
//         { id: 2, type: "email", placeholder: "Email" },
//         { id: 3, type: "number", placeholder: "Phone Number" },
//     ];

//     return (
//         <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit();
//         }}>
//             <div className="flex flex-col space-y-6">
//                 <Bounce left>
//                     <div>
//                         {/* Your form inputs here */}
//                         <TextField type="text" placeholder="Full Name" />
//                         <TextField type="email" placeholder="Email" />
//                         <TextField type="number" placeholder="Phone Number" />
//                     </div>
//                 </Bounce>
//             </div>

//             {/* Date of Birth Field */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <div className="flex space-x-2">
//                         <TextField
//                             type="text"
//                             placeholder="DD"
//                             value={dobDay}
//                             onChange={(e) => setDobDay(e.target.value)}
//                             maxLength={2} // Ensure only 2 digits can be entered
//                             className="w-12"
//                         />
//                         <TextField
//                             type="text"
//                             placeholder="MM"
//                             value={dobMonth}
//                             onChange={(e) => setDobMonth(e.target.value)}
//                             maxLength={2} // Ensure only 2 digits can be entered
//                             className="w-12"
//                         />
//                         <TextField
//                             type="text"
//                             placeholder="YYYY"
//                             value={dobYear}
//                             onChange={(e) => setDobYear(e.target.value)}
//                             maxLength={4} // Ensure only 4 digits can be entered
//                             className="w-16"
//                         />
//                     </div>
//                     {/* Show confirmation checkbox if the user is 18 or older */}
//                     {isValidDate && age >= 18 && (
//                         <div className="mt-4">
//                             <input
//                                 type="checkbox"
//                                 id="confirmAge"
//                                 checked={confirmAge}
//                                 onChange={(e) => setConfirmAge(e.target.checked)}
//                             />
//                             <label htmlFor="confirmAge" className="ml-2">
//                                 I can confirm I am over 18 years old
//                             </label>
//                         </div>
//                     )}
//                 </div>
//             </Bounce>

//             {/* Questionnaire Title */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <h3 className="text-gray-700 text-lg">Your treatment options</h3>
//                 </div>
//             </Bounce>

// {/* Current Medication */}
// <Bounce left>
//     <div className="mt-4">
//         <label>Are you currently using any weight loss medication?</label>
//         <div>
//             <input
//                 type="radio"
//                 id="usingYes"
//                 name="usingMedication"
//                 value="yes"
//                 onChange={() => setUsingMedication('yes')}
//             />
//             <label htmlFor="usingYes" className="ml-2">Yes</label>
//         </div>
//         <div>
//             <input
//                 type="radio"
//                 id="usingNo"
//                 name="usingMedication"
//                 value="no"
//                 onChange={() => setUsingMedication('no')}
//             />
//             <label htmlFor="usingNo" className="ml-2">No</label>
//         </div>
//         {usingMedication === 'yes' && (
//             <div className="mt-4">
//                 <label>Which weight loss medication are you currently taking?</label>
//                 <select
//                     value={currentMedication}
//                     onChange={(e) => setCurrentMedication(e.target.value)}
//                     className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                 >
//                     <option value="">Select Medication</option>
//                     <option value="Mounjaro">Mounjaro</option>
//                     <option value="Wegovy">Wegovy</option>
//                     <option value="Mysimba">Mysimba</option>
//                     <option value="Orlistat">Orlistat</option>
//                     <option value="Liraglutide">Liraglutide</option>
//                     <option value="Other">Other</option>
//                 </select>
//                 {currentMedication === 'Other' && (
//                     <div className="mt-4">
//                         <TextField
//                             type="text"
//                             placeholder="What other weight loss medication are you taking?"
//                             value={currentMedication === 'Other' ? '' : currentMedication}
//                             onChange={(e) => setCurrentMedication(e.target.value)}
//                         />
//                     </div>
//                 )}
//             </div>
//         )}
//         {usingMedication === 'no' && (
//             <div className="mt-4">
//                 <label>Which type of treatment would you prefer?</label>
//                 <select
//                     value={preferredTreatment}
//                     onChange={(e) => setPreferredTreatment(e.target.value)}
//                     className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                 >
//                     <option value="">Select Treatment</option>
//                     <option value="Mounjaro">Injections Mounjaro</option>
//                     <option value="Wegovy">Injections Wegovy</option>
//                     <option value="Tablets Mysimba">Tablets Mysimba</option>
//                     <option value="Capsules Orlistat">Capsules Orlistat</option>
//                     <option value="Liraglutide">Injections Liraglutide</option>
//                 </select>
//                 {preferredTreatment && (
//                     <div className="mt-4">
//                         <label>Select dosage & price</label>
//                         <select className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300">
//                             {preferredTreatment === 'Mounjaro' && (
//                                 <>
//                                     <option value="2.5mg">2.5mg £166</option>
//                                     <option value="5mg">5mg £166</option>
//                                     <option value="7.5mg">7.5mg £193</option>
//                                     <option value="10mg">10mg £193</option>
//                                     <option value="12.5mg">12.5mg £220</option>
//                                     <option value="15mg">15mg £220</option>
//                                 </>
//                             )}
//                             {preferredTreatment === 'Wegovy' && (
//                                 <>
//                                     <option value="0.25mg">0.25mg £169</option>
//                                     <option value="0.5mg">0.5mg £169</option>
//                                     <option value="1mg">1mg £169</option>
//                                     <option value="1.7mg">1.7mg £224</option>
//                                     <option value="2.4mg">2.4mg £269</option>
//                                 </>
//                             )}
//                             {preferredTreatment === 'Tablets Mysimba' && (
//                                 <option value="8mg/90mg">8mg/90mg £131.00</option>
//                             )}
//                             {preferredTreatment === 'Capsules Orlistat' && (
//                                 <option value="120mg">120mg £44.00</option>
//                             )}
//                             {preferredTreatment === 'Liraglutide' && (
//                                 <option value="Standard">Out of Stock</option>
//                             )}
//                         </select>
//                     </div>
//                 )}
//             </div>
//         )}
//     </div>
// </Bounce>

// {/* Used Medication Before */}
// <Bounce left>
//     <div className="mt-6">
//         <label>Have you ever used weight loss medication?</label>
//         <div>
//             <input
//                 type="radio"
//                 id="usedYes"
//                 name="usedMedication"
//                 value="yes"
//                 onChange={() => setUsedMedication('yes')}
//             />
//             <label htmlFor="usedYes" className="ml-2">Yes</label>
//         </div>
//         <div>
//             <input
//                 type="radio"
//                 id="usedNo"
//                 name="usedMedication"
//                 value="no"
//                 onChange={() => setUsedMedication('no')}
//             />
//             <label htmlFor="usedNo" className="ml-2">No</label>
//         </div>
//         {usedMedication === 'yes' && (
//             <div className="mt-4">
//                 <label>When did you last use weight loss medication?</label>
//                 <select
//                     value={lastUsedTimeframe}
//                     onChange={(e) => setLastUsedTimeframe(e.target.value)}
//                     className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                 >
//                     <option value="">Select Timeframe</option>
//                     <option value="less than 4 weeks ago">Less than 4 weeks ago</option>
//                     <option value="more than 4 weeks ago">More than 4 weeks ago</option>
//                 </select>
//                 <div className="mt-4">
//                     <label>Which weight loss medication did you last use? (e.g., Ozempic, Mounjaro)</label>
//                     <TextField
//                         type="text"
//                         placeholder="Type here"
//                         value={lastUsedMedicationName}
//                         onChange={(e) => setLastUsedMedicationName(e.target.value)}
//                     />
//                 </div>
//             </div>
//         )}
//     </div>
// </Bounce>

//             {/* About You */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <div>
//                         <h3 className="text-gray-700 text-lg">About you</h3>
//                         <div className="mt-4">
//                             <label>Please select your sex:</label>
//                             <div>
//                                 <input
//                                     type="radio"
//                                     id="sexMale"
//                                     name="sex"
//                                     value="Male"
//                                     onChange={(e) => setSex(e.target.value)}
//                                 />
//                                 <label htmlFor="sexMale" className="ml-2">Male</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="radio"
//                                     id="sexFemale"
//                                     name="sex"
//                                     value="Female"
//                                     onChange={(e) => setSex(e.target.value)}
//                                 />
//                                 <label htmlFor="sexFemale" className="ml-2">Female</label>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <label>Please enter your height:</label>
//                             {heightUnit === 'ft' ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         placeholder="5 ft"
//                                         value={height.ft}
//                                         onChange={(e) => setHeight({ ...height, ft: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="3 in"
//                                         value={height.in}
//                                         onChange={(e) => setHeight({ ...height, in: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setHeightUnit('cm')}
//                                         className="mt-2 text-purple-500 underline"
//                                     >
//                                         Switch to cm
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <input
//                                         type="text"
//                                         placeholder="170 cm"
//                                         value={height.cm}
//                                         onChange={(e) => setHeight({ ...height, cm: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setHeightUnit('ft')}
//                                         className="mt-2 text-purple-500 underline"
//                                     >
//                                         Switch to ft, in
//                                     </button>
//                                 </>
//                             )}
//                         </div>

//                         <div className="mt-4">
//                             <label>Please enter your current weight:</label>
//                             {weightUnit === 'st' ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         placeholder="10 st"
//                                         value={weight.st}
//                                         onChange={(e) => setWeight({ ...weight, st: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="3 lbs"
//                                         value={weight.lbs}
//                                         onChange={(e) => setWeight({ ...weight, lbs: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setWeightUnit('kg')}
//                                         className="mt-2 text-purple-500 underline"
//                                     >
//                                         Switch to kg
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <input
//                                         type="text"
//                                         placeholder="75 kg"
//                                         value={weight.kg}
//                                         onChange={(e) => setWeight({ ...weight, kg: e.target.value })}
//                                         className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setWeightUnit('st')}
//                                         className="mt-2 text-purple-500 underline"
//                                     >
//                                         Switch to st, lbs
//                                     </button>
//                                 </>
//                             )}
//                         </div>

//                         <div className="mt-4">
//                             <label>How would you describe your ethnic background?</label>
//                             <select
//                                 value={ethnicBackground}
//                                 onChange={(e) => setEthnicBackground(e.target.value)}
//                                 className="w-full px-4 py-3 mt-2 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
//                             >
//                                 <option value="">Select</option>
//                                 <option value="I'd prefer not to say">I'd prefer not to say</option>
//                                 <option value="Asian or Asian British">Asian or Asian British</option>
//                                 <option value="Black, Black British, Caribbean, African">Black, Black British, Caribbean, African</option>
//                                 <option value="Middle Eastern">Middle Eastern</option>
//                                 <option value="White">White</option>
//                                 <option value="None of the above">None of the above</option>
//                             </select>
//                             {ethnicBackground === 'None of the above' && (
//                                 <TextField
//                                     type="text"
//                                     placeholder="Please describe your ethnic group"
//                                     value={otherEthnicGroup}
//                                     onChange={(e) => setOtherEthnicGroup(e.target.value)}
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </Bounce>

//             {/* Medical History */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <div>
//                         <h3 className="text-gray-700 text-lg">Your medical history</h3>
//                         <div className="mt-4">
//                             <label>Do you have any of these conditions?</label>

//                             {/* Diabetes */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="diabetes"
//                                     value="Diabetes"
//                                     checked={medicalConditions.includes('Diabetes')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [...medicalConditions, e.target.value]
//                                             : medicalConditions.filter(cond => cond !== e.target.value)
//                                     )}
//                                 />
//                                 <label htmlFor="diabetes" className="ml-2">Diabetes</label>
//                             </div>
//                             {medicalConditions.includes('Diabetes') && (
//                                 <>
//                                     {/* Type 1 Diabetes */}
//                                     <div className="ml-4">
//                                         <input
//                                             type="checkbox"
//                                             id="type1"
//                                             value="Type 1"
//                                             checked={medicalConditions.includes('Type 1')}
//                                             onChange={(e) => setMedicalConditions(
//                                                 e.target.checked
//                                                     ? [...medicalConditions, e.target.value]
//                                                     : medicalConditions.filter(cond => cond !== e.target.value)
//                                             )}
//                                         />
//                                         <label htmlFor="type1" className="ml-2">Type 1</label>
//                                     </div>
//                                     {medicalConditions.includes('Type 1') && (
//                                         <div className="ml-6 mt-2">
//                                             <label>Are you using either tablets or injections for your diabetes?</label>
//                                             <div>
//                                                 <input
//                                                     type="radio"
//                                                     id="diabetesMedicationYes"
//                                                     name="diabetesMedication"
//                                                     value="yes"
//                                                     onChange={(e) => setMedication(e.target.value)}
//                                                 />
//                                                 <label htmlFor="diabetesMedicationYes" className="ml-2">Yes</label>
//                                             </div>
//                                             <div>
//                                                 <input
//                                                     type="radio"
//                                                     id="diabetesMedicationNo"
//                                                     name="diabetesMedication"
//                                                     value="no"
//                                                     onChange={(e) => setMedication(e.target.value)}
//                                                 />
//                                                 <label htmlFor="diabetesMedicationNo" className="ml-2">No</label>
//                                             </div>
//                                             {medication === 'yes' && (
//                                                 <TextField
//                                                     type="text"
//                                                     placeholder="Please list all the diabetes medications you're taking"
//                                                     value={medicationDetails}
//                                                     onChange={(e) => setMedicationDetails(e.target.value)}
//                                                 />
//                                             )}
//                                         </div>
//                                     )}

//                                     {/* Type 2 Diabetes */}
//                                     <div className="ml-4">
//                                         <input
//                                             type="checkbox"
//                                             id="type2"
//                                             value="Type 2"
//                                             checked={medicalConditions.includes('Type 2')}
//                                             onChange={(e) => setMedicalConditions(
//                                                 e.target.checked
//                                                     ? [...medicalConditions, e.target.value]
//                                                     : medicalConditions.filter(cond => cond !== e.target.value)
//                                             )}
//                                         />
//                                         <label htmlFor="type2" className="ml-2">Type 2</label>
//                                     </div>
//                                     {medicalConditions.includes('Type 2') && (
//                                         <div className="ml-6 mt-2">
//                                             <label>Are you using either tablets or injections for your diabetes?</label>
//                                             <div>
//                                                 <input
//                                                     type="radio"
//                                                     id="diabetesMedicationYes2"
//                                                     name="diabetesMedication2"
//                                                     value="yes"
//                                                     onChange={(e) => setMedication(e.target.value)}
//                                                 />
//                                                 <label htmlFor="diabetesMedicationYes2" className="ml-2">Yes</label>
//                                             </div>
//                                             <div>
//                                                 <input
//                                                     type="radio"
//                                                     id="diabetesMedicationNo2"
//                                                     name="diabetesMedication2"
//                                                     value="no"
//                                                     onChange={(e) => setMedication(e.target.value)}
//                                                 />
//                                                 <label htmlFor="diabetesMedicationNo2" className="ml-2">No</label>
//                                             </div>
//                                             {medication === 'yes' && (
//                                                 <TextField
//                                                     type="text"
//                                                     placeholder="Please list all the diabetes medications you're taking"
//                                                     value={medicationDetails}
//                                                     onChange={(e) => setMedicationDetails(e.target.value)}
//                                                 />
//                                             )}
//                                         </div>
//                                     )}
//                                 </>
//                             )}

//                             {/* Pre-diabetes */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="preDiabetes"
//                                     value="Pre-diabetes"
//                                     checked={medicalConditions.includes('Pre-diabetes')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [...medicalConditions, e.target.value]
//                                             : medicalConditions.filter(cond => cond !== e.target.value)
//                                     )}
//                                 />
//                                 <label htmlFor="preDiabetes" className="ml-2">Pre-diabetes</label>
//                             </div>
//                             {medicalConditions.includes('Pre-diabetes') && (
//                                 <div className="ml-6 mt-2">
//                                     <label>Are you taking any pre-diabetes medication?</label>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="preDiabetesMedicationYes"
//                                             name="preDiabetesMedication"
//                                             value="yes"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="preDiabetesMedicationYes" className="ml-2">Yes</label>
//                                     </div>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="preDiabetesMedicationNo"
//                                             name="preDiabetesMedication"
//                                             value="no"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="preDiabetesMedicationNo" className="ml-2">No</label>
//                                     </div>
//                                     {medication === 'yes' && (
//                                         <TextField
//                                             type="text"
//                                             placeholder="Please list all the pre-diabetes medications you're taking"
//                                             value={medicationDetails}
//                                             onChange={(e) => setMedicationDetails(e.target.value)}
//                                         />
//                                     )}
//                                 </div>
//                             )}

//                             {/* High Blood Pressure */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="hypertension"
//                                     value="High blood pressure (hypertension)"
//                                     checked={medicalConditions.includes('High blood pressure (hypertension)')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [...medicalConditions, e.target.value]
//                                             : medicalConditions.filter(cond => cond !== e.target.value)
//                                     )}
//                                 />
//                                 <label htmlFor="hypertension" className="ml-2">High blood pressure (hypertension)</label>
//                             </div>
//                             {medicalConditions.includes('High blood pressure (hypertension)') && (
//                                 <div className="ml-6 mt-2">
//                                     <label>Are you taking any blood pressure medication?</label>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="hypertensionMedicationYes"
//                                             name="hypertensionMedication"
//                                             value="yes"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="hypertensionMedicationYes" className="ml-2">Yes</label>
//                                     </div>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="hypertensionMedicationNo"
//                                             name="hypertensionMedication"
//                                             value="no"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="hypertensionMedicationNo" className="ml-2">No</label>
//                                     </div>
//                                     {medication === 'yes' && (
//                                         <TextField
//                                             type="text"
//                                             placeholder="Please list all the blood pressure medications you're taking"
//                                             value={medicationDetails}
//                                             onChange={(e) => setMedicationDetails(e.target.value)}
//                                         />
//                                     )}
//                                 </div>
//                             )}

//                             {/* High Cholesterol */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="cholesterol"
//                                     value="High cholesterol"
//                                     checked={medicalConditions.includes('High cholesterol')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [...medicalConditions, e.target.value]
//                                             : medicalConditions.filter(cond => cond !== e.target.value)
//                                     )}
//                                 />
//                                 <label htmlFor="cholesterol" className="ml-2">High cholesterol</label>
//                             </div>
//                             {medicalConditions.includes('High cholesterol') && (
//                                 <div className="ml-6 mt-2">
//                                     <label>Are you taking any cholesterol medication?</label>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="cholesterolMedicationYes"
//                                             name="cholesterolMedication"
//                                             value="yes"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="cholesterolMedicationYes" className="ml-2">Yes</label>
//                                     </div>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="cholesterolMedicationNo"
//                                             name="cholesterolMedication"
//                                             value="no"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="cholesterolMedicationNo" className="ml-2">No</label>
//                                     </div>
//                                     {medication === 'yes' && (
//                                         <TextField
//                                             type="text"
//                                             placeholder="Please list all the cholesterol medications you're taking"
//                                             value={medicationDetails}
//                                             onChange={(e) => setMedicationDetails(e.target.value)}
//                                         />
//                                     )}
//                                 </div>
//                             )}

//                             {/* Obstructive Sleep Apnoea */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="osa"
//                                     value="Obstructive sleep apnoea (OSA)"
//                                     checked={medicalConditions.includes('Obstructive sleep apnoea (OSA)')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [...medicalConditions, e.target.value]
//                                             : medicalConditions.filter(cond => cond !== e.target.value)
//                                     )}
//                                 />
//                                 <label htmlFor="osa" className="ml-2">Obstructive sleep apnoea (OSA)</label>
//                             </div>
//                             {medicalConditions.includes('Obstructive sleep apnoea (OSA)') && (
//                                 <div className="ml-6 mt-2">
//                                     <label>Are you taking any medication for your obstructive sleep apnoea (OSA)?</label>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="osaMedicationYes"
//                                             name="osaMedication"
//                                             value="yes"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="osaMedicationYes" className="ml-2">Yes</label>
//                                     </div>
//                                     <div>
//                                         <input
//                                             type="radio"
//                                             id="osaMedicationNo"
//                                             name="osaMedication"
//                                             value="no"
//                                             onChange={(e) => setMedication(e.target.value)}
//                                         />
//                                         <label htmlFor="osaMedicationNo" className="ml-2">No</label>
//                                     </div>
//                                     {medication === 'yes' && (
//                                         <TextField
//                                             type="text"
//                                             placeholder="Please list all the OSA medications you're taking"
//                                             value={medicationDetails}
//                                             onChange={(e) => setMedicationDetails(e.target.value)}
//                                         />
//                                     )}
//                                 </div>
//                             )}

//                             {/* No Conditions */}
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="noConditions"
//                                     value="No, none of these"
//                                     checked={medicalConditions.includes('No, none of these')}
//                                     onChange={(e) => setMedicalConditions(
//                                         e.target.checked
//                                             ? [e.target.value]
//                                             : []
//                                     )}
//                                 />
//                                 <label htmlFor="noConditions" className="ml-2">No, none of these</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Bounce>

//             {/* Eating Disorder */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Have you ever been diagnosed with an eating disorder?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             id="eatingDisorderYes"
//                             name="eatingDisorder"
//                             value="yes"
//                             onChange={() => setEatingDisorder('yes')}
//                         />
//                         <label htmlFor="eatingDisorderYes" className="ml-2">Yes</label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="eatingDisorderNo"
//                             name="eatingDisorder"
//                             value="no"
//                             onChange={() => setEatingDisorder('no')}
//                         />
//                         <label htmlFor="eatingDisorderNo" className="ml-2">No</label>
//                     </div>
//                     {eatingDisorder === 'yes' && (
//                         <TextField
//                             type="text"
//                             placeholder="What kind of eating disorder have you had? (e.g., bulimia, anorexia)"
//                             value={eatingDisorderDetails}
//                             onChange={(e) => setEatingDisorderDetails(e.target.value)}
//                         />
//                     )}
//                 </div>
//             </Bounce>

//             {/* Pregnancy Status */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Are you currently pregnant, breastfeeding, or trying to get pregnant?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             id="pregnancyYes"
//                             name="pregnancyStatus"
//                             value="yes"
//                             onChange={() => setPregnancyStatus('yes')}
//                         />
//                         <label htmlFor="pregnancyYes" className="ml-2">Yes</label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="pregnancyNo"
//                             name="pregnancyStatus"
//                             value="no"
//                             onChange={() => setPregnancyStatus('no')}
//                         />
//                         <label htmlFor="pregnancyNo" className="ml-2">No</label>
//                     </div>
//                     {pregnancyStatus === 'yes' && (
//                         <div className="ml-4">
//                             <input
//                                 type="checkbox"
//                                 id="pregnant"
//                                 value="I am pregnant"
//                                 onChange={(e) => setPregnancyDetails(e.target.value)}
//                             />
//                             <label htmlFor="pregnant" className="ml-2">I am pregnant</label>
//                             <br />
//                             <input
//                                 type="checkbox"
//                                 id="tryingPregnant"
//                                 value="I am trying but not pregnant yet"
//                                 onChange={(e) => setPregnancyDetails(e.target.value)}
//                             />
//                             <label htmlFor="tryingPregnant" className="ml-2">I am trying but not pregnant yet</label>
//                             <br />
//                             <input
//                                 type="checkbox"
//                                 id="breastfeeding"
//                                 value="I am breastfeeding"
//                                 onChange={(e) => setPregnancyDetails(e.target.value)}
//                             />
//                             <label htmlFor="breastfeeding" className="ml-2">I am breastfeeding</label>
//                             <br />
//                             <input
//                                 type="checkbox"
//                                 id="otherPregnancy"
//                                 value="Other"
//                                 onChange={(e) => setPregnancyDetails(e.target.value)}
//                             />
//                             <label htmlFor="otherPregnancy" className="ml-2">Other</label>
//                         </div>
//                     )}
//                 </div>
//             </Bounce>

//             {/* Other Conditions */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Are there any other significant illnesses or medical conditions that you haven’t mentioned already?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             id="otherConditionsYes"
//                             name="otherConditions"
//                             value="yes"
//                             onChange={() => setOtherConditions('yes')}
//                         />
//                         <label htmlFor="otherConditionsYes" className="ml-2">Yes</label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="otherConditionsNo"
//                             name="otherConditions"
//                             value="no"
//                             onChange={() => setOtherConditions('no')}
//                         />
//                         <label htmlFor="otherConditionsNo" className="ml-2">No</label>
//                     </div>
//                     {otherConditions === 'yes' && (
//                         <TextField
//                             type="text"
//                             placeholder="Please tell us more"
//                             value={otherConditions !== 'yes' ? otherConditions : ''}
//                             onChange={(e) => setOtherConditions(e.target.value)}
//                         />
//                     )}
//                 </div>
//             </Bounce>


//             {/* Current Medications */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Do you currently take any medication, or have you recently finished a course of medication, that you haven't mentioned already?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             id="medicationYes"
//                             name="medication"
//                             value="yes"
//                             onChange={() => setMedication('yes')}
//                         />
//                         <label htmlFor="medicationYes" className="ml-2">Yes</label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="medicationNo"
//                             name="medication"
//                             value="no"
//                             onChange={() => setMedication('no')}
//                         />
//                         <label htmlFor="medicationNo" className="ml-2">No</label>
//                     </div>
//                     {medication === 'yes' && (
//                         <TextField
//                             type="text"
//                             placeholder="Please tell us the name, doses and use of these medications"
//                             value={medicationDetails}
//                             onChange={(e) => setMedicationDetails(e.target.value)}
//                         />
//                     )}
//                 </div>
//             </Bounce>

//             {/* Allergies */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Are you allergic to any medicines or other substances?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             id="allergiesYes"
//                             name="allergies"
//                             value="yes"
//                             onChange={() => setAllergies([])}
//                         />
//                         <label htmlFor="allergiesYes" className="ml-2">Yes</label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="allergiesNo"
//                             name="allergies"
//                             value="no"
//                             onChange={() => setAllergies('no')}
//                         />
//                         <label htmlFor="allergiesNo" className="ml-2">No</label>
//                     </div>
//                     {Array.isArray(allergies) && (
//                         <div className="mt-4">
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="tirzepatide"
//                                     value="Tirzepatide (Mounjaro)"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="tirzepatide" className="ml-2">Tirzepatide (Mounjaro)</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="semaglutide"
//                                     value="Semaglutide (Wegovy)"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="semaglutide" className="ml-2">Semaglutide (Wegovy)</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="mysimba"
//                                     value="Mysimba (bupropion or naltrexone)"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="mysimba" className="ml-2">Mysimba (bupropion or naltrexone)</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="orlistat"
//                                     value="Orlistat"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="orlistat" className="ml-2">Orlistat</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="peanuts"
//                                     value="Peanuts"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="peanuts" className="ml-2">Peanuts</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="soya"
//                                     value="Soya"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="soya" className="ml-2">Soya</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="lactose"
//                                     value="Lactose"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="lactose" className="ml-2">Lactose</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="otherAllergies"
//                                     value="Other"
//                                     onChange={(e) => setAllergies([...allergies, e.target.value])}
//                                 />
//                                 <label htmlFor="otherAllergies" className="ml-2">Other</label>
//                             </div>
//                             {allergies.includes('Other') && (
//                                 <TextField
//                                     type="text"
//                                     placeholder="Please tell us what medications or substances you’re allergic to."
//                                     value={otherAllergies}
//                                     onChange={(e) => setOtherAllergies(e.target.value)}
//                                 />
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </Bounce>

//             {/* GP Details */}
//             <Bounce left>
//                 <div className="mt-4">
//                     <label>Your GP</label>
//                     <TextField
//                         type="text"
//                         placeholder="GP Name"
//                         value={gpDetails.name}
//                         onChange={(e) => setGpDetails({ ...gpDetails, name: e.target.value })}
//                     />
//                     <TextField
//                         type="text"
//                         placeholder="GP Address"
//                         value={gpDetails.address}
//                         onChange={(e) => setGpDetails({ ...gpDetails, address: e.target.value })}
//                     />
//                 </div>
//             </Bounce>

//             {/* Agreement */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <div>
//                         <label>Important information to review</label>
//                         <div className="mt-2">
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="agreement1"
//                                     value="You must let us know if your medical situation changes or if you start a different medication before beginning treatment with us."
//                                     onChange={(e) => setAgreement(e.target.checked)}
//                                 />
//                                 <label htmlFor="agreement1" className="ml-2">You must let us know if your medical situation changes or if you start a different medication before beginning treatment with us. Send us an email: Sthelens.usman.ishaq@gmail.com.</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="agreement2"
//                                     value="Our pharmacists will take your BMI and medical history into consideration and may prescribe off-label when making a decision about treatment."
//                                     onChange={(e) => setAgreement(e.target.checked)}
//                                 />
//                                 <label htmlFor="agreement2" className="ml-2">Our pharmacists will take your BMI and medical history into consideration and may prescribe off-label when making a decision about treatment.</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="agreement3"
//                                     value="Prescribed weight loss medication is only effective alongside other lifestyle changes such as eating a low-calorie diet and physical activity."
//                                     onChange={(e) => setAgreement(e.target.checked)}
//                                 />
//                                 <label htmlFor="agreement3" className="ml-2">Prescribed weight loss medication is only effective alongside other lifestyle changes such as eating a low-calorie diet and physical activity.</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="agreement4"
//                                     value="This medication is for my personal use only. I understand and have answered the questions above honestly. I understand the side effects and effectiveness of these treatment options."
//                                     onChange={(e) => setAgreement(e.target.checked)}
//                                 />
//                                 <label htmlFor="agreement4" className="ml-2">This medication is for my personal use only. I understand and have answered the questions above honestly. I understand the side effects and effectiveness of these treatment options.</label>
//                             </div>
//                             <div>
//                                 <input
//                                     type="checkbox"
//                                     id="agreement5"
//                                     value="I have read, understand, and agree to St Helens pharmacy group's terms and conditions and privacy and cookie policy."
//                                     onChange={(e) => setAgreement(e.target.checked)}
//                                 />
//                                 <label htmlFor="agreement5" className="ml-2">I have read, understand, and agree to St Helens pharmacy group's terms and conditions and privacy and cookie policy.</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Bounce>

//             {/* Submit Button */}
//             <Bounce left>
//                 <div className="mt-6">
//                     <button
//                         type="submit"
//                         className="bg-purple-500 hover:bg-purple-600 btn-primary px-6 py-3 w-36"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </Bounce>
//         </form>
//     );
// };

// export default ContactForm;

import React from 'react';
import Bounce from 'react-reveal/Bounce';
import TextField from '../Form/TextField';

const ContactForm = () => {

    // Form inputs
    const Inputs = [
        { id: 1, type: "text", placeholder: "Full Name" },
        { id: 2, type: "email", placeholder: "Email" },
        { id: 3, type: "number", placeholder: "Phone Number" },
    ];

    return (
        <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-6">
                <Bounce left>
                    {Inputs.map(input => (
                        <TextField
                            key={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            className="w-full px-4 py-3 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
                        />
                    ))}
                </Bounce>
            </div>

            {/* Text field */}
            <Bounce left>
                <div className="mt-6">
                    <textarea placeholder="Your Message" className="w-full px-4 py-3 h-36 rounded-lg ring-purple-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"></textarea>
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 w-36 mt-6 rounded-lg transition duration-300">
                    Submit
                </button>
            </Bounce>
        </form>
    );
}

export default ContactForm;

