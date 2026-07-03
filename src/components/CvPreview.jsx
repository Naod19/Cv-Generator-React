import "./CvPreview.css";
import { useOutletContext, useNavigate } from "react-router";
import { ArrowLeft, ArrowDown } from "lucide-react";

function CvPreview() {
  const { cvData } = useOutletContext();

  const handleDownloadPdf = () => {
    window.print();
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="preview-container">
        <div className="cv-header">
          <h1 className="cv-full-name">
            {cvData.personalInfo.firstName || "Your"}{" "}
            {cvData.personalInfo.lastName || "Name"}
          </h1>
          <div className="cv-contact-subtext">
            {cvData.personalInfo.email && (
              <span>{cvData.personalInfo.email}</span>
            )}
            {cvData.personalInfo.phoneNum && (
              <span> • {cvData.personalInfo.phoneNum}</span>
            )}
            {cvData.personalInfo.country && (
              <p>{cvData.personalInfo.country}</p>
            )}
          </div>
        </div>

        {/* 2. EDUCATION SECTION */}
        <div className="cv-section">
          <h2 className="cv-section-title">Education</h2>

          {cvData.educationalExp &&
            cvData.educationalExp.map((edu) => (
              <div key={edu.id} className="cv-item-block">
                <div className="cv-item-row">
                  <span className="cv-item-primary">
                    {edu.schoolName || "University / School Name"}
                  </span>
                  <span className="cv-item-date">
                    {edu.studyDateStart} - {edu.studyDateEnd}
                  </span>
                </div>
                <div className="cv-item-subtitle">
                  {edu.studyTitle || "Degree / Course Field"}
                </div>
              </div>
            ))}
        </div>

        {/* 3. WORK EXPERIENCE SECTION */}
        <div className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>

          {cvData.workExperience &&
            cvData.workExperience.map((job) => (
              <div key={job.id} className="cv-item-block">
                <div className="cv-item-row">
                  <span className="cv-item-primary">
                    {job.companyName || "Company Name"}
                  </span>
                  <span className="cv-item-date">
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
                <div className="cv-item-subtitle">
                  {job.position || "Job Title / Position"}
                </div>
                {job.mainResponsibility && (
                  <p className="cv-item-description">
                    {job.mainResponsibility}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="navigation-container">
        <button className="navigation-btns" onClick={goToHome}>
          <ArrowLeft /> Back and Edit
        </button>
        <button onClick={handleDownloadPdf} className="navigation-btns">
          Download Cv <ArrowDown />
        </button>
      </div>
    </div>
  );
}

export default CvPreview;
