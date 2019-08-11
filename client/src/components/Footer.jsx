import React from 'react';
import styles from './style/Footer.css';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <h3>
        <span className={`${styles.footerLink} ${styles.home}`} onClick={() => props.handleHomeClick()}>Home</span> 
        <span className={`${styles.footerLink} ${styles.signUp}`}>Sign Up</span>
        <span className={`${styles.footerLink} ${styles.friend}`} onClick={(e)=>props.handleFriendFormClick()}>Find A Friend</span>
        <span className={`${styles.footerLink} ${styles.about}`}>About Us</span>  
      </h3>
    </div>
  )
};

export default Footer;