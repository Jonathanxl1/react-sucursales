import { NavLink, useLocation, useNavigate } from "react-router";
import {
  cleanBeareToken,
  getBearerToken,
} from "../storage/localStorage.storage";
import { useEffect, useState } from "react";

function Navbar() {
  let [logged, SetLogged] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  function checkLogin() {
    let token = getBearerToken();
    SetLogged(() => token == null);
  }

  function closeSession() {
    cleanBeareToken();
    navigate("/");
  }

  useEffect(() => {
    checkLogin();
  }, [location]);

  return (
    <>
      <div className="w-full h-auto flex items-center justify-between p-2 text-gray-300">
        <NavLink to="/">
          <span className="">Sucursal Mapper</span>
        </NavLink>
        <ul className="hidden md:flex list-none space-x-5">
          {logged ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/aboutme">About me</NavLink>
              </li>
              <li onClick={closeSession}>Close Session</li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
