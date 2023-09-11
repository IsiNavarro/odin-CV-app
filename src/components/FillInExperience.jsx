import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GiSuitcase } from 'react-icons/gi';

function FillInExperience({ data }) {
  const ExperienceItem = ({ title }) => {
    return (
      <div className="flex items-center justify-between border-t-4 py-2">
        <h4 className="text-lg">{title}</h4>
        <button className="p-1 hover:text-slate-800 duration-50">
          <RiDeleteBin5Fill size={22} />
        </button>
      </div>
    );
  };
  const ExperienceList = ({ experience }) => {
    return experience.map((item) => (
      <ExperienceItem key={item.id} title={item.companyName} />
    ));
  };
  return (
    <div className="w-full py-8 px-6 bg-white rounded-md">
      <h3 className="font-bold text-2xl flex gap-2">
        <GiSuitcase size={30} />
        Experience
      </h3>
      <div className="flex flex-col gap-2 p-4">
        <ExperienceList experience={data.sections.experiences} />
      </div>
    </div>
  );
}

export default FillInExperience;
