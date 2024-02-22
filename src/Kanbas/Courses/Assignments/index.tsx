import React from "react";
import { FaCaretDown, FaCheckCircle, FaDesktop, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import AssignmentButtons from "./AssignmentButtons";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
        <AssignmentButtons />
          <ul className="list-group wd-modules">
            <li className="list-group-item">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="p-3" style={{backgroundColor: "lightgray"}} >
                    <FaEllipsisV className="me-2" />
                    <FaCaretDown />
                    <b>ASSIGNMENTS</b>
                    <span className="float-end">
                      <button className="btn" 
                      style={{height:"35px", backgroundColor:"lightgray", borderRadius:"30%", border:"2px solid black"}}>
                        40% of total</button>
                      <FaPlus  className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </div>
              </ li>
              </ ul>
              <ul className="list-group">
              {assignmentList.map((assignment) => (
                    <li className="list-group-item d-flex justify-content-between">
                        <div className="d-flex">
                          <FaEllipsisV className="me-2" />
                          <FaDesktop className="m-2" style={{color:"green"}}/>
                          <div>
                            <b><Link style={{textDecoration:"none", color: "black"}}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                  {assignment.title}</Link></b>
                            <br />
                            <label style={{color:"red"}}>Multiple Modules</label> |
                            <b className="m-2">Due</b> {assignment.due} |
                            <label className="m-2">{assignment.points}</label>
                          </div>
                        </div>
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                  </li>
                  ))}
                  
                </ul>
            </li>
        </ul>
    </>
  );
}
export default Assignments;