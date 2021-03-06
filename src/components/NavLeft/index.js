import React from 'react'
import {Progress, Icon, Menu, Divider} from 'antd'
import {NavLink} from "react-router-dom"
import './index.less'

export default class NavLeft extends React.Component {

    render() {
        const userInfo = {
            name: "Lawrence Liu",
            role: "Owner",
            status: 33
        }
        return (
            <div className="nav-left">
                    <div className="title">Hi, {userInfo.name}</div>
                    <div className="role">Role: {userInfo.role}</div>
                    <div className="loading-title">Set Up Your Profile</div>
                    <div className="loading">
                        <Progress percent={userInfo.status}
                            showInfo={false }
                        >
                        </Progress>
                    </div>
                    <div className="loading-status">
                        2/6 completed
                    </div>
                    <Menu className="menu">
                        <Menu.Item className="menu-firstItem" title="Medical Record" key = "/record">
                            <NavLink className="link-style" to="/record">
                                <img className="navLeft-icon" src="/assets/icon/Record.svg" alt="record"></img>
                                <span className="menu-content">Medical Record</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item className="menu-divider" title="Vaccination" key="/vaccination">
                            <NavLink className="link-style" to="/vaccination">
                                <img className="navLeft-icon" src="/assets/icon/Vaccination.svg" alt="Vaccination"></img>
                                <span className="menu-content">Vaccination</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item className="menu-divider" title="Wellness Data" key="/wellness">
                            <NavLink className="link-style" to="/wellness">
                                <img className="navLeft-icon" src="/assets/icon/Data.svg" alt="data"></img>
                                <span className="menu-content">Wellness Data</span>
                            </NavLink>
                        </Menu.Item>
                        <Divider className="menu-divider"/>
                        <Menu.Item title="Account Setting" key="/account">
                            <NavLink className="link-style" to="/account">
                                <img className="navLeft-icon" src="/assets/icon/Profile_Management.svg" alt="profile"></img>
                                <span className="menu-content">Profiles</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Finance" key="/finance">
                            <NavLink className="link-style" to="/finance">
                                <img className="navLeft-icon" src="/assets/icon/Finance.svg" alt="finance"></img>
                                <span className="menu-content">Finance</span>
                                </NavLink>
                        </Menu.Item>
                        <Menu.Item title="To be decided" key="/blank1">
                            <NavLink className="link-style" to="/blank1">
                                <img className="navLeft-icon" src="/assets/icon/Settings.svg" alt="setting"></img>
                                <span className="menu-content">Settings</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item title="Application" key="/application">
                            <NavLink className="link-style" to="/application">
                                <img className="navLeft-icon" src="/assets/icon/Applications.svg" alt="Application"></img>
                                <span className="menu-content">Application</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}