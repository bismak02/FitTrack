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

  // BFP, IBW, WHR, ABSI, TDEE Calculation functions go here
  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmi(bmiValue);
    }
  };
  const calculateBMR = () => {
    if (weight && height && age) {
      const bmrValue = gender === 'male'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;
      setBmr(bmrValue.toFixed(2));
    }
  };
    
  const calculateBFP = () => {
  const bmiValue = weight / ((height / 100) ** 2);
  const bfpValue = (1.20 * bmiValue) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
  setBfp(bfpValue.toFixed(2));
};

const calculateIBW = () => {
  const heightInInches = (height / 2.54);
  const ibwValue = gender === 'male'
    ? 50 + 2.3 * (heightInInches - 60)
    : 45.5 + 2.3 * (heightInInches - 60);
  setIbw(ibwValue.toFixed(2));
};

const calculateWHR = () => {
  const whrValue = waist / hip;
  setWhr(whrValue.toFixed(2));
};

const calculateABSI = () => {
  const bmiValue = weight / ((height / 100) ** 2);
  const absiValue = waist / 100 / (Math.pow(bmiValue, 2/3) * Math.pow(height / 100, 1/2));
  setAbsi(absiValue.toFixed(4));
};

const calculateTDEE = () => {
  const bmrValue = gender === 'male'
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;
  const tdeeValue = bmrValue * activityLevel;
  setTdee(tdeeValue.toFixed(2));
};

return (
  <div style={{ padding: '40px', fontSize: '18px' }}>
    <h1>Health Calculators</h1>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
      <div style={{ flex: '1' }}>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }} />
        <button onClick={calculateBMI} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BMI</button>
      </div>
      <div style={{ flex: '1' }}>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }} />
        <button onClick={calculateBMR} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BMR</button>
      </div>
      <div style={{ flex: '1' }}>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age (years)" style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }} />
        <button onClick={calculateIBW} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate IBW</button>
      </div>
      <div style={{ flex: '1' }}>
        <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button onClick={calculateBFP} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate BFP</button>
      </div>
      <div style={{ flex: '1' }}>
        <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Waist (cm)" style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }} />
        <button onClick={calculateWHR} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate WHR</button>
      </div>
      <div style={{ flex: '1' }}>
        <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Hip (cm)" style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }} />
        <button onClick={calculateABSI} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate ABSI</button>
      </div>
      <div style={{ flex: '1' }}>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} style={{ width: '100%', marginBottom: '10px', fontSize: '18px' }}>
          <option value="1.2">Sedentary</option>
          <option value="1.375">Lightly active</option>
          <option value="1.55">Moderately active</option>
          <option value="1.725">Very active</option>
          <option value="1.9">Extra active</option>
        </select>
        <button onClick={calculateTDEE} style={{ backgroundColor: '#123A6D', color: 'white', width: '100%', fontSize: '18px' }}>Calculate TDEE</button>
      </div>
    </div>

    {/* Display results */}
    <div style={{ marginTop: '50px', fontSize: '20px' }}>
      <div>BMI: {bmi}</div>
      <div>BMR: {bmr}</div>
      <div>BFP: {bfp}</div>
      <div>IBW: {ibw}</div>
      <div>WHR: {whr}</div>
      <div>ABSI: {absi}</div>
      <div>TDEE: {tdee}</div>
    </div>
  </div>
);

};

export default Calc;