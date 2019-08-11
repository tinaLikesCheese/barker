import React from 'react';
import styles from './style/NavBar.css'

const NavBar = (props) => {
  return (
    <div className={styles.navBar}>
      <header className={styles.title}>
        <h1>barker <i className="fas fa-paw"></i>
          <span className ={styles.tagline}>playmates for your pup mate</span>
        </h1>
      </header>
      <h1 className={styles.searchIcon}><i className="fas fa-bars" onClick={()=>props.menuClicked()}></i></h1>
    </div>
  )
}

export default NavBar; 