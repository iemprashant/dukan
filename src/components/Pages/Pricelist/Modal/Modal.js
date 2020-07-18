import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,} from 'reactstrap';

const ModalComp = (props) => {
  const {setcity}=props
  const [modal, setModal] = useState(true);

  const toggle = (city) => {
    setModal(!modal);
    setcity(city)
  }

  return (
    <div>
      <Modal isOpen={modal} backdrop='false' centered='true'>
        <ModalHeader toggle={toggle} className="bg-light">Select City</ModalHeader>
        <ModalBody className="d-flex flex-column">
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Delhi')}>Delhi</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Lucknow')}>Lucknow</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Indore')}>Indore</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Bhopal')}>Bhopal</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Ahmedabad')}>Ahmedabad</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Raipur')}>Raipur</Button>
          <Button outline color="success" className="m-3 m-md-2" onClick={()=>toggle('Nagpur')}>Nagpur</Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalComp;
