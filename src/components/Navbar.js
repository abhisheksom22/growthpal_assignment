import React from 'react'
import styles from '../styles/navbar.module.css'
import { useNavigate} from 'react-router'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location= useLocation();
    const parameters= location.pathname.split('/')
  return (
    <div className={styles.navContainer}>
        <Link to='/home/addNewUser' className={styles.navButtons} style={{
                  borderBottom:
                    parameters[2] === "addNewUser"
                      ? "2px solid aliceBlue"
                      : "none",
                }}>Add New User</Link>
        <Link to='/home/addNewMeeting' className={styles.navButtons} style={{
                  borderBottom:
                    parameters[2] === "addNewMeeting"
                      ? "2px solid aliceBlue"
                      : "none",
                }}>Add New Meeting</Link>
        <Link to='/home/viewUsers' className={styles.navButtons} style={{
                  borderBottom:
                    parameters[2] === "viewUsers"
                      ? "2px solid aliceBlue"
                      : "none",
                }}>View Users</Link>
        <Link to='/home/viewRooms' className={styles.navButtons} style={{
                  borderBottom:
                    parameters[2] === "viewRooms"
                      ? "2px solid aliceBlue"
                      : "none",
                }}>View Rooms</Link>
    </div>
  )
}

export default Navbar