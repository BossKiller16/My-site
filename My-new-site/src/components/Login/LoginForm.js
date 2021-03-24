import React, { useState, useContext, useRef } from 'react'
import styles from "./login.module.css"
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./RegisterState"
import "firebase/auth";


function Login() {
    const namRef = useRef()
    const emaiRef = useRef()
    const passwordRef = useRef()
    const { login, user, logout } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    console.log(user);
    async function handleLogout() {
        setError("")
        try
        {
            await logout()
        } catch {
            setError("nepodařilo se odhlásit")
        }
    }
    async function submitHandler(e) {
        e.preventDefault()


        try
        {
            setError("");
            setLoading(true);
            await login(emaiRef.current.value, passwordRef.current.value)
            /*       history.push("/") */
        } catch {
            setError("nepodařilo se přihlásit.")
        }
        setLoading(false)
    }
    if (user === null)
    {
        return (

            <div className={styles.wrap}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.form_inner}>
                        <h2>  Přihlašení</h2>
                        {(error !== "") ? (<div className="error">{error}</div>) : ""}
                        <div className={styles.form_group}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" ref={emaiRef} id="email" />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="password">Heslo</label>
                            <input type="password" ref={passwordRef} id="password" />
                        </div>
                        <input type="submit" value="přihlásit se" disabled={loading} />
                        <Link to="/registrace">Chci se zaregistrovat.</Link>
                        <div><Link to="zmena-hesla">Zapomněl jsem heslo</Link></div>
                    </div>
                </form></div>
        )
    } else
    {
        return (
            <div className={styles.wrap}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.form_inner} style={{ textAlign: "center" }}>
                        <h2>  Přihlášen</h2>
                        <div>{user && user.email}</div>
                        {(error !== "") ? (<div className="error">{error}</div>) : ""}


                        <input type="submit" value="Odhlasit se" onClick={handleLogout} disabled={loading} />
                    </div>
                </form>
            </div>
        )
    }



}

export default Login
