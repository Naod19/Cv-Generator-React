import { useState } from "react";
import { Outlet } from "react-router";
function Layout() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      country: "",
    },
    educationalExp: [
      {
        id: crypto.randomUUID(),
        schoolName: "",
        studyTitle: "",
        studyDateStart: "",
        studyDateEnd: "",
      },
    ],
    workExperience: [
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        mainResponsibility: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  const personalInfoUpdater = (keyName, newInfo) => {
    setCvData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [keyName]: newInfo,
      },
    }));
  };

  const addSchool = () => {
    setCvData((prevData) => ({
      ...prevData,
      educationalExp: [
        ...prevData.educationalExp,
        {
          id: crypto.randomUUID(),
          schoolName: "",
          studyTitle: "",
          studyDateStart: "",
          studyDateEnd: "",
        },
      ],
    }));
  };

  const addJob = () => {
    setCvData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        {
          id: crypto.randomUUID(),
          companyName: "",
          position: "",
          mainResponsibility: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const nestedInfoUpdater = (sectionName, id, keyName, newInfo) => {
    setCvData((prevData) => ({
      ...prevData,
      [sectionName]: prevData[sectionName].map((item) =>
        item.id === id ? { ...item, [keyName]: newInfo } : item,
      ),
    }));
  };

  const handleDelete = (sectionName, idToDelete) => {
    setCvData((prevData) => ({
      ...prevData,
      [sectionName]: prevData[sectionName].filter(
        (job) => job.id !== idToDelete,
      ),
    }));
  };
  return (
    <Outlet
      context={{
        cvData,
        personalInfoUpdater,
        addSchool,
        addJob,
        nestedInfoUpdater,
        handleDelete,
      }}
    />
  );
}

export default Layout;
