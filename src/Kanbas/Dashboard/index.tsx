import React from "react";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
  return (
    <div className="p-4">
      <h2>Dashboard</h2>              <hr />
      <h3>Published Courses ({courses.length})</h3> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col mt-0 mb-4" style={{ width: 300 }}>
              <div className="card">
              <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/> </Link>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className=""
                  style={{ textDecoration: "none", color: "gray"}}>
                    <p className="card-text">
                        {course.number}
                        <br /> 
                        <small>{course.startDate}</small>
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