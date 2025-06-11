import React from "react";
import "../styles/JobSection.css";
import JobList from "./JobList";
import Teams from "../assets/images/teams.png"
import Location from "../assets/images/location.png"
import Apply from "../assets/images/apply.png"
import Arrow from "../assets/images/arrow.png"
import Search from "../assets/images/search.png"

const JobSection = ({ title, jobs }) => {
  const featuredJobs = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    topImage: Teams,
    role: "UI/UX Designer",
    team: "Teams",
    locationIcon: Location,
    location: "Seattle, USA (Remote)",
    posted: "1 day ago  |  22 applicants",
    applyIcon: Apply,
  }));
  const recommendedJobs = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    topImage: Teams,
    role: "UI/UX Designer",
    team: "Teams",
    locationIcon: Location,
    location: "Seattle, USA (Remote)",
    posted: "1 day ago  |  22 applicants",
    applyIcon: Apply,
  }));
  const latestJobs = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    topImage: Teams,
    role: "UI/UX Designer",
    team: "Teams",
    locationIcon: Location,
    location: "Seattle, USA (Remote)",
    posted: "1 day ago  |  22 applicants",
    applyIcon: Apply,
  }));

  return (
    <div className="job-section-main-container">
      <div className="job-section-container">
      <span className="job-section-text" >
        Find your Dream Job, <span>Albert!</span>
      </span>
      <span className="job-section-text-highlight" >
        {"Explore the latest job openings and apply for the best opportunities available today!"}
      </span>
    </div>
    <div className="job-second-section">
      <input
        placeholder={"Job Title, Company, or Keywords"}
        className="job-input"
      />
      <div className="job-search-section">
        <div className="box3">
        </div>
        <div className="job-search-section2">
          <span className="job-search-text" >
            {"Select Location"}
          </span>
          <img
            src={Arrow} 
            className="image3"
            alt = "arrow"
          />
        </div>
        <div className="box3">
        </div>
        <div className="job-search-section2">
          <span className="job-search-text" >
            {"Job Type"}
          </span>
          <img
            src={Arrow} 
            className="image3"
            alt = "arrow"
          />
        </div>
        <div className="job-search-section3">
          <img
            src={Search} 
            className="image2"
            alt = "search"
          />
          <span className="job-search-text2" >
            {"Search"}
          </span>
        </div>
      </div>
    </div>
    <div className="job-section-container row-view13">
      <span className="job-text2" >
        {"Similar:"}
      </span>
      <div className="job-view4">
        <button className="button2"
          onClick={()=>alert("Pressed!")}>
          <span className="job-text3" >
            {"Frontend"}
          </span>
        </button>
        <button className="button2"
          onClick={()=>alert("Pressed!")}>
          <span className="job-text3" >
            {"Backend"}
          </span>
        </button>
        <button className="button2"
          onClick={()=>alert("Pressed!")}>
          <span className="job-text3" >
            {"Graphic Designer"}
          </span>
        </button>
      </div>
    </div>
      <div className="box4"></div>
      <JobList heading="Featured Jobs" jobs={featuredJobs} />
      <div className="box4"></div>
      <JobList heading="Recommended Jobs" jobs={recommendedJobs} />
      <div className="box4"></div>
      <JobList heading="Latest Jobs" jobs={latestJobs} />
    </div>
  );
};

export default JobSection;
