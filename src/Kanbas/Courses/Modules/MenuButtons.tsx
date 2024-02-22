import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function MenuButtons() {
    return (
    <div>
        <div className="low-margin container d-flex justify-content-end" >
        <div className="row">
        <div className="col-auto p-0  mr-0">
            <button className="btn" style={{height: "35px", backgroundColor: "lightgray"}}>Collapse All</button>
        </div>
        <div className="col-auto p-0  mr-0">
            <button className="btn" style={{height: "35px", backgroundColor: "lightgray"}}>View Progress</button>
        </div>
        <div className="col-auto p-0  mr-0">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={{border: "0px", 
                height:"35px", color: "black", backgroundColor: "lightgray"}} 
                        type="button" id="dropdownMenuButton" 
                        data-bs-toggle="dropdown" aria-haspopup="true" 
                        aria-expanded="false">
                        <FaCheckCircle className="text-success" />
                        Publish All
                </button>
                
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Publish All</a>
                <a className="dropdown-item" href="#">Publish All Modules and Items</a>
                <a className="dropdown-item" href="#">Publish Modules only</a>
                <a className="dropdown-item" href="#">UnPublish All Modules</a>
                </div>
            </div>
        </div>
        <div className="col-auto p-0  mr-0">
            <button className="btn btn-danger" style={{height:"35px"}}>+ Module</button>
        </div>
        <div className="col-auto p-0  mr-0">
            <button className="btn" style={{height:"35px", backgroundColor: "lightgray"}}>
                <FaEllipsisV /></button>
        </div>
        </div>
        </div>
        <hr />
    </div>);
}
export default MenuButtons;