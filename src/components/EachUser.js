import React, { useState } from 'react'
import styles from '../styles/eachUser.module.css'
import { MdModeEditOutline } from "react-icons/md";

const EachUser = () => {
  const [userName, setUserName]= useState('Abhi')
  const [userEmail, setUserEmail]= useState('abhishek@gmail.com')
  const [editUser, setEditUser] = useState(false)
  return (
    <div className={styles.eachUserContainer}>
      <h4 className={styles.userDetails}>1</h4>
      {editUser? <input type='name' value={userName} className={styles.formInput} onChange={(e)=>setUserName(e.target.value)}></input>:<h4 className={styles.userDetails}>{userName}</h4>}
      {editUser? <input type='email' value={userEmail} className={styles.formInput} onChange={(e)=>setUserEmail(e.target.value)}></input>:<h4 className={styles.userDetails}>{userEmail}</h4>}

      
      {editUser ? <button type='button' onClick={() => setEditUser(!editUser)} className={styles.removeBtn}>Done</button> : <MdModeEditOutline style={{ color: 'midnightblue', cursor: 'pointer' }}
        onClick={() => setEditUser(!editUser)} />}
      <button type='button' className={styles.removeBtn}>Remove</button>
    </div>
  )
}

export default EachUser