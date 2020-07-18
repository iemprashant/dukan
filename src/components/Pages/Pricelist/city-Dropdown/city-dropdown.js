import React from 'react';
import {Form, FormGroup,Input} from 'reactstrap';

const DropdownComp = (props) => {

  const {setcity,citystate}=props
  const toggle = (city) => {
    setcity(city)
  }
  return (
    <Form>
      <FormGroup className="d-flex align-items-center m-0 p-2">
        <h6 className="mx-2 align-center">City:</h6>
        <Input type="select" name="select" value={citystate} onChange={(e)=>toggle(e.target.value)}>
          <option>Delhi</option>
          <option>Lucknow</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Ahmedabad</option>
          <option>Raipur</option>
          <option>Nagpur</option>
        </Input>
      </FormGroup>
    </Form>
  );
}

export default DropdownComp;