import React, { useState, useRef } from 'react'
import styles from './login.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './RegisterState'
import 'firebase/auth'

function RegistrationForm() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const { signup, sendEmail } = useAuth()
   const history = useHistory()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   async function submitHandler(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError('Hesla se neshodují')
      }
      try {
         setError('')
         setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)

         history.push('/')
      } catch {
         setError('nepodařilo se vytvořit účet.')
      }

      setLoading(false)
   }

   return (
      <div className={styles.wrap}>
         <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.form_inner}>
               <h2> Registrace</h2>
               {error !== '' ? <div className="error">{error}</div> : ''}
               <div className={styles.form_group}>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" ref={emailRef} id="email" />
               </div>
               <div className={styles.form_group}>
                  <label htmlFor="password">Heslo</label>
                  <input type="password" ref={passwordRef} id="password" />
               </div>
               <div className={styles.form_group}>
                  <label htmlFor="password">Potvrzení hesla</label>
                  <input
                     type="password"
                     ref={passwordConfirmRef}
                     id="password"
                  />
               </div>
               <input type="submit" value="registrace" disabled={loading} />

               <Link to="/prihlasit-se">Přihlásit se</Link>
            </div>
         </form>
      </div>
   )
}

export default RegistrationForm
