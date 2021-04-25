import React, { useState, useContext, createContext, useEffect } from 'react'
import { auth } from '../../firebase'
const AuthContext = React.createContext()

export function useAuth() {
   return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState()
   const [loading, setLoading] = useState(true)

   function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password)
   }
   function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
   }
   function logout() {
      return auth.signOut()
   }
   function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
   }
   function sendEmail(email, actionCodeSettings) {
      auth().sendSignInLinkToEmail(email, actionCodeSettings)
   }

   useEffect(() => {
      const unsubcribe = auth.onAuthStateChanged((user) => {
         setUser(user)
         setLoading(false)
      })
      return unsubcribe
   }, [])
   const value = {
      user,
      signup,
      login,
      logout,
      resetPassword,
      sendEmail,
   }
   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}
export default AuthProvider
