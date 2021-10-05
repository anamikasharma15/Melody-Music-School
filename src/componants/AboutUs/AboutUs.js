import React from 'react';

const AboutUs = () => {
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">We Have Music Classes For Everyone</h2>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
            <div className="col-lg-7 col-sm-12">
               <p className="fs-5">Melody Magic Music Studio offers delightful Kindermusik® music classes for babies, toddlers, and preschoolers, as well as unique a la carte musical playdates, birthday parties, and summer “camp” fun opportunities. Our students who are a bit older continue through beginning piano, group music classes such as ukulele, and private instrument lessons that help further their musical education..</p>
               <h3>Our Facilities</h3>
               <ul>
                  <li>Regular class</li>
                  <li>Online Class</li>
                  <li>Extra care</li>
                  <li>Expart Instrument System</li>
                  <li>Expart Instuctor For Teach</li>
               </ul>
            </div>
            <div className="col-lg-5 col-sm-12">
               <img className="img-fluid" src={'https://www.musicteaching.info/wp-content/uploads/2018/07/Music-Education-1-3.jpg'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;