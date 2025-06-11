import React from "react";
import "../styles/ProfileSection.css";
import Banner from "../assets/images/banner.png";
import Profile from "../assets/images/profile-image.png";
import ProfileArrow from "../assets/images/profile-arrow.png";

const ProfileSection = () => {
  return (
    <>
      <div className="profile-section-main-container">
        <div className="profile-section-container">
          <div className="profile-section-img-container">
            <img src={Banner} className="profile-img" alt="banner" />
            <img src={Profile} className="absolute-image" alt="profile" />
          </div>
          <span className="profile-txt1">{"Albert Flores"}</span>
          <span className="profile-txt2">
            {
              "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web..."
            }
          </span>
          <span className="profile-txt3">{"Clinton, Maryland"}</span>
        </div>
        <div className="profile-section-container column5">
          <div className="profile-second-section">
            <span className="profile-txt4">{"Profile Visitors"}</span>
            <span className="profile-txt5">{"140"}</span>
          </div>
          <div className="hr-box"></div>
          <div className="profile-second-section">
            <span className="profile-txt4">{"Resume Viewers"}</span>
            <span className="profile-txt5">{"20"}</span>
          </div>
          <div className="hr-box"></div>
          <div className="profile-second-section">
            <span className="profile-txt4">{"My Jobs"}</span>
            <span className="profile-txt5">{"88"}</span>
          </div>
        </div>
        <div className="profile-third-section">
          <div className="profile-calendar">
            <div>
              <span className="profile-txt6">{"My calendar"}</span>
              <span className="profile-txt7">{"Upcoming Interviews"}</span>
            </div>
            <img src={ProfileArrow} className="profile-img2" alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
