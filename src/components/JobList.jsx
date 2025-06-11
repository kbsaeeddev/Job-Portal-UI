import React from "react";
import "../styles/JobSection.css";

const JobList = ({ heading, jobs }) => {
  return (
    <div className="featured-jobs">
      <div className="featured-jobs-view">
        <span className="featured-jobs-text">{heading}</span>
        <span className="featured-jobs-text1">See {heading}</span>
      </div>

      <div className="featured-jobs-view2">
        {jobs.map((job) => (
          <div className="featured-jobs-column" key={job.id}>
            <span className="featured-jobs-text2">Promoted</span>

            <div className="featured-jobs-view17">
              <img src={job.topImage} className="image7" alt="Job" />
              <div className="featured-jobs-column2">
                <span className="featured-jobs-text3">{job.role}</span>
                <span className="featured-jobs-text4">{job.team}</span>
              </div>
            </div>

            <div className="featured-jobs-view18">
              <img src={job.locationIcon} className="image8" alt="Location" />
              <div className="featured-jobs-column3">
                <span className="featured-jobs-text6">{job.location}</span>
                <span className="featured-jobs-text6">
                  {job.posted.split("|")[0]} |{" "}
                  <span className="highlight-applicants">
                    {job.posted.split("|")[1].trim()}
                  </span>
                </span>
              </div>
            </div>

            <div className="featured-jobs-view19">
              <div className="view">
                <span className="featured-jobs-text5">Apply Now</span>
              </div>
              <img src={job.applyIcon} className="image9" alt="Apply" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
