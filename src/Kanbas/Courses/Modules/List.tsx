import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      {/* <!-- Add buttons here --> */}
        <ul className="list-group wd-modules">
        <li className="list-group-item d-flex">
          
          <button className="btn btn-secondary border" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn border" style={{color:"red"}} onClick={() => dispatch(updateModule(module))}>

                Update
          </button>

          <input className="form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea className="form-control"  value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }
          />
        </li>

          {moduleList.filter((module) => module.course === courseId)
            .map((m) => (
            <li className="list-group-item">

              <ul className="list-group">
                <li className="list-group-item" >

                  <div className="p-3 d-flex" style={{backgroundColor: "lightgray"}} >
                    <FaEllipsisV className="me-2" />
                    <div>{m.name} <br /> <small> {m.description} </small></div>
                    <span className="ms-auto">
                      <button className="btn border" style={{backgroundColor:"white", color:"red"}} onClick={() => {
                        dispatch(setModule(m)) }}>
                        Edit
                      </button>

                      <button className="btn btn-secondary" onClick={() => 
                        dispatch(deleteModule(m._id))}>
                        Delete
                      </button>
                      <FaCheckCircle className="text-success" />
                      <FaPlusCircle className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </div>

                <ul className="list-group">
                  {m.lessons?.map((lesson : any) => (
                    <li className="list-group-item">
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                  </li>
                  ))}
                  
                </ul>
              </ li>
              </ ul>
            </li>
          ))}
        </ul>
    </>
  );
}
export default ModuleList;