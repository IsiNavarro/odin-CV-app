/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function FillInEducation({
  data,
  handleDeleteItem,
  handleNewItem,
  newEducation,
  handleEducationForm,
}) {
  const handleAddButton = (e) => {};

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
  const AddButton = () => {
    return (
      <button
        id="education"
        onClick={handleNewItem}
        className="font-bold text-lg shadow-md w-fit py-1 px-4 mt-3 self-center rounded-md bg-slate-200 hover:scale-105 duration-200"
      >
        +
      </button>
    );
  };
  const EducationForm = () => {
    return (
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="degree" className="mt-2 font-bold">
          Degree
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          onChange={handleEducationForm}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="schoolName" className="mt-2 font-bold">
          School
        </label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          onChange={handleEducationForm}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="startDate" className="mt-2 font-bold">
          Start date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleEducationForm}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="endDate" className="mt-2 font-bold">
          End date <span className="font-normal">{'(or expected)'}</span>
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleEducationForm}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="location" className="mt-2 font-bold">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleEducationForm}
          className="h-10 px-1  bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <button className="text-white mt-2 py-2 bg-slate-700 rounded-sm">
          Save
        </button>
        <button onClick={() => {}} className="py-2 bg-slate-300 rounded-sm">
          Cancel
        </button>
      </form>
    );
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
        {newEducation ? <EducationForm /> : <AddButton />}
      </div>
    </div>
  );
}

export default FillInEducation;
