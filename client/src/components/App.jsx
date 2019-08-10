import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx'; 
import FrontPage from './FrontPage.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      body: 'front',
    }

    this.onFriendFormClick = this.onFriendFormClick.bind(this); 
  }

  onFriendFormClick() {
    this.setState({
      body: 'search form',
    })
  }
  
  render() {
    return (
    <div>
      <NavBar/>
      {this.state.body === 'front' && <FrontPage
        handleFriendFormClick={this.onFriendFormClick}
      />}
      {this.state.body === 'search form' && <Search/>}
      <Footer
       handleFriendFormClick={this.onFriendFormClick}
      />
    </div>
    );
  }
}

export default App;