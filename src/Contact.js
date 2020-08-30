import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="Harry Potter" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Phone Number</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="123-456-7890" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="hpotter@hogwarts.edu" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Contact;
