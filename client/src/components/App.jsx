import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx'; 
import FrontPage from './FrontPage.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import SideNav from './SideNav.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: 'front',
      open: '',
    }

    this.onFriendFormClick = this.onFriendFormClick.bind(this); 
    this.onHomeClick = this.onHomeClick.bind(this); 
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onFriendFormClick() {
    this.setState({
      body: 'search form',
      open: false,
    })
  }

  onHomeClick() {
    this.setState({
      body: 'front',
      open: false,
    })
  }

  onMenuClick() {
    this.setState({
        open: !this.state.open
    });
  }

 onCloseClick() {
  if(this.state.open === true){
    this.setState({
      open: !this.state.open
    });
  }
}
  
  render() {
    return (
    <div onClick={() => this.onCloseClick()}>
      <NavBar
        menuClicked={this.onMenuClick}
        handleHomeClick={this.onHomeClick}
        handleFriendFormClick={this.onFriendFormClick}
        />
      {this.state.open && <SideNav
        handleFriendFormClick={this.onFriendFormClick}
        handleHomeClick={this.onHomeClick}
      />}
      {this.state.body === 'front' && <FrontPage
        handleFriendFormClick={this.onFriendFormClick}
      />}
      {this.state.body === 'search form' && <Search/>}
      <Footer
       handleFriendFormClick={this.onFriendFormClick}
       handleHomeClick={this.onHomeClick}
      />
    </div>
    );
  }
}

export default App;