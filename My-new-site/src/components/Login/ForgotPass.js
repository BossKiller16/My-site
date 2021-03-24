import React, { useState, useContext, useRef } from 'react'
import styles from "./login.module.css"
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./RegisterState"
import "firebase/auth";


function ForgotPassword() {
    const namRef = useRef()
    const emaiRef = useRef()
    const { resetPassword } = useAuth()

    const [error, setError] = useState("")
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function submitHandler(e) {
        e.preventDefault()
        try
        {
            setError("");
            setLoading(true);
            await resetPassword(emaiRef.current.value)
            setMessage("Koukněte se do e-mailu")
        } catch {
            setError("nepodařilo se resetovat heslo")
        }
        setLoading(false)
    }
    return (
        <div className={styles.wrap}>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.form_inner}>

                    <h2>  Resetovaní hesla</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    {message}
                    <div className={styles.form_group}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" ref={emaiRef} id="email" />
                    </div>


                    <input type="submit" value="Změnit heslo" disabled={loading} />


                    <Link to="/registrace">Chci se zaregistrovat.</Link>
                    <div><Link to="prihlasit-se">přihlašení</Link></div>
                </div>


            </form>
        </div>
    )
}

export default ForgotPassword
