import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link=""
        gHubLink=""
        image=""
        title="This will be a project"
        description=""
      />
      <Thumbnail
        link=""
        gHubLink=""
        image=""
        title="This will be a project"
        description=""
      />
      <Thumbnail
        link=""
        gHubLink=""
        image=""
        title="This will be a project"
        description=""
      />
    </div>
  );
}

export default Projects;
