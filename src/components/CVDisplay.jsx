import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

function CVDisplay({ data, reference }) {
  function EducationItem({ item }) {
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

  function ExperienceItem({ item }) {
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
  function Education() {
    if (!education.length > 0) return;
    return (
      <div className="w-full flex flex-col py-2 gap-4">
        {education.length > 0 ? (
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-900 font-bold text-center">
            Education
          </h3>
        ) : null}
        {education}
      </div>
    );
  }
  function Experience() {
    if (!experience.length > 0) return;
    return (
      <div className="w-full flex flex-col py-2 gap-4">
        {experience.length > 0 ? (
          <h3 className="py-1 mb-2  bg-gray-100 text-teal-900 font-bold text-center">
            Experience
          </h3>
        ) : null}
        {experience}
      </div>
    );
  }
  const education = data.sections.educations.map((education) => (
    <EducationItem key={education.id} item={education} />
  ));
  const experience = data.sections.experiences.map((experience) => (
    <ExperienceItem key={experience.id} item={experience} />
  ));

  return (
    <div className="shadow-lg self-start">
      <div className="lg:w-[950px]" ref={reference}>
        <div className="w-full flex flex-col p-4 pt-8 bg-teal-800 text-white">
          <h1 className="flex items-center justify-center text-3xl font-bold">
            {data.personalInfo.fullName}
          </h1>
          <div className="md:flex md:items-center md:justify-evenly p-4">
            <div className="flex items-center gap-2">
              <HiMail size={25} />
              {data.personalInfo.email}
            </div>
            <div className="flex items-center gap-2">
              <HiPhone size={25} />
              {data.personalInfo.phoneNumber}
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="pb-1" size={25} />
              {data.personalInfo.location}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center min-h-[80vh] p-4 pt-8 bg-white">
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default CVDisplay;
