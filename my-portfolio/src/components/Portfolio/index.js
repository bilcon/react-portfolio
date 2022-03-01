import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "subtrackt",
      description: "MERN Stack",
      link: "https://radiant-hamlet-31156.herokuapp.com/",
      repo: "https://github.com/ramantv/Subscription-Tracker",
    },
    {
      name: "travel-blog",
      description: "MySql Express Handlebars",
      link: "https://travel-blog-project-2.herokuapp.com/",
      repo: "https://github.com/bilcon/Travel-Blog",
    },
    {
      name: "run-buddy",
      description: "HTML CSS",
      link: "https://bilcon.github.io/run-buddy/",
      repo: "https://github.com/bilcon/run-buddy",
    },
    {
      name: "seo-refactor",
      description: "Refactor current code",
      link: "https://bilcon.github.io/seo-refactor/",
      repo: "https://github.com/bilcon/seo-refactor",
    },
    {
      name: "budget-tracker",
      description: "PWA",
      link: "https://shielded-dusk-25196.herokuapp.com/",
      repo: "https://github.com/bilcon/Budget-Tracker-PWA",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
