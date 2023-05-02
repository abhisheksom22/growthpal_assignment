import React from 'react'
import EachUser from './EachUser'
import styles from '../styles/viewUsers.module.css'
const ViewUsers = () => {
  return (
    <div className={styles.viewUsersContainer}>
      <EachUser/>
      <EachUser/>
      <EachUser/>
      <EachUser/>
      <EachUser/>
    </div>
  )
}

export default ViewUsers