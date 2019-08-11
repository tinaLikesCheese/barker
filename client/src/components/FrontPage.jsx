import React from 'react';
import styles from './style/FrontPage.css';

const FrontPage = (props) => {
  return (
    <div>
      <div className={styles.img}>
        <img 
        className={styles.mainImg} 
        style={{objectFit: 'cover'}} 
        src="https://munch-gallery.s3-us-west-1.amazonaws.com/dog.jpg"/>
      </div>
      <div className={styles.btn}>
        <button className={styles.signUp} onClick={(e)=>props.handleFriendFormClick()}>find a playmate <i className="fas fa-paw"></i></button>
      </div>
    </div>

  )
}

export default FrontPage; 