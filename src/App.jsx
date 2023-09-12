import React, { useState } from 'react';
import uniqid from 'uniqid';
import { sampleData } from './sampleData';
import CVDisplay from './components/CVDisplay';
import FillIn from './components/FillIn';

function App() {
  const [userData, setUserData] = useState(sampleData);
  const [newEducation, setNewEducation] = useState(false);
  const [newExperience, setNewExperience] = useState(false);

  const handlePersonalInfo = (e) => {
    const value = e.target.value;
    const newPersonalInfo = {
      ...userData,
      personalInfo: { ...userData.personalInfo, [e.target.name]: value },
    };
    setUserData(newPersonalInfo);
  };

  const handleDeleteItem = (e) => {
    const newUserData = {
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

    setUserData(newUserData);
  };

  const handleNewItem = (e) => {
    const type = e.currentTarget.id;
    console.log(type);

    if (type === 'education') {
      const newUserData = {
        ...userData,
        sections: {
          ...userData.sections,
          educations: [
            ...userData.sections.educations,
            {
              degree: 'M.Sc. in Business Administration',
              schoolName: 'University of Zürich',
              location: 'Zürich, Schweiz',
              startDate: '01/2023',
              endDate: 'present',
              id: uniqid(),
            },
          ],
        },
      };

      setNewEducation(true);
      setUserData(newUserData);
    } else {
      const newUserData = {
        ...userData,
        sections: {
          ...userData.sections,
          experiences: [
            ...userData.sections.experiences,
            {
              companyName: '',
              positionTitle: '',
              location: '',
              description: '',
              startDate: '',
              endDate: '',
              id: uniqid(),
            },
          ],
        },
      };

      setUserData(newUserData);
    }
  };

  const handleEducationForm = (e) => {
    const value = e.target.value;
    console.log(value);

    const updatedData = { ...userData };

    updatedData.sections.educations[updatedData.sections.educations.length - 1][
      e.target.name
    ] = value;

    setUserData(updatedData);
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center items-center gap-5">
      <FillIn
        data={userData}
        handlePersonalInfo={handlePersonalInfo}
        handleDeleteItem={handleDeleteItem}
        handleNewItem={handleNewItem}
        newEducation={newEducation}
        handleEducationForm={handleEducationForm}
      />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
