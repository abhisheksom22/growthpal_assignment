import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/home.module.css'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home