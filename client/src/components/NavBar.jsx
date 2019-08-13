import React from 'react';
import styles from './style/NavBar.css'

const NavBar = (props) => {
  return (
    <div className={styles.navBar}>
      <header className={styles.title}>
        <h1>barker <i className="fas fa-paw"></i>
          <span className ={styles.tagline}>playmates for your pupmate</span>
        </h1>
      </header>
      <span className={styles.links}>
        <span onClick={()=>props.handleHomeClick()}> home </span>
        <span onClick={()=>props.handleSignUp()}> sign up </span>
        <span onClick={()=>props.handleFriendFormClick()}> find pup friend </span>
        <span> <i className="fas fa-paw"></i> about barker </span>
      </span>
      <h1 className={styles.burgerIcon}>
        <i className="fas fa-bars" onClick={()=>props.menuClicked()}></i>
      </h1>
    </div>
  )
}

export default NavBar; 