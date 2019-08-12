import React from 'react';
import axios from 'axios';
import styles from './style/Search.css'
import sampleData from './sampleData.js';


class Search extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      roughhouse:'',
      chase:'',
      fetch:'',
      toys:'',
      xsmall:'',
      small:'',
      medium:'',
      large:'',
      xlarge:'',
      value:'pick',
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
    console.log(event.target)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value === 'pick' ){
      alert('Please select if puppies are okay!')
    } else {
      console.log(this.state);
      this.props.renderProfiles(sampleData);
    }
  }

  render(){
    return(
      <div className={styles.searchForm}>
        <span className={styles.closeIcon}><i onClick={this.props.handleHomeClick} className="fas fa-times"></i></span>
        <h2 className={styles.formTitle}> Tell us a little bit about your pup! </h2>
        <form onSubmit={this.handleSubmit}>
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
          <h3 className={styles.question}>My dog prefers dogs that are...</h3>
          <label>
            X-Small (2 - 9 lbs)
            <input
              name="xsmall"
              type="checkbox"
              checked={this.state.xsmall}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Small (10 - 27 lbs)
            <input
              name="small"
              type="checkbox"
              checked={this.state.small}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Medium (28 - 59 lbs)
            <input
              name="medium"
              type="checkbox"
              checked={this.state.medium}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Large (60 - 99 lbs)
            <input
              name="large"
              type="checkbox"
              checked={this.state.large}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            XL (99+ lbs)
            <input
              name="xlarge"
              type="checkbox"
              checked={this.state.xlarge}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
          <h3 className={styles.question}>Puppies (dogs under 1 year) okay?</h3>
          <select className={styles.select} value={this.state.value} onChange={this.handleChange}>
            <option value="pick">Please Choose One</option>
            <option value="yes">Yes, absolutely! My dog is a puppy/puppy at heart!</option>
            <option value="no">Puppies are cute, but that's going to be a no from my dog...</option>
            <option value="none">My dog is okay with some puppies.</option>
          </select>
          <select className={styles.selectMobile} value={this.state.value} onChange={this.handleChange}>
            <option value="pick">Please Choose One</option>
            <option value="yes">Yes, absolutely!</option>
            <option value="no">No thank you...</option>
            <option value="none">No preference.</option>
          </select>
          </label><br/>
          <input className={styles.submit} type="submit" value="Submit" />
        </form>
      </div>
    )
  }

};

export default Search; 