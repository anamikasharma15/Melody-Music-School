import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const Programs = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const { name, img, description, price } = (props.programs)
   return (
      <div className="col programs">
         <Card className="" style={{ width: '20rem', height: '30rem' }}>
            <Card.Img className=" pro-img" style={{height:'250px',width:'320px'}} variant="top" src={img} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>
                  <h4>Course Fee: {price}</h4>
                  <p>{description.slice(0, 100)}</p>
               </Card.Text>
               <Button variant="primary" onClick={handleShow}>
                  Start Programs
               </Button>

               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>{name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're interesting For start <span className="text-success fw-bold"> {name}</span> Course. For Start You Have To Pay First .!!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" onClick={handleClose}>
                        Agree
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Programs;