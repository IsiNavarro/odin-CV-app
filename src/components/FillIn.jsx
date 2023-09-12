import React from 'react';
import FillInPersonalInfo from './FillInPersonalInfo';
import FillInExperience from './FillInExperience';
import FillInEducation from './FillInEducation';

const FillIn = ({
  data,
  handlePersonalInfo,
  handleDeleteItem,
  handleNewItem,
  newEducation,
  newExperience,
  handleEducationForm,
  handleExperienceForm,
}) => {
  return (
    <div className="min-w-full sm:min-w-[425px] flex flex-col gap-4">
      <FillInPersonalInfo data={data} handlePersonalInfo={handlePersonalInfo} />
      <FillInEducation
        data={data}
        handleDeleteItem={handleDeleteItem}
        handleNewItem={handleNewItem}
        newEducation={newEducation}
        handleEducationForm={handleEducationForm}
      />
      <FillInExperience
        data={data}
        handleDeleteItem={handleDeleteItem}
        handleNewItem={handleNewItem}
        newExperience={newExperience}
        handleExperienceForm={handleExperienceForm}
      />
    </div>
  );
};

export default FillIn;
