import React, { useState } from 'react';
import { sampleData } from './sampleData';
import CVDisplay from './components/CVDisplay';
import FillIn from './components/FillIn';

function App() {
  const [userData, setUserData] = useState(sampleData);

  const handlePersonalInfo = (e) => {
    const value = e.target.value;
    console.log(e);
    const newPersonalInfo = {
      ...userData,
      personalInfo: { ...userData.personalInfo, [e.target.name]: value },
    };
    setUserData(newPersonalInfo);
  };

  const handleDeleteItem = (e) => {
    console.log(e.currentTarget.id);
    const newEducation = {
      ...userData,
      sections: {
        educations: userData.sections.educations.filter(
          (edu) => edu.id !== e.currentTarget.id
        ),
        experiences: userData.sections.experiences.filter(
          (experiences) => experiences.id !== e.currentTarget.id
        ),
      },
    };
    console.log(newEducation);
    setUserData(newEducation);
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center items-center gap-5 bg-slate-100">
      <FillIn
        data={userData}
        handlePersonalInfo={handlePersonalInfo}
        handleDeleteItem={handleDeleteItem}
      />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
