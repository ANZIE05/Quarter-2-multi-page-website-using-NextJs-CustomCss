import "../style/style.css";
import Link from "next/link";

function Header() {
  return (
    <div className="header">


        <div>
            <h1 className="logo">E-Courses</h1>
        </div>

        <div className="links">
            <ul className="list">
                <li><Link className="nav-links" href="">Home</Link></li>
                <li><Link className="nav-links" href="#page1">Courses</Link></li>
                <li><Link className="nav-links" href="">Apply</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Header