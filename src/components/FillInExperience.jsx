import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GiSuitcase } from 'react-icons/gi';

function FillInExperience({ data, handleDeleteItem }) {
  const ExperienceItem = ({ id, title, handleDeleteItem }) => {
    return (
      <div className="flex items-center justify-between border-b-4 py-2">
        <h4 className="text-lg">{title}</h4>
        <button
          id={id}
          className="p-1 hover:text-slate-800 duration-50"
          onClick={handleDeleteItem}
        >
          <RiDeleteBin5Fill size={22} />
        </button>
      </div>
    );
  };
  const ExperienceList = ({ experience, handleDeleteItem }) => {
    return experience.map((item) => (
      <ExperienceItem
        key={item.id}
        id={item.id}
        title={item.companyName}
        handleDeleteItem={handleDeleteItem}
      />
    ));
  };
  return (
    <div className="w-full py-8 px-6 bg-white rounded-md">
      <h3 className="font-bold text-2xl flex gap-2">
        <GiSuitcase size={30} />
        Experience
      </h3>
      <div className="flex flex-col gap-2 pt-4">
        <ExperienceList
          experience={data.sections.experiences}
          handleDeleteItem={handleDeleteItem}
        />
        <button className="font-bold text-lg shadow-md w-fit py-1 px-4 mt-3 self-center rounded-md bg-slate-200 hover:scale-105 duration-200">
          +
        </button>
      </div>
    </div>
  );
}

export default FillInExperience;
