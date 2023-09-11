import React from 'react';
import { FaUserCircle, FaUniversity } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { GiSuitcase } from 'react-icons/gi';

function FillInPersonalInfo({ data, handlePersonalInfo }) {
  const personalInfo = data.personalInfo;

  return (
    <div className="w-full py-8 px-6 bg-white rounded-md">
      <form action="" className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl flex gap-2">
          <FaUserCircle size={28} />
          Personal Info
        </h3>
        <label htmlFor="fullName" className="mt-2 font-bold">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder={personalInfo.fullName}
          onChange={handlePersonalInfo}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="email" className="mt-2 font-bold">
          Mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={personalInfo.email}
          onChange={handlePersonalInfo}
          className="h-10 px-1 bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
        <label htmlFor="phoneNumber" className="mt-2 font-bold">
          Phone number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder={personalInfo.phoneNumber}
          onChange={handlePersonalInfo}
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
          placeholder={personalInfo.location}
          onChange={handlePersonalInfo}
          className="h-10 px-1  bg-slate-100 rounded-sm focus:border-blue-300"
          required
        />
      </form>
    </div>
  );
}

function FillInEducation({ data }) {
  return (
    <div className="w-full py-8 px-6 bg-white rounded-md">
      <h3 className="font-bold text-2xl flex gap-2">
        <FaUniversity size={28} />
        Education
      </h3>
    </div>
  );
}

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
    console.log(experience);
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

const FillIn = ({ data, handlePersonalInfo }) => {
  return (
    <div className="min-w-full sm:min-w-[425px] flex flex-col gap-4">
      <FillInPersonalInfo data={data} handlePersonalInfo={handlePersonalInfo} />
      <FillInEducation data={data} />
      <FillInExperience data={data} />
    </div>
  );
};

export { FillIn };
