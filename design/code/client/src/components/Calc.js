import React, { useState } from 'react';

const Calc = () => {
  // State for input fields
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');  // Sedentary as default

  // State for output values
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [bfp, setBfp] = useState(null);
  const [ibw, setIbw] = useState(null);
  const [whr, setWhr] = useState(null);
  const [absi, setAbsi] = useState(null);
  const [tdee, setTdee] = useState(null);

  // Health standards for conditional coloring
  const bmiHealthyRange = { min: 18.5, max: 24.9 };
  const bfpHealthyRangeMale = { min: 8, max: 20 };
  const bfpHealthyRangeFemale = { min: 21, max: 33 };
  const whrHealthyRangeMale = { max: 0.9 };
  const whrHealthyRangeFemale = { max: 0.85 };

  const getHealthColor = (value, range) => {
    if (value < range.min || value > range.max) {
      return 'red';
    }
    return 'green';
  };

  // Convert weight from pounds to kg for calculation purposes
  const weightInKg = weight * 0.453592;
  // Convert height from inches to meters for calculation purposes
  const heightInMeters = height * 0.0254;

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const calculateBMR = () => {
    if (weight && height && age) {
      const bmrValue = gender === 'male'
        ? (10 * weightInKg) + (6.25 * (height * 2.54)) - (5 * age) + 5
        : (10 * weightInKg) + (6.25 * (height * 2.54)) - (5 * age) - 161;
      setBmr(bmrValue.toFixed(2));
    }
  };

  const calculateBFP = () => {
    const bmiValue = weightInKg / ((heightInMeters) ** 2);
    const bfpValue = (1.20 * bmiValue) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
    setBfp(bfpValue.toFixed(2));
  };

  const calculateIBW = () => {
    const ibwValue = gender === 'male'
      ? 156 + 2.3 * (height - 60)
      : 100 + 2.3 * (height - 60);
    setIbw(ibwValue.toFixed(2));
  };

  const calculateWHR = () => {
    const whrValue = waist / hip;
    setWhr(whrValue.toFixed(2));
  };

  const calculateABSI = () => {
    const bmiValue = weightInKg / ((heightInMeters) ** 2);
    const absiValue = waist / 39.37 / (Math.pow(bmiValue, 2/3) * Math.pow(heightInMeters, 1/2));
    setAbsi(absiValue.toFixed(4));
  };

  const calculateTDEE = () => {
    const bmrValue = gender === 'male'
      ? (10 * weightInKg) + (6.25 * (height * 2.54)) - (5 * age) + 5
      : (10 * weightInKg) + (6.25 * (height * 2.54)) - (5 * age) - 161;
    const tdeeValue = bmrValue * activityLevel;
    setTdee(tdeeValue.toFixed(2));
  };

  // Function to reset all states
  const resetValues = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setWaist('');
    setHip('');
    setActivityLevel('1.2');
    setBmi(null);
    setBmr(null);
    setBfp(null);
    setIbw(null);
    setWhr(null);
    setAbsi(null);
    setTdee(null);
  };


  return (
    <div style={{ padding: '40px', fontSize: '18px' }}>
      <h1 style={{ color: '#123A6D' }}>Health Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'space-between' }}>

        {/* Input fields in separate rows */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px', justifyContent: 'space-between', marginTop: '50px' }}>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (lbs)" style={{ flexBasis: '30%', fontSize: '18px' }} />
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (in)" style={{ flexBasis: '30%', fontSize: '18px' }} />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age (years)" style={{ flexBasis: '30%', fontSize: '18px' }} />
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ flexBasis: '30%', fontSize: '18px' }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Waist (in)" style={{ flexBasis: '30%', fontSize: '18px' }} />
          <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Hip (in)" style={{ flexBasis: '30%', fontSize: '18px' }} />
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} style={{ flexBasis: '30%', fontSize: '18px' }}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Extra active</option>
          </select>
        </div>
      
      <div style={{ flexBasis: '30%', marginTop: '50px' }}>
        <p>Body Mass Index (BMI) - A measure of body fat based on height and weight.</p>
        <button onClick={calculateBMI} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BMI</button>
      </div>
      
      <div style={{ flexBasis: '30%' , marginTop: '50px'}}>
        <p>Basal Metabolic Rate (BMR) - The number of calories your body needs to accomplish basic life-sustaining functions.</p>
        <button onClick={calculateBMR} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BMR</button>
      </div>
      
      <div style={{ flexBasis: '30%' , marginTop: '50px'}}>
        <p>Ideal Body Weight (IBW) - The optimal weight associated with maximum life expectancy for a given height.</p>
        <button onClick={calculateIBW} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate IBW</button>
      </div>
      
      <div style={{ flexBasis: '30%', marginTop: '50px' }}>
        <p>Body Fat Percentage (BFP) - The percentage of your body mass that is made up of fat.</p>
        <button onClick={calculateBFP} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BFP</button>
      </div>
      
      <div style={{ flexBasis: '30%', marginTop: '50px' }}>
        <p>Waist to Hip Ratio (WHR) - Indicates your probable health risks based on the distribution of fat in your body.</p>
        <button onClick={calculateWHR} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate WHR</button>
      </div>
      
      <div style={{ flexBasis: '30%' , marginTop: '50px'}}>
        <p>A Body Shape Index (ABSI) - A measure of body roundness or belly fat independent of BMI.</p>
        <button onClick={calculateABSI} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate ABSI</button>
      </div>
      
      <div style={{ flexBasis: '30%', marginTop: '50px' }}>
        <p>Total Daily Energy Expenditure (TDEE) - The total number of calories you burn in a day.</p>
        <button onClick={calculateTDEE} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate TDEE</button>
      </div>

  </div>


  <div style={{ marginTop: '100px', fontSize: '20px', backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#123A6D', marginBottom: '20px' }}>Output Values</h2>
          <div style={{ marginBottom: '10px', color: bmi ? getHealthColor(bmi, bmiHealthyRange) : 'black' }}>
            Body Mass Index (BMI) Healthy range: 18.5 - 24.9:
            <p>{bmi}</p> 
            <br></br>
          </div>
          <div style={{ marginBottom: '10px' }}>Basal Metabolic Rate (BMR):
          <p> {bmr} calories per day.</p>
          <br></br> 
          </div>
          <div style={{ marginBottom: '10px', color: bfp ? (gender === 'male' ? getHealthColor(bfp, bfpHealthyRangeMale) : getHealthColor(bfp, bfpHealthyRangeFemale)) : 'black' }}>
            Body Fat Percentage (BFP) Male: 8-20%, Female: 21-33%: 
            <p> {bfp}%</p> 
            <br></br>
          </div>
          <div style={{ marginBottom: '10px' }}>Ideal Body Weight (IBW): 
          <p> {ibw} Ibs</p> 
          <br></br>
          </div>
          <div style={{ marginBottom: '10px', color: whr ? (gender === 'male' ? getHealthColor(whr, whrHealthyRangeMale) : getHealthColor(whr, whrHealthyRangeFemale)) : 'black' }}>
            Waist to Hip Ratio (WHR) Male: {"<"} 0.9, Female: {"<"} 0.85: 
            <p> {whr}</p> 
          <br></br>
          </div>
          <div style={{ marginBottom: '10px' }}>A Body Shape Index (ABSI): 
          <p> {absi}</p> 
          <br></br>
          </div>
          <div style={{ marginBottom: '10px' }}>Total Daily Energy Expenditure (TDEE): 
          <p> {tdee} calories</p> 
          <br></br>
          </div>
        </div>

         <button onClick={resetValues} style={{ marginTop: '20px', backgroundColor: '#123A6D', color: 'white', padding: '10px 20px', fontSize: '18px', borderRadius: '5px' }}>
        Clear
      </button>
    </div>
      
    
  );
};

export default Calc;