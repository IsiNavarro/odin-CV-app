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

    if (type === 'education') setNewEducation(true);
    if (type === 'experience') setNewExperience(true);
  };

  const handleEducationForm = (e) => {
    function formatDate(date) {
      const options = { year: 'numeric', month: '2-digit' };
      return new Date(date).toLocaleString(undefined, options);
    }

    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues.startDate = formatDate(formValues.startDate);
    formValues.endDate = formatDate(formValues.endDate);
    formValues.id = uniqid();

    const newUserData = {
      ...userData,
      sections: {
        ...userData.sections,
        educations: [...userData.sections.educations, formValues],
      },
    };
    setUserData(newUserData);
    setNewEducation(false);
  };

  const handleExperienceForm = (e) => {
    function formatDate(date) {
      const options = { year: 'numeric', month: '2-digit' };
      return new Date(date).toLocaleString(undefined, options);
    }

    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues.startDate = formatDate(formValues.startDate);
    formValues.endDate = formatDate(formValues.endDate);
    formValues.id = uniqid();

    const newUserData = {
      ...userData,
      sections: {
        ...userData.sections,
        experiences: [...userData.sections.experiences, formValues],
      },
    };

    setUserData(newUserData);
    setNewExperience(false);
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center items-center gap-5">
      <FillIn
        data={userData}
        handlePersonalInfo={handlePersonalInfo}
        handleDeleteItem={handleDeleteItem}
        handleNewItem={handleNewItem}
        newEducation={newEducation}
        newExperience={newExperience}
        handleEducationForm={handleEducationForm}
        handleExperienceForm={handleExperienceForm}
      />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
