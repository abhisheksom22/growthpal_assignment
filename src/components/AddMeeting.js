import React, {useEffect, useState} from 'react'
import styles from '../styles/register.module.css'
import { useNavigate } from 'react-router';

const AddMeeting = () => {

    const [roomID, setRoomID] = useState('');
    const [roomName, setRoomName] = useState('');
    const [isRegister, setIsRegister] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
    }

    useEffect(() => {
        if (roomID && roomName) {
            setIsRegister(true)
        } else {
            setIsRegister(false)
        }
    }, [roomID, roomName])

    return (
        <div className={styles.addUserContainer}>
            <div className={styles.registerFormDiv} style={{left: '470px'}}>
                <h3 style={{ marginTop: '30px' }}>Add New Meeting</h3>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    <div>
                        <p style={{ textAlign: "start", margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Room ID</p>
                        <input type='text' onChange={(e) => setRoomID(e.target.value)} name='ID' value={roomID} className={styles.formInput} placeholder='Enter Room ID'></input>
                    </div>
                    
                    <div>
                        <p style={{ textAlign: "start", margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Room Name</p>
                        <input type='text' onChange={(e) => setRoomName(e.target.value)} name='name' valur={roomName} className={styles.formInput} placeholder='Enter Room Name'></input>
                    </div>
                    <button type='submit' className={styles.registerButton} disabled={!isRegister} >Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddMeeting