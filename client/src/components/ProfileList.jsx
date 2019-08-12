import React from 'react';
import styles from './style/ProfileList.css'
import ProfileEntry from './ProfileEntry.jsx'

const ProfileList = (props) => {
  return (
    <div className={styles.profileList}>
      <h1 className={styles.title}>Furever Pals <i className="fas fa-paw"></i></h1>
      {props.images.map(image => <ProfileEntry image={image}/>)}
    </div>
  )
}

export default ProfileList; 