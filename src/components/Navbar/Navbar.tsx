import { Link, Outlet } from 'react-router-dom'
import { FaReacteurope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
     <nav className="flex justify-between">
      <div className="">
       <span className="text-3xl font-bold">Logo<FaReacteurope /></span>
      </div>
      <div className="flex">
       <ul className="flex">
        <Link to="/">
         <li>Home</li>
        </Link>
        <Link to="/ml">
         <li>M.l</li>
        </Link>
        <Link to="/science">
         <li>Science</li>
        </Link>
       </ul>
      </div>
     </nav>
     <Outlet />
    </div>
  )
}

export default Navbar