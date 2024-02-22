import { FaEllipsisV } from "react-icons/fa";

function AssignmentButtons() {
    return (
        <div className="d-none d-md-flex" style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <input type="text" placeholder="Search for Assignment" />
            </div>
            <div>
                <button className="btn" style={{height:"35px", backgroundColor:"lightgray"}}>+Group</button>
                <button className="btn btn-danger" style={{height:"35px"}}>+Assignment</button>
                <button className="btn" style={{height:"35px", backgroundColor: "lightgray"}}>
                <FaEllipsisV /></button>
            </div>
        </div>
    )
}
export default AssignmentButtons;