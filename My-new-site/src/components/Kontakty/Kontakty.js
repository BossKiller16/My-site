import React from 'react'
import styles from './kontakty.module.css'
import Mapa from './mapa'
const mapStyles = {
   width: '50%',
   height: '50%',
}
function Kontakty() {
   return (
      <div>
         <h1 className={styles.nadpis}>Kontakt</h1>
         <div className={styles.info}>
            <ul>
               <h3>Kontakt na nás</h3>
               <li> Telefon: (+420) 775 112 341</li>
               <li>e-mail:info@penzionjilovanka.cz</li>
            </ul>
            <ul>
               <h3>Adresa</h3>
               <li>Přím 18</li>
               <li>516 01 Javornice</li>
               <div className={styles.mapa}>
                  <Mapa />
               </div>
            </ul>
            <ul>
               <h3>Majitelé a provozovatelé</h3>
               <li> Hana a Vladimír Stýblovi</li>
               <li>IČ: 75905931</li>
            </ul>
         </div>
      </div>
   )
}

export default Kontakty
