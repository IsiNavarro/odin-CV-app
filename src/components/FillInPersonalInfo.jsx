import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

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

export default FillInPersonalInfo;
