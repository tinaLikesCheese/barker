import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx'; 
import FrontPage from './FrontPage.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import SideNav from './SideNav.jsx';
import ProfileList from './ProfileList.jsx'
import imgArr from './sampleData.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: 'profile',
      open: '',
      image: 'https://munch-gallery.s3-us-west-1.amazonaws.com/dog.jpg',
      images: imgArr,
      idx: 0
    };

    this.onFriendFormClick = this.onFriendFormClick.bind(this); 
    this.onHomeClick = this.onHomeClick.bind(this); 
    this.onMenuClick = this.onMenuClick.bind(this);
    this.intervalScrolling = this.intervalScrolling.bind(this);
  }

  componentDidMount() {
    // this.intervalScrolling(); 
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

  intervalScrolling() {
    setInterval(() => { 
     let n; 
     if(this.state.idx + 1 === this.state.images.length) {
       n = 0; 
     } else {
       n = this.state.idx;
     }
     if(n < this.state.images.length) {
      this.setState({ 
        image: this.state.images[n], 
        idx: n + 1,
        });
      } 
    }, 
    5000)}; 
  
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
        image={this.state.image}
      />}
      {this.state.body === 'search form' && <Search
      handleHomeClick={this.onHomeClick}
      />}
      {this.state.body === 'profile' && <ProfileList
      handleHomeClick={this.onHomeClick}
      />}
      <Footer
       handleFriendFormClick={this.onFriendFormClick}
       handleHomeClick={this.onHomeClick}
      />
    </div>
    );
  }
}

export default App;