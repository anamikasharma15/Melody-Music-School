import React from 'react';
import { Button } from 'react-bootstrap';
import './Instructor.css';

const Instructor = (props) => {
   const { img, name, designation, price  } = props.instructor;
   return (
      <div className="col teacher" style={{}}>
         <div className="d-lg-flex align-items-center my-5">
            <div className="mb-2">
               <img height="200px" width="200px" className="rounded-circle" src={img} alt="" />
            </div>
            <div className="ms-4">
               <h4 className="teacher-name">Name: {name}</h4>
               <h3 className="">Remuneration: {price}</h3>
               <p><strong>Designation</strong>: {designation}</p>
               <Button>Send Mail</Button>
            </div>
         </div>
      </div>
   );
};

export default  Instructor ;