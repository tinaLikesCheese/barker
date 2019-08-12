import React from 'react';
import styles from './style/SideNav.css'

const SideNav = (props) => {
  return(
    <div className={props.body === 'front' ? styles.sideNav : styles.sideNav2}>
      <p onClick={()=>{props.handleHomeClick()}}>home</p>
      <p>sign up</p>
      <p onClick={()=>props.handleFriendFormClick()}>find pup friend</p>
      <p><i className="fas fa-paw"></i> about barker</p>
    </div>
  )
}
export default SideNav;