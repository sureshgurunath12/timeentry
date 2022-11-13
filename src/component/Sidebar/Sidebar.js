import "./Sidebar.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar ">
        <section className="sidebar-sec">
          <div className="logo">
            <span>KONAMI</span>
          </div>
          <div className="header">
            <span>Menu</span>
          </div>
          {/* <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form> */}
          <ul className="side-menu" data-widget="tree">
            {/* <li className="header">MAIN NAVIGATION</li> */}
            <li>
              <a href="#">
                <i className="fa fa-files-o"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="pages/widgets.html">
                <i className="fa fa-th"></i>
                <span>Time Sheet</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>My Activity</span>
              </a>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/reports">
                <i className="fa fa-pie-chart"></i>
                <span>Reports</span>
              </NavLink>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Tasks</span>
              </a>
            </li>
          </ul>
          <div className="header">
            <span>Admin</span>
          </div>
          <ul className="side-menu" data-widget="tree">
            <li>
              <NavLink exact activeClassName="active" to="/projects">
                <i className="fa fa-files-o"></i>
                <span>Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/projectstree">
                <i className="fa fa-files-o"></i>
                <span>Project Tree</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/users">
                <i className="fa fa-th"></i>
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Team</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Settings</span>
              </a>
            </li>
            {/* <li>
                        <a href="pages/calendar.html">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-red">3</small>
                            <small className="label pull-right bg-blue">17</small>
                            </span>
                        </a>
                        </li>
                        <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-yellow">12</small>
                            <small className="label pull-right bg-green">16</small>
                            <small className="label pull-right bg-red">5</small>
                            </span>
                        </a>
                        </li> */}
          </ul>
        </section>
      </aside>
    );
  }
}
