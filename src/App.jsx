import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import CountrySelect from "./components/CountrySelect";
import "./App.css";
import { useOutletContext, useNavigate } from "react-router";

function App() {
  const {
    cvData,
    personalInfoUpdater,
    addSchool,
    addJob,
    nestedInfoUpdater,
    handleDelete,
  } = useOutletContext();

  const formOrder = ["personalInfo", "educationalExp", "workExperience"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const goToPreview = () => {
    navigate("/preview");
  };

  const handleNextButton = () => {
    if (currentIndex < formOrder.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBackButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const form = e.target.form;
      if (!form) return;

      const elements = Array.from(form.elements);

      const inputsOnly = elements.filter(
        (el) => el.tagName === "INPUT" || el.tagName === "TEXTAREA",
      );

      const currentIndex = inputsOnly.indexOf(e.target);
      const nextElement = inputsOnly[currentIndex + 1];

      if (nextElement) {
        nextElement.focus();
      } else {
        handleNextButton();
      }
    }
  };

  return (
    <div className="main-container">
      <h1 className="app-header">CV-Generator</h1>
      <div className="form-steps-wrapper">
        {formOrder[currentIndex] === "personalInfo" && (
          <form
            className="information-container general-information"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3>General Information</h3>
            <InputArea
              label="First Name"
              value={cvData.personalInfo.firstName}
              onInput={(val) => personalInfoUpdater("firstName", val)}
              onKeyDown={handleKeyDown}
              ph="First Name"
            />
            <InputArea
              label="Last Name"
              value={cvData.personalInfo.lastName}
              onInput={(val) => personalInfoUpdater("lastName", val)}
              onKeyDown={handleKeyDown}
              ph="Last Name"
            />
            <InputArea
              label="Email"
              type="email"
              value={cvData.personalInfo.email}
              onInput={(val) => personalInfoUpdater("email", val)}
              onKeyDown={handleKeyDown}
              ph="youremail@gmail.com"
            />
            <InputArea
              label="Phone Number"
              type="tel"
              value={cvData.personalInfo.phoneNum}
              onInput={(val) => personalInfoUpdater("phoneNum", val)}
              onKeyDown={handleKeyDown}
              ph="+0 000 000 000"
            />
            <CountrySelect
              value={cvData.personalInfo.country}
              onChange={(val) => personalInfoUpdater("country", val)}
            />
          </form>
        )}
        {formOrder[currentIndex] === "educationalExp" && (
          <form
            className="information-container educational-information"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3>Educational Experience</h3>
            <div className="header-wrapper">
              <h4>
                {cvData.educationalExp.length}{" "}
                {cvData.educationalExp.length === 1 ? "School" : "Schools"}
              </h4>
              <Button onClick={addSchool} text="Add School" />
            </div>
            {cvData.educationalExp.map((data) => (
              <div key={data.id} className="section-block">
                <InputArea
                  label="School Name"
                  value={data.schoolName}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "educationalExp",
                      data.id,
                      "schoolName",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="School Name"
                />
                <InputArea
                  label="Degree / Qualification"
                  value={data.studyTitle}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "educationalExp",
                      data.id,
                      "studyTitle",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="e.g., Bachelor of science in major science"
                />
                <InputArea
                  label="Start date"
                  value={data.studyDateStart}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "educationalExp",
                      data.id,
                      "studyDateStart",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="e.g., Oct 2024"
                />
                <InputArea
                  label="End date"
                  value={data.studyDateEnd}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "educationalExp",
                      data.id,
                      "studyDateEnd",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="e.g., present or June 2026"
                />
                {cvData.educationalExp.length > 1 && (
                  <div className="section-actions">
                    <Button
                      onClick={() => handleDelete("educationalExp", data.id)}
                      text="Delete School"
                    />
                  </div>
                )}
              </div>
            ))}
          </form>
        )}
        {formOrder[currentIndex] === "workExperience" && (
          <form
            className="information-container work-information"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3>Work Experience</h3>
            <div className="header-wrapper">
              <h4>
                {cvData.workExperience.length}{" "}
                {cvData.workExperience.length === 1 ? "Job" : "Jobs"}
              </h4>
              <Button onClick={addJob} text="Add Job" />
            </div>

            {cvData.workExperience.map((data) => (
              <div key={data.id} className="section-block">
                <InputArea
                  label="Company Name"
                  value={data.companyName}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "workExperience",
                      data.id,
                      "companyName",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="Name of the company you worked for?"
                />
                <InputArea
                  label="Position in that job"
                  value={data.position}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "workExperience",
                      data.id,
                      "position",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="What position you had in that company?"
                />
                <InputArea
                  label="Main responsibility of the job"
                  value={data.mainResponsibility}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "workExperience",
                      data.id,
                      "mainResponsibility",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="What were you responsible for in that job?"
                />
                <InputArea
                  label="Start date of the job"
                  value={data.startDate}
                  onInput={(val) =>
                    nestedInfoUpdater(
                      "workExperience",
                      data.id,
                      "startDate",
                      val,
                    )
                  }
                  onKeyDown={handleKeyDown}
                  ph="e.g., Feb 2021"
                />
                <InputArea
                  label="End date of the job"
                  value={data.endDate}
                  onInput={(val) =>
                    nestedInfoUpdater("workExperience", data.id, "endDate", val)
                  }
                  onKeyDown={handleKeyDown}
                  ph="e.g., July 2025"
                />
                {cvData.workExperience.length > 1 && (
                  <div className="section-actions">
                    <Button
                      onClick={() => handleDelete("workExperience", data.id)}
                      text="Delete Job"
                    />
                  </div>
                )}
              </div>
            ))}
          </form>
        )}
      </div>
      <div className="navigation-container">
        {currentIndex > 0 && (
          <button onClick={handleBackButton} className="navigation-btns">
            <ArrowLeft />{" "}
            {formOrder[currentIndex] === "preview" ? (
              <span>Back & Edit</span>
            ) : (
              <span>Back</span>
            )}
          </button>
        )}
        <p>{currentIndex + 1}</p>
        {formOrder[currentIndex] === "workExperience" ? (
          <button onClick={goToPreview} className="navigation-btns">
            Preview
          </button>
        ) : (
          <button onClick={handleNextButton} className="navigation-btns">
            <span>Next</span> <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
