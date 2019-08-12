import React from 'react';
import styles from './style/ProfileEntry.css'

const ProfileEntry = (props) => {
  return (
    <div>
      <div className={styles.profileEntry}>
        <img className={styles.img} src='https://munch-gallery.s3-us-west-1.amazonaws.com/Janice.jpg'/>
        <div className={styles.words}>
          <p>Name: Janice</p>
          <p>Age: 6Y</p>
          <p>Size: Small</p>
          <p>Play: Chase, Fetch</p>
          <p>About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam neque quaerat earum alias molestias eveniet sint recusandae quibusdam. Impedit enim molestiae laudantium, odio eaque voluptates saepe cumque ipsam iure.</p>
        </div>
      </div> 
      <div className={styles.profileEntryMobile}>
      <img className={styles.img} src='https://munch-gallery.s3-us-west-1.amazonaws.com/Janice.jpg'/>
        <div className={styles.words}>
          <p>Name: Janice</p>
          <p>Age: 6Y</p>
          <p>Size: Small</p>
          <p>Play: Chase, Fetch</p>
          <p>About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam neque quaerat earum alias molestias eveniet sint recusandae quibusdam. Impedit enim molestiae laudantium, odio eaque voluptates saepe cumque ipsam iure.</p>
        </div> 
      </div>
    </div>
  )
}

export default ProfileEntry; 