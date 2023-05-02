import React, { useState } from 'react'
import styles from '../styles/eachUser.module.css'
import { MdModeEditOutline } from "react-icons/md";

const EachRoom = () => {
    const [roomName, setRoomName] = useState('Orientation')
    const [editRoom, setEditRoom] = useState(false)
    return (
        <div className={styles.eachUserContainer}>
            <h4 className={styles.userDetails}>Room ID</h4>
            {editRoom ? <input type='name' value={roomName} className={styles.formInput} onChange={(e) => setRoomName(e.target.value)}></input> : <h4 className={styles.userDetails}>{roomName}</h4>}
            {editRoom ? <button type='button' onClick={() => setEditRoom(!editRoom)} className={styles.removeBtn}>Done</button> : <MdModeEditOutline style={{ color: 'midnightblue', cursor: 'pointer' }}
                onClick={() => setEditRoom(!editRoom)} />}

            <button type='button' className={styles.removeBtn}>Remove</button>
        </div>
    )
}

export default EachRoom