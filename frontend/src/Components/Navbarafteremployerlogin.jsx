import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { NavLink ,useNavigate} from "react-router-dom";

const NavbarComponentAfterEmployerLogin = () => {
  const [changeColor, setchangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    } else {
      setchangeColor(false);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  const navLinks = [
    { id: 1, path: "/", text: "Dashboard" },

    { id: 2, path: "/createjob", text: "Create job offer" },
  ];

  const handleLogout = () => {

    localStorage.removeItem('Employertoken');

    navigate('/');
  };

















  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            SCHEDULER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <Button onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponentAfterEmployerLogin;
