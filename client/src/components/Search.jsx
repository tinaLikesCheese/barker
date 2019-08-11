import React from 'react';
import styles from './style/Search.css'

class Search extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      roughhousing: '',
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div className={styles.searchForm}>
        <form>
          <label>
            Wrestling/Roughhousing
            <input
              name="roughhousing"
              type="checkbox"
              checked={this.state.roughhousing}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Chasing Dogs
            <input
              name="chasing"
              type="checkbox"
              checked={this.state.chasing}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Fetch
            <input
              name="fetch"
              type="checkbox"
              checked={this.state.fetch}
              onChange={this.handleInputChange} />
          </label><br/>
          <label>
            Playing with Toys/Tug of War
            <input
              name="Toys"
              type="checkbox"
              checked={this.state.toys}
              onChange={this.handleInputChange} />
          </label><br/>
          <h3>Size</h3>
            <label>
              X-Small (2 - 7 lbs)
              <input
                name="xsmall"
                type="checkbox"
                checked={this.state.xsmall}
                onChange={this.handleInputChange} />
            </label><br/>
            <label>
              Small (8 - 22 lbs)
              <input
                name="small"
                type="checkbox"
                checked={this.state.small}
                onChange={this.handleInputChange} />
            </label><br/>
            <label>
            Medium
            <input
              name="medium"
              type="checkbox"
              checked={this.state.roughhousing}
              onChange={this.handleInputChange} />
          </label><br/>
        </form>
      </div>
    )
  }

};

export default Search; 