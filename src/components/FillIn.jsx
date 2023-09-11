import React from 'react';
import FillInPersonalInfo from './FillInPersonalInfo';
import FillInExperience from './FillInExperience';
import FillInEducation from './FillInEducation';

const FillIn = ({ data, handlePersonalInfo }) => {
  return (
    <div className="min-w-full sm:min-w-[425px] flex flex-col gap-4">
      <FillInPersonalInfo data={data} handlePersonalInfo={handlePersonalInfo} />
      <FillInEducation data={data} />
      <FillInExperience data={data} />
    </div>
  );
};

export default FillIn;
