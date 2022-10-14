import React from "react"
import { Container } from "./styles";
import Calendar from "../../assets/icons/Calendar.png";
import User from "../../assets/icons/User.png";
import Logout from "../../assets/icons/logout.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container>
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <div className="center">
        <ul>
          <Link to="/">
            <li>
              <img className="icon" src={User} alt="User" />
              <span>Usuários</span>
            </li>
          </Link>
          <Link to="/events">
            <li>
              <img className="icon" src={Calendar} alt="Calendar" />
              <span>Eventos</span>
            </li>
          </Link>
          <li>
            <img className="icon" src={Logout} alt="Calendar" />
            <span>Sair</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Sidebar;