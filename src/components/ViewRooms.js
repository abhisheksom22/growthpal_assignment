import React from 'react'
import EachRoom from './EachRoom'
import styles from '../styles/viewUsers.module.css'

const ViewRooms = () => {
  return (
    <div className={styles.viewUsersContainer}>
      <EachRoom/>
      <EachRoom/>

      <EachRoom/>

      <EachRoom/>

      <EachRoom/>

    </div>
  )
}

export default ViewRooms