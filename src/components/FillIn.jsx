import React from 'react';

function FillIn({ data, handlePersonalInfo }) {
  const personalInfo = data.personalInfo;
  return (
    <div className="min-w-full sm:min-w-[425px] flex flex-col gap-4">
      <div className="w-full py-8 px-6 bg-white rounded-md">
        <form action="" className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl">Personal Info</h3>
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
    </div>
  );
}

export default FillIn;
