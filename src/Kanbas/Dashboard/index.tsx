import React, { useState } from "react";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void;}) {
  
  return (
    <div className="p-4">
      <h2>Dashboard</h2>              <hr />
      <h3>Published Courses ({courses.length})</h3> <hr />

      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-secondary" onClick={addNewCourse} >
        Add
      </button>

      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col mt-0 mb-4" style={{ width: 300 }}>
              <div className="card">
              <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/> 
                    <button className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>

                    <button className="btn btn-secondary" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
              </Link>
                <div className="card-body p-1">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className=""
                  style={{ textDecoration: "none", color: "gray"}}>
                    <p className="card-text">
                        {course.number}
                        <br /> 
                          <small>{course.startDate}</small> <br/>
                          <small>{course.endDate}</small>
                        <a href="#" className="btn"><i className="fa fa-file"></i></a>
                    </p> 
                    <FaFile className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;