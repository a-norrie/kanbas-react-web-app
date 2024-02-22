import { status } from "../../../Database";
import { useParams } from "react-router";
import { FaBell, FaCalendar, FaChartBar, FaExclamation, FaMicrophone, FaBullseye, FaCircle, FaFile, FaBan, FaCheckCircle } from "react-icons/fa";

function Status() {
    const { courseId } = useParams();
    const todoList = status.filter((status) => (status.course === courseId) && (status.type === "TODO"));
    const comingList = status.filter((status) => (status.course === courseId) && (status.type === "COMING"));


    return (
        <div className = "container"> 
        <div className = "row">
            Course Status
        </div>
        <div className="row">
            <div className="col d-flex justify-content-start p-0">
                <button className="btn" style={{height:"35px", width:"120px", backgroundColor: "lightgray"}}>
                    <FaBan /> Unpublish
                </button>
                <button className="btn" style={{height:"35px", width:"120px", backgroundColor: "lightgreen"}}>
                    <FaCheckCircle /> Published
                </button>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaFile />  Import Existing Content
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaCircle />  Import from Commons
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaBullseye />  Choose Home Page
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
            <FaChartBar />  View Course Stream
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaMicrophone /> New Announcement
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaChartBar />  New Analytics 
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col justify-content-start p-0">
            <button className="btn" style={{height:"35px", width:"240px", backgroundColor: "lightgray"}}>
                    <FaBell />  View Course Notifications
                </button>
            </div>
        </div>

        <div className="row">
            <div className="col justify-content-start p-0">
                <br/>
                <b>To Do</b>
                <hr /> 

                <div>
                {todoList.map((todo) => (
                    <div>
                        <FaExclamation className="text-danger" />
                        <label className="text-danger"> {todo.name} </label>
                        <br />
                        <small>{todo.points} Points * {todo.date} at {todo.time}</small>
                    </div>
                ))}

            </div>
        </div>
        <div className="row"> 
            <div className="col justify-content-start p-0">
                <br /> 
                <b>Coming Up</b>
                <small><FaCalendar />
                <label className="text-danger">View Calendar </label> </small>
                <hr />             
            </div>
        </div>
        {comingList.map((coming) => (
            <div className="row">
                  <div className="d-flex justify-content-start p-0 pr-1">
                      <div className="p-1">
                          <small><FaCalendar /></small>
                      </div>
                      <div>
                          <label className="text-danger"> {coming.name} </label>
                          <br />
                          <small>{coming.course}</small>
                          <br />
                          <small>{coming.date} at {coming.time}</small>
                      </div>
                  </div>
            </div>
        ))}
        </div>
        </div>
    );
}

export default Status;