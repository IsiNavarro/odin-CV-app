import React from 'react';
import { sampleData } from '../sampleData';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

function EducationItem(props) {
  const item = props.item;

  const { degree, schoolName, location, startDate, endDate } = item;
  return (
    <div className="flex gap-2">
      <div className="flex flex-col min-w-[150px] md:min-w-[200px]">
        <p>{`${startDate} - ${endDate}`}</p>
        <p>{location}</p>
      </div>
      <div>
        <h4 className="font-bold">{schoolName}</h4>
        <p>{degree}</p>
      </div>
    </div>
  );
}

function ExperienceItem(props) {
  const item = props.item;

  const {
    companyName,
    positionTitle,
    location,
    description,
    startDate,
    endDate,
  } = item;

  return (
    <div className="flex gap-2">
      <div className="flex flex-col  min-w-[150px] md:min-w-[200px]">
        <p>{`${startDate} - ${endDate}`}</p>
        <p>{location}</p>
      </div>
      <div>
        <h4 className="font-bold">{companyName}</h4>
        <p>{positionTitle}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

function CVDisplay() {


  const education = sampleData.sections.educations.map((education) => (
    <EducationItem key={education.id} item={education} />
  ));
  const experience = sampleData.sections.experiences.map((experience) => (
    <ExperienceItem key={experience.id} item={experience} />
  ));


  return (
    <div className="max-w-[900px] shadow-lg">
      <div className="w-full flex flex-col p-4 pt-8 bg-teal-800 text-white">
        <h1 className="flex items-center justify-center text-3xl font-bold">
          {sampleData.personalInfo.fullName}
        </h1>
        <div className="md:flex md:items-center md:justify-evenly p-4">
          <div className="flex items-center gap-2">
            <HiMail size={25} />
            {sampleData.personalInfo.email}
          </div>
          <div className="flex items-center gap-2">
            <HiPhone size={25} />
            {sampleData.personalInfo.phoneNumber}
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker className="pb-1" size={25} />
            {sampleData.personalInfo.location}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center p-4 pt-8 bg-white">
        <div className="w-full flex flex-col py-2 gap-4">
<<<<<<< HEAD
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-900 font-bold text-center">
            Education
          </h3>
          {education}
        </div>
        <div className="w-full flex flex-col py-2 gap-4">
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-900 font-bold text-center">
            Professional Experience
          </h3>
          {experience}
=======
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-950 font-bold text-center">
            Education
          </h3>
          <EducationItem item={education[0]} />
          <EducationItem item={education[1]} />
        </div>
        <div className="w-full flex flex-col py-2 gap-4">
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-950 font-bold text-center">
            Professional Experience
          </h3>
          <ExperienceItem item={experience[0]} />
          <ExperienceItem item={experience[1]} />
>>>>>>> 8a4d27dd565e849e4de813dcc67b5b1a0d139497
        </div>
      </div>
    </div>
  );
}

export default CVDisplay;
