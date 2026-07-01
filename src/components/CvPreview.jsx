import "./CvPreview.css";
function CvPreview({ data }) {
  return (
    <div className="preview-container">
      <div className="cv-header">
        <h1 className="cv-full-name">
          {data.personalInfo.firstName || "Your"}{" "}
          {data.personalInfo.lastName || "Name"}
        </h1>
        <div className="cv-contact-subtext">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phoneNum && (
            <span> • {data.personalInfo.phoneNum}</span>
          )}
          {data.personalInfo.country && <p>{data.personalInfo.country}</p>}
        </div>
      </div>

      {/* 2. EDUCATION SECTION */}
      <div className="cv-section">
        <h2 className="cv-section-title">Education</h2>

        {data.educationalExp &&
          data.educationalExp.map((edu) => (
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

        {data.workExperience &&
          data.workExperience.map((job) => (
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
                <p className="cv-item-description">{job.mainResponsibility}</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CvPreview;
