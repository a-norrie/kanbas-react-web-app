import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaQuestion, FaArrowRight, FaDesktop, FaHistory, FaInbox, FaPlug, FaPersonBooth, FaHome, FaRocket, FaCircle } from "react-icons/fa";
function NavBarKanbas() {
  const links = [
    { label: "Home",   icon: <FaHome className="fs-2" />  },
    { label: "Modules", icon: <FaCircle className="fs-2" />  },
    { label: "Piazza",   icon: <FaPlug className="fs-2" />           },
    { label: "Zoom Meetings",  icon: <FaPlug className="fs-2" /> },
    { label: "Assignments",  icon: <FaDesktop className="fs-2" /> },
    { label: "Quizzes",  icon: <FaRocket className="fs-2" /> },
    { label: "Grades",  icon: <FaDesktop className="fs-2" /> },
    { label: "People",  icon: <FaPersonBooth className="fs-2" /> },
    { label: "Pantopo Video",  icon: <FaPlug className="fs-2" /> },
    { label: "Credentials",  icon: <FaPlug className="fs-2" /> },
    { label: "Progress Reports",  icon: <FaPlug className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-nav-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> <i>{link.icon}</i> {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavBarKanbas;