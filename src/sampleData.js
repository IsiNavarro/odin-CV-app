import uniqid from 'uniqid';

export const sampleData = {
  personalInfo: {
    fullName: 'Hans Müller',
    email: 'hans.mueller@mail.com',
    phoneNumber: '+41 79 123 45 67',
    location: 'Zürich, Schweiz',
  },

  sections: {
    educations: [
      {
        degree: 'M.Sc. in Business Administration',
        schoolName: 'University of Zürich',
        location: 'Zürich, Schweiz',
        startDate: '01/2023',
        endDate: 'present',
        id: uniqid(),
      },
      {
        degree: 'B.A. in Economics',
        schoolName: 'University of Basel',
        location: 'Basel, Schweiz',
        startDate: '09/2018',
        endDate: '06/2022',
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: 'SwissTech Solutions AG',
        positionTitle: 'Senior Business Analyst',
        location: 'Zürich, Schweiz',
        description:
          'Conducting market research and data analysis to identify business opportunities',
        startDate: '10/2022',
        endDate: 'present',
        id: uniqid(),
      },
      {
        companyName: 'Global Consulting Group GmbH',
        positionTitle: 'Business Development Intern',
        location: 'Basel, Schweiz',
        description:
          'Assisting in the development of client proposals and presentations. Conducting market research to identify potential clients and opportunites. Supporting the team in various business development activities',
        startDate: '02/2021',
        endDate: '09/2021',
        id: uniqid(),
      },
    ],
  },
};
