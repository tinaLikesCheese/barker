import React from 'react';
import styles from './style/ProfileEntry.css'

const ProfileEntry = (props) => {
  let likes = '';
  for (let like of props.image.likes) {
    likes += ` ${like},`
  }

  likes = likes.slice(0, likes.length - 1)

  return (
    <div>
      <div className={styles.profileEntry}>
        <img className={styles.img} src={props.image.url}/>
        <div className={styles.words}>
          <p><span className={styles.cat}>Name:</span> {props.image.name}</p><br/>
          <p><span className={styles.cat}>Age:</span> {props.image.age}</p><br/>
          <p><span className={styles.cat}>Size:</span> {props.image.size}</p><br/>
          <p><span className={styles.cat}>Likes:</span>  {likes} </p><br/>
          <p><span className={styles.cat}>About:</span><br/>
          {props.image.about} </p><br/>
        </div>
      </div> 
      <div className={styles.profileEntryMobile}>
      <img className={styles.img} src={props.image.url}/>
        <div className={styles.words}>
          <p><span className={styles.cat}>Name:</span> {props.image.name}</p><br/>
          <p><span className={styles.cat}>Age:</span> {props.image.age}</p><br/>
          <p><span className={styles.cat}>Size:</span> {props.image.size}</p><br/>
          <p><span className={styles.cat}>Likes:</span>  {likes} </p><br/>
          <p><span className={styles.cat}>About:</span><br/>
          {props.image.about} </p><br/>
        </div> 
      </div>
    </div>
  )
}

export default ProfileEntry; 