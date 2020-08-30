// import { Link } from "react-router-dom"; // Import the Link component
import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,Button} from 'reactstrap';

const Thumbnail = ({link, title, description, image, gHubLink}) => {
  return (
    <div>
      <Card className="project">
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button href={link}>See Deployed Project</Button>
          <br/>
          <Button href={gHubLink}>GitHub Repo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Thumbnail;