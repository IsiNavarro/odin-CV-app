import React, { useState } from 'react';
import CVDisplay from './components/CVDisplay';
import { sampleData } from './sampleData';
import uniqid from 'uniqid';
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
    <div className="w-full min-h-screen p-3 flex flex-col gap-5 bg-slate-100">
      <FillIn data={userData} handlePersonalInfo={handlePersonalInfo} />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
