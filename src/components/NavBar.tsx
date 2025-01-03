import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between p-2 text-gray-300">
        <NavLink to="/">
          <span className="">Sucursal Mapper</span>
        </NavLink>
        <ul className="hidden md:flex list-none space-x-5">
          <li>
            <NavLink to="/delegations">Delegation</NavLink>
          </li>
          <NavLink to="/me">
            <li>About me</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
