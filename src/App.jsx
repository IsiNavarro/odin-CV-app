import React, { useState } from 'react';
import { sampleData } from './sampleData';
import CVDisplay from './components/CVDisplay';
import FillIn from './components/FillIn';

function App() {
  const [userData, setUserData] = useState(sampleData);

  const handlePersonalInfo = (e) => {
    const value = e.target.value;
    console.log(value);
    const newPersonalInfo = {
      ...userData,
      personalInfo: { ...userData.personalInfo, [e.target.name]: value },
    };
    setUserData(newPersonalInfo);
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center items-center gap-5 bg-slate-100">
      <FillIn data={userData} handlePersonalInfo={handlePersonalInfo} />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
