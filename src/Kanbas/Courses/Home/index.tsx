import Modules from "../Modules"
import Nav from "../NavBar/Nav";
import Status from "./Status";
function Home() {
  return (
    <div>
      <div className="d-flex">
        <div className="flex-grow-1">
            <Modules/>
        </div>
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: "250px"}}>
            <Status />
        </div>
      </div>
    </div>
  );
}
export default Home;