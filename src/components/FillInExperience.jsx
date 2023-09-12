/* eslint-disable react/prop-types */
import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GiSuitcase } from 'react-icons/gi';

function FillInExperience({
  data,
  handleDeleteItem,
  handleNewItem,
  newExperience,
  handleExperienceForm,
  handleCancelButton,
}) {
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
  const ExperienceForm = ({ handleExperienceForm }) => {
    return (
      <form
        action=""
        onSubmit={handleExperienceForm}
        className="flex flex-col gap-2"
      >
        <label htmlFor="companyName" className="mt-2 font-bold">
          Company
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="positionTitle" className="mt-2 font-bold">
          Position title
        </label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="description" className="mt-2 font-bold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className=" h-36 px-1  bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="startDate" className="mt-2 font-bold">
          Start date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
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
          className="h-10 px-1  bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />

        <button
          type="submit"
          className="text-white mt-2 py-2 bg-slate-700 rounded-sm"
        >
          Save
        </button>
        <button
          type="button"
          id="experience"
          onClick={handleCancelButton}
          className="py-2 bg-slate-300 rounded-sm"
        >
          Cancel
        </button>
      </form>
    );
  };

  const AddButton = () => {
    return (
      <button
        id="experience"
        onClick={handleNewItem}
        className="font-bold text-lg shadow-md w-fit py-1 px-4 mt-3 self-center rounded-md bg-slate-200 hover:scale-105 duration-200"
      >
        +
      </button>
    );
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
        {newExperience ? (
          <ExperienceForm handleExperienceForm={handleExperienceForm} />
        ) : (
          <AddButton />
        )}
      </div>
    </div>
  );
}

export default FillInExperience;
