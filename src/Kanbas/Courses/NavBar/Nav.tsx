import { FaChevronDown} from "react-icons/fa";
import { useLocation } from "react-router";
import NavBarCourses from "./NavBarCourses";
import NavBarKanbas from "./NavBarKanbas";

function Nav() {
    const location = useLocation().pathname;

    return (
        <div className="d-block d-md-none">
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">{location.substring(location.lastIndexOf('/') + 1)}
</a>


                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent-2"
                aria-controls="navbarSupportedContent-2"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon-2"><FaChevronDown /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <NavBarCourses />
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-2">
                        <NavBarKanbas />
                </div>
                </div>
            </nav>
        </div>
    );
}
export default Nav;