import React, { useEffect, useState } from 'react'
import registerBackground from '../assets/registerBackground.jpg'
import styles from '../styles/register.module.css'
import { useNavigate } from 'react-router'

const Register = () => {
  const [userID, setUserID] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const [userIDValid, setUserIDValid] = useState(true);
  const [userEmailValid, setUserEmailValid] = useState(true);

  const [isRegister, setIsRegister] = useState(false)

  const navigate= useNavigate()

  const userIdHandler = (id) =>{
    setUserID(id)
    if(/^[0-9]+$/.test(id)){
      setUserIDValid(true)
    }else{
      setUserIDValid(false)
    }
  }

  const userEmailHandler = (email) =>{
    setUserEmail(email)
    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
      setUserEmailValid(false)
    }else{
      setUserEmailValid(true)
    }
  }

  const handleSubmit= ()=>{
    navigate('/home')
  }

  useEffect(()=>{
    if(userIDValid && userEmailValid && userName){
      setIsRegister(true)
    }else{
      setIsRegister(false)
    }
  }, [userIDValid, userEmailValid, userName])

  return (
    <div className={styles.registerContainer}>
      <img src={registerBackground} className={styles.backgroundImg}></img>
      <div className={styles.registerFormDiv}>
        <h3 style={{ marginTop: '30px' }}>Register</h3>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div>
            <p style={{ textAlign: "start", margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>User ID</p>
            <input type='text' onChange={(e)=>userIdHandler(e.target.value)} name='ID' value={userID} className={userIDValid? styles.formInput: styles.invalidFormInput} placeholder='Enter ID'></input>
          </div>
          <div>
            <p style={{ textAlign: "start", margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Email</p>
            <input type='email' onChange={(e)=>userEmailHandler(e.target.value)} name='email' value={userEmail} className={userEmailValid? styles.formInput: styles.invalidFormInput} placeholder='Enter Email'></input>
          </div>
          <div>
            <p style={{ textAlign: "start", margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Name</p>
            <input type='text' onChange={(e)=> setUserName(e.target.value)} name='name' valur={userName} className={styles.formInput} placeholder='Enter Name'></input>
          </div>
          <button type='submit' className={styles.registerButton} disabled={!isRegister} >Submit</button>
        </form>

      </div>

    </div>
  )
}

export default Register