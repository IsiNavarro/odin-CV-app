import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

function PDFRender({ data }) {
  function EducationItem({ item }) {
    const { degree, schoolName, location, startDate, endDate } = item;
    return (
      <Document>
        <Page size="A4">
          <View style={{ display: 'flex', gap: '8px' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '150px',
              }}
            >
              <Text>{`${startDate} - ${endDate}`}</Text>
              <Text>{location}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{schoolName}</Text>
              <Text>{degree}</Text>
            </View>
          </View>
        </Page>
      </Document>
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
      <View style={{ display: 'flex', gap: '8px' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '150px',
          }}
        >
          <Text>{`${startDate} - ${endDate}`}</Text>
          <Text>{location}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{companyName}</Text>
          <Text>{positionTitle}</Text>
          <Text style={{ marginTop: '8px' }}>{description}</Text>
        </View>
      </View>
    );
  }

  function Education() {
    if (!education.length > 0) return null;
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {education.length > 0 ? (
          <Text
            style={{
              padding: '8px',
              marginBottom: '16px',
              background: '#f7fafc',
              color: '#319795',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Education
          </Text>
        ) : null}
        {education}
      </View>
    );
  }

  function Experience() {
    if (!experience.length > 0) return null;
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {experience.length > 0 ? (
          <Text
            style={{
              padding: '8px',
              marginBottom: '16px',
              background: '#f7fafc',
              color: '#319795',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Experience
          </Text>
        ) : null}
        {experience}
      </View>
    );
  }

  const education = data.sections.educations.map((education) => (
    <EducationItem key={education.id} item={education} />
  ));
  const experience = data.sections.experiences.map((experience) => (
    <ExperienceItem key={experience.id} item={experience} />
  ));

  return (
    <View
      style={{
        width: '950px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        alignSelf: 'start',
      }}
    >
      <View
        style={{
          width: '100%',
          padding: '16px',
          paddingTop: '32px',
          background: '#319795',
          color: 'white',
        }}
      >
        <Text
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          {data.personalInfo.fullName}
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '16px',
          }}
        >
          <View style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiMail />
            <Text>{data.personalInfo.email}</Text>
          </View>
          <View style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiPhone />
            <Text>{data.personalInfo.phoneNumber}</Text>
          </View>
          <View style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiLocationMarker />
            <Text>{data.personalInfo.location}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          minHeight: '80vh',
          padding: '16px',
          paddingTop: '32px',
          background: 'white',
        }}
      >
        <Education />
        <Experience />
      </View>
    </View>
  );
}

export default PDFRender;
