import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
     <div className={styles.profileContainer}>
         <img src="https://github.com/Juliano-matos-baby.png" alt="Juliano Matos"/>
         <div>
             <strong>Juliano Matos</strong>
             <p>
                 <img src="icons/level.svg" alt="Level"/>
                 Level 3
            </p>
         </div>
     </div>
    );
}