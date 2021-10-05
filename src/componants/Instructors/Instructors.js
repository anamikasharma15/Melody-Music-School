import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
   const [Instructors, setTeachers] = useState([]);

   useEffect(() => {
      fetch('./instructor.JSON')
         .then(res => res.json())
         .then(data => setTeachers(data));
   }, [])
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">Our Respective Instructors</h2>
         <div className="row row-cols-lg-2 row-cols-1 g-2 mb-3 ms-3 me-3">
            {
               Instructors.map(instructor => <Instructor instructor={instructor}></Instructor>)
            }
         </div>
      </div>
   );
};

export default Instructors;