import React from 'react';
import FillInPersonalInfo from './FillInPersonalInfo';
import FillInExperience from './FillInExperience';
import FillInEducation from './FillInEducation';

const FillIn = ({ data, handlePersonalInfo, handleDeleteItem }) => {
  return (
    <div className="min-w-full sm:min-w-[425px] flex flex-col gap-4">
      <FillInPersonalInfo data={data} handlePersonalInfo={handlePersonalInfo} />
      <FillInEducation data={data} handleDeleteItem={handleDeleteItem} />
      <FillInExperience data={data} handleDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default FillIn;
