import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import React from "react";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database"
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [coursesState, setCourses] = useState(courses);

  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "c1.jpeg"
  });

  const updateCourse = () => {
    setCourses(previousCourses => 
      previousCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const deleteCourse = (courseId: string) => {
    setCourses(prevCourses => prevCourses.filter((course) => course._id !== courseId));
  };

  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
      setCourses(prevCourses => [...prevCourses, newCourse]);
    };
    

  return (
    <Provider store={store}>

    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
          <Dashboard
              courses={coursesState}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={coursesState} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
