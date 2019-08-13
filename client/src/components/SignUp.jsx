import React from 'react';
import styles from './style/SignUp.css';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      dogName:'',
      age:'',
      roughhouse:'',
      chase:'',
      fetch:'',
      toys:'',
      size:'pick',
      about:'',
      url:'',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.size === 'pick' ){
      event.preventDefault();
      alert('Please select a size for your dog')
    } else {
      let likes = [];
      for (let key in this.state) {
        if(this.state[key] === true) {
          likes.push(key);
        }
      }
      axios.post('/dog', {
        dogName: this.state.dogName,
        age: this.state.age,
        size: this.state.size,
        url: this.state.url,
        likes: likes,
        about: this.state.about,
      })
      .then(()=> console.log('success'))
      .catch(err=> console.log(err))
    }
  }

 

  render(){
    return(
      <div className={styles.signUpForm}>
        <span className={styles.closeIcon}><i onClick={this.props.handleHomeClick} className="fas fa-times"></i></span>
        <h2 className={styles.formTitle}> Sign For Barker Today  <i className="fas fa-paw"></i></h2><br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className={styles.question}>Name of Dog</span><br/>
            <input
              name="dogName"
              className={styles.input}
              type="text"
              value={this.state.dogName}
              onChange={this.handleInputChange} />
          </label><br/>
          <br/>
          <label>
            <span className={styles.question}>Age</span><br/>
            <input
              name="age"
              type="number"
              value={this.state.age}
              onChange={this.handleInputChange} />
          </label><br/>
          <br/>
          <label>
            <span className={styles.question}>Size:</span><br/>
            <select name='size'value={this.state.size} onChange={this.handleChange}>
              <option value="pick"> Choose Size </option>
              <option value="xsmall"> X-Small (2 - 9 lbs) </option>
              <option value="small"> Small (10 - 27 lbs)</option>
              <option value="medium"> Medium (28 - 59 lbs)</option>
              <option value="large">Large (60 - 99 lbs)</option>
              <option value="xlarge">XL (99+ lbs)</option>
            </select><br/>
          </label>
          <br/>
          <label>
            <span className={styles.question}>About</span><br/>
              <textarea type="text" className={styles.about} name="about" value={this.state.about} onChange={this.handleChange} />
          </label>
          <h3 className={styles.question}>My dog likes to ...</h3>
          <label>
            wrestle/roughhouse
            <input
              name="roughhouse"
              type="checkbox"
              checked={this.state.roughhouse}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            chase and be chased by other dogs
            <input
              name="chase"
              type="checkbox"
              checked={this.state.chase}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            play fetch and chase afer toys/balls
            <input
              name="fetch"
              type="checkbox"
              checked={this.state.fetch}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            play with toys/play tug of war
            <input
              name="toys"
              type="checkbox"
              checked={this.state.toys}
              onChange={this.handleInputChange} />
          </label><br/>
          <br/>
          <label>
            <span className={styles.question}>Add a Photo</span><br/>
            <input
              name="url"
              type="text"
              className={styles.input}
              value={this.state.url}
              onChange={this.handleInputChange} />
          </label><br/>
          <input className={styles.submit} type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUp;






          {/* <label>
            <span className={styles.question}>Size:</span><br/>
            <select name='size' value={this.state.size} onChange={this.handleChange}>
              <option value="xsmall"> X-Small (2 - 9 lbs) </option>
              <option value="small"> Small (10 - 27 lbs)</option>
              <option value="medium"> Medium (28 - 59 lbs)</option>
              <option value="large">Large (60 - 99 lbs)</option>
              <option value="xlarge">XL (99+ lbs)</option>
            </select>
          </label> */}
          {/* <label><br/> 
            <span className={styles.question}>About</span><br/>
            <input name="about" type='textarea' value={this.state.about} onChange={this.handleChange} />
          </label> */}
          {/* <h3 className={styles.question}>My dog likes to ...</h3>
          <label>
            wrestle/roughhouse
            <input
              name="roughhouse"
              type="checkbox"
              checked={this.state.roughhouse}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            chase and be chased by other dogs
            <input
              name="chase"
              type="checkbox"
              checked={this.state.chase}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            play fetch and chase afer toys/balls
            <input
              name="fetch"
              type="checkbox"
              checked={this.state.fetch}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            play with toys/play tug of war
            <input
              name="toys"
              type="checkbox"
              checked={this.state.toys}
              onChange={this.handleInputChange} />
          </label><br/> */}