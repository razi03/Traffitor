import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import '../styles/NavbarStyles.css';
import { confirmAlert } from 'react-confirm-alert';

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLogout = () => {
    confirmAlert({
      title: '',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            console.log("Logged out");
            window.location.href = '/';
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      customUI: ({ onClose }) => (
        <div className="alert">
          <h1>Confirm Logout</h1>
          <p>Are you sure you want to logout?</p>
          <div className="button-group">
            <button onClick={() => { onClose(); window.location.href = '/'; }}>Yes</button>
            <button onClick={onClose}>No</button>
          </div>
        </div>
      )
    });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Traffitor</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.slice(0, -1).map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.icon && <i className={item.icon}></i>}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="logout-button" onClick={this.handleLogout}>
          {MenuItems[MenuItems.length - 1].title}
        </button>
      </nav>
    );
  }
}

export default Navbar;
