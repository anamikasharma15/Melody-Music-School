import React from 'react';
import GetCourse from '../../javascript/getCourses';
import Programs from '../Programs/Programs';

const AllProgram = () => {
   const allPrograms = GetCourse();
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">Our Popular Programs</h2>
         <div className="row row-cols-lg-4 row-cols-1 mt-5 gy-4">
            {
               allPrograms.map(programs => <Programs programs={programs}></Programs>)
            }
         </div>
      </div>
   );
};

export default AllProgram;