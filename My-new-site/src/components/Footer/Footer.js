import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './footer.module.css'

function Footer() {
   return (
      <div className={styles.mainFooter}>
         <div className="container">
            <div className="row">
               {/*          
               <div className="col ">
                  <h4>Kontakty</h4>

                  <ul className="list-unstyled">
                     <li> JUDr. Vladimír Stýblo </li>
                     <li>TEL:+420 775 112 341</li>
                     <li>email:info@penzionjilovanka.cz</li>
                     <li>IČO:</li>
                     <li>Přím 516 01</li>
                  </ul>
               </div>
           
               <div className="col">
                  <h4>Místo</h4>
                  <ul className="list-unstyled">
                     <li>sdsadasda</li>
                     <li>sdsadadad</li>;<li>ycxdasdas das y</li>
                  </ul>
               </div>*/}
            </div>
            <div className="row">
               <p className={styles.foot}>
                  Copyright &copy;{new Date().getFullYear()} Křepelky{' '}
               </p>
            </div>
         </div>
      </div>
   )
}

export default Footer
