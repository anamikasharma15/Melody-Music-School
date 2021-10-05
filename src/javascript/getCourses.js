import { useEffect, useState } from "react";

const GetCourse = () => {
   const [allPrograms, setCourses] = useState([])

   useEffect(() => {
      fetch('./music.JSON')
         .then(res => res.json())
         .then(data => setCourses(data));
   }, []);
   return allPrograms
};
export default GetCourse
