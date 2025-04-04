import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const myProjects = {
  project1: {
    name: "ClubUnplugged",
    description:"",
  },
  project2: {
    name: "Atithi",
    description:"",
  },
  project3: {
    name: "Dr prathap's",
    description:"",
  },
  project4: {
    name: "Concierge",
    description:"",
  },
  project5: {
    name: "krupalini swamy",
    description:"",
  },
  project6: {
    name: "My Portfolio",
    description:"",
  },
  project7: {
    name: "CHORUS",
    description:"",
  },
  project8: {
    name: "Consulate",
    description:"",
  },
  project9: {
    name: "Web Server",
    description:"",
  },
  project10: {
    name: "cmapp",
    description:"",
  },
  
}

const Page3 = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  return (
    <div id="page3" className="w-screen min-h-screen bg-white pb-40">
      <ProjectCard/>
      {Object.entries(myProjects).map(([key, project], index) => (
        <div 
          id={key} 
          key={index}
          className="text-black flex items-center w-[100vw] h-[10vh] px-4 border-b-1 overflow-hidden border-black text-[5vh] font-[anzo1] relative"
          onMouseEnter={() => setHoveredProject(key)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div
            className={`overlay h-[100%] w-[100%] bg-black absolute left-0 ${
              hoveredProject === key ? "top-0" : "-top-[100%]"
            } transition-all duration-300 ease cursor-pointer`}
          ></div>
          <div
            className={`w-[100%] text-[6vh] ${
              hoveredProject === key ? "text-white" : "text-black"
            } relative z-9`}
          >
            {project.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;