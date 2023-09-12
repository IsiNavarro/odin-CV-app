import React, { useState } from 'react';
import uniqid from 'uniqid';
import { sampleData } from './sampleData';
import CVDisplay from './components/CVDisplay';
import FillIn from './components/FillIn';

function App() {
  const [userData, setUserData] = useState(sampleData);

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

      setUserData(newUserData);
    } else {
      const newUserData = {
        ...userData,
        sections: {
          ...userData.sections,
          experiences: [
            ...userData.sections.experiences,
            {
              companyName: 'SwissTech Solutions AG',
              positionTitle: 'Senior Business Analyst',
              location: 'Zürich, Schweiz',
              description:
                'Conducting market research and data analysis to identify business opportunities',
              startDate: '10/2022',
              endDate: 'present',
              id: uniqid(),
            },
          ],
        },
      };

      setUserData(newUserData);
    }
  };

  return (
    <div className="w-full p-3 flex flex-col lg:flex-row justify-center items-center gap-5">
      <FillIn
        data={userData}
        handlePersonalInfo={handlePersonalInfo}
        handleDeleteItem={handleDeleteItem}
        handleNewItem={handleNewItem}
      />
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
