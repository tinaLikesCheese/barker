import React from 'react';
import styles from './style/Footer.css';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <h3>
        <span className={`${styles.footerLink} ${styles.home}`} onClick={() => props.handleHomeClick()}>home</span> 
        <span className={`${styles.footerLink} ${styles.signUp}`}>sign up</span>
        <span className={`${styles.footerLink} ${styles.friend}`} onClick={(e)=>props.handleFriendFormClick()}>find a friend</span>
        <span className={`${styles.footerLink} ${styles.about}`}>about us</span>  
      </h3>
    </div>
  )
};

export default Footer;