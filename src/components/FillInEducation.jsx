/* eslint-disable react/prop-types */
import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function FillInEducation({ data, handleDeleteItem }) {
  const EducationItem = ({ id, title, handleDeleteItem }) => {
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
  const EducationList = ({ education, handleDeleteItem }) => {
    return education.map((item) => (
      <EducationItem
        key={item.id}
        id={item.id}
        handleDeleteItem={handleDeleteItem}
        title={item.degree}
      />
    ));
  };

  return (
    <div className="w-full py-8 px-6 bg-white rounded-md">
      <h3 className="font-bold text-2xl flex gap-2">
        <FaUniversity size={30} />
        Education
      </h3>
      <div className="flex flex-col gap-2 pt-4">
        <EducationList
          education={data.sections.educations}
          handleDeleteItem={handleDeleteItem}
        />
        <button className="font-bold text-lg shadow-md w-fit py-1 px-4 mt-3 self-center rounded-md bg-slate-200 hover:scale-105 duration-200">
          +
        </button>
      </div>
    </div>
  );
}

export default FillInEducation;
