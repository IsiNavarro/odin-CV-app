import React, { useState } from 'react';
import uniqid from 'uniqid';
import { FaFilePdf } from 'react-icons/fa';
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
  const handleCancelButton = (e) => {
    e.preventDefault;
    const type = e.currentTarget.id;

    if (type === 'education') setNewEducation(false);
    if (type === 'experience') setNewExperience(false);
  };
  const PDFButton = () => {
    return (
      <button className="flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-2 py-1 pt-2 rounded-sm self-stretch">
        <FaFilePdf size={30} className="mb-2" />
        View PDF
      </button>
    );
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <PDFButton />
        <FillIn
          data={userData}
          handlePersonalInfo={handlePersonalInfo}
          handleDeleteItem={handleDeleteItem}
          handleNewItem={handleNewItem}
          newEducation={newEducation}
          newExperience={newExperience}
          handleEducationForm={handleEducationForm}
          handleExperienceForm={handleExperienceForm}
          handleCancelButton={handleCancelButton}
        />
      </div>

      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
