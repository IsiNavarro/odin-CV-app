import React from 'react';

function FillIn({ data, handlePersonalInfo }) {
  const personalInfo = data.personalInfo;
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full py-8 px-4 flex flex-col gap-2 bg-white rounded-md">
        <h3 className="font-bold text-lg">Personal Info</h3>
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="fullName" className="mt-2 font-bold">
            Full name{' '}
            <span className="text-xs font-normal text-slate-600">
              recommended
            </span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder={personalInfo.fullName}
            onChange={handlePersonalInfo}
            className="max-w-[300px] px-1 bg-slate-100 rounded-sm focus:border-blue-300"
            required
          />
          <label htmlFor="email" className="mt-2 font-bold">
            Mail{' '}
            <span className="text-xs font-normal text-slate-600">
              recommended
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={personalInfo.email}
            onChange={handlePersonalInfo}
            className="max-w-[300px] px-1 bg-slate-100 rounded-sm focus:border-blue-300"
            required
          />
          <label htmlFor="phoneNumber" className="mt-2 font-bold">
            Phone number{' '}
            <span className="text-xs font-normal text-slate-600">
              recommended
            </span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder={personalInfo.phoneNumber}
            onChange={handlePersonalInfo}
            className="max-w-[300px] px-1 bg-slate-100 rounded-sm focus:border-blue-300"
            required
          />
          <label htmlFor="location" className="mt-2 font-bold">
            Location{' '}
            <span className="text-xs font-normal text-slate-600">
              recommended
            </span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={personalInfo.location}
            onChange={handlePersonalInfo}
            className="max-w-[300px] px-1 bg-slate-100 rounded-sm focus:border-blue-300"
            required
          />
        </form>
      </div>
    </div>
  );
}

export default FillIn;
