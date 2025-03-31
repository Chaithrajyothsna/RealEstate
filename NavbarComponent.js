import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Signup">Signup</NavLink>

    </nav>
  );
}

export default NavbarComponent;
