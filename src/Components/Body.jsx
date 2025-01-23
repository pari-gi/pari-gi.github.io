/* UPDATED Body.jsx */
import React from "react";
import "../Styles/Body.css";
import ux1 from "../Images/CcfMockup1.png";
import ux2 from "../Images/CcfMockup2.png";

const Body = () => {
  return (
    <div className="projects-container">
      <div className="img-container">
        <img src={ux1} alt="UX Design 1" className="project-image" />
        <img src={ux2} alt="UX Design 2" className="project-image" />
      </div>

      <div className="text">
        <h3>The Children’s Cancer Foundation, Inc. (CCF)</h3>
        <p>Designed and developed a streamlined grant review platform for the Children’s Cancer Foundation (CCF), an organization that has raised over $43 million for pediatric cancer research since 1983. This tool improves the efficiency and accuracy of the grant selection process by providing dedicated dashboards for applicants, reviewers, and administrators. With this system, CCF can more effectively distribute over $1 million annually in research grants, supporting critical advancements in childhood cancer treatments.</p>
      </div>
    </div>
  );
};

export default Body;
