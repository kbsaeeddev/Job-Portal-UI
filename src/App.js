import React from "react";
import "./App.css";
import Header from "./components/Header";
import JobSection from "./components/JobSection";
import ProfileSection from "./components/ProfileSection.jsx";

function App() {
  return (
    <div className="contain">
      <div>
        <Header />
        <div className="main-container">
          <div className="container">
            <ProfileSection />
            <JobSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
