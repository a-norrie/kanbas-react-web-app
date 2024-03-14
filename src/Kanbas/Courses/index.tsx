import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import React from "react";
import Assignments from "./Assignments";
import { FaCaretRight, FaGlasses } from "react-icons/fa";
import Home from "./Home";
import Nav from "./NavBar/Nav";


function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const location = useLocation().pathname;
  return (
    <div>
      <Nav />

      <div className="d-none d-md-flex" style={{display:"flex", justifyContent:"space-between"}}>

        <div style={{display:"flex"}}>
          <h5 style={{"color": "red"}}>
            <HiMiniBars3/> 
            {course?.number}
          </h5>
          <h5>
            <FaCaretRight />
          </h5>
          <h5>
            {location.substring(location.lastIndexOf('/') + 1)}
          </h5>
        </div>
        <div>
                <button className="btn" style={{height:"35px", backgroundColor: "lightgray"}}>
                    <FaGlasses />Student View</button>
        </div>
      </div>
      <hr className="d-none d-md-block"/>
      <div style={{display:"flex"}}>
        <CourseNavigation />
        <div style={{flexGrow:"1" }} >
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;