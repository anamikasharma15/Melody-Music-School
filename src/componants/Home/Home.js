import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../images/music banner.jpg'
import img1 from '../images/music2.jpg'
import img2 from '../images/music.jpg'
import GetCourse from '../../javascript/getCourses';
import Programs from '../Programs/Programs';
import './Home.css'

const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   const allPrograms = GetCourse()
   return (
      <div>
         <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img1}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img2}
                     alt="Third slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
         <div>
            <h1 className="heading py-2 text-light"> Here Popular Programs</h1>
            <div className="row row-cols-lg-4 row-cols-1 mt-4 ms-1">
               {
                  allPrograms.slice(0, 4).map(programs => <Programs key={programs.key} programs={programs}></Programs>)
               }
            </div> 
          </div>
      </div>
   );
};

export default Home;