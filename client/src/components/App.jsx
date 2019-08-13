import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx'; 
import FrontPage from './FrontPage.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import SideNav from './SideNav.jsx';
import ProfileList from './ProfileList.jsx';
import SignUp from './SignUp.jsx';
import sampleData from './sampleData.js';
import { thisExpression } from '@babel/types';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: 'front',
      open: '',
      image: 'https://munch-gallery.s3-us-west-1.amazonaws.com/dog.jpg',
      images: '',
      scroll: sampleData,
      idx: 0
    };

    this.onFriendFormClick = this.onFriendFormClick.bind(this); 
    this.onHomeClick = this.onHomeClick.bind(this); 
    this.onMenuClick = this.onMenuClick.bind(this);
    this.intervalScrolling = this.intervalScrolling.bind(this);
    this.renderSearchProfiles = this.renderSearchProfiles.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  componentDidMount() {
    axios.get('/allDogs')
      .then(({data}) => {this.setState({
        scroll: data,
      }, this.intervalScrolling)
      })
      .catch(err => console.log(err))
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

 onSignUpClick() {
  this.setState({
    body: 'sign up',
    open: false,
  })
 }

  intervalScrolling() {
    setInterval(() => { 
     let n; 
     if(this.state.idx === this.state.scroll.length) {
       n = 0; 
     } else {
       n = this.state.idx;
     }
     if(this.state.body === 'front' && n < this.state.scroll.length) {
      this.setState({ 
        image: this.state.scroll[n].url, 
        idx: n + 1,
        });
      } 
    }, 
    3000)}; 

  renderSearchProfiles(data) {
    this.setState ({
      images: data,
      body: 'profile'
    })
  };
  
  render() {
    return (
    <div onClick={() => this.onCloseClick()}>
      <NavBar
        menuClicked={this.onMenuClick}
        handleHomeClick={this.onHomeClick}
        handleFriendFormClick={this.onFriendFormClick}
        handleSignUp={this.onSignUpClick}
        />

      {this.state.open && <SideNav
        handleFriendFormClick={this.onFriendFormClick}
        handleHomeClick={this.onHomeClick}
        handleSignUp={this.onSignUpClick}
        body={this.state.body}
      />}

      {this.state.body === 'front' && <FrontPage
        handleFriendFormClick={this.onFriendFormClick}
        image={this.state.image}
      />}

      {this.state.body === 'search form' && <Search
        handleHomeClick={this.onHomeClick}
        renderProfiles={this.renderSearchProfiles}
      />}

      {this.state.body === 'sign up' && <SignUp
        handleHomeClick={this.onHomeClick}
      />}
      {this.state.body === 'profile' && <ProfileList
        handleHomeClick={this.onHomeClick}
        images={this.state.images}
      />}
      <Footer
       handleFriendFormClick={this.onFriendFormClick}
       handleHomeClick={this.onHomeClick}
       handleSignUp={this.onSignUpClick}
      />
    </div>
    );
  }
}

export default App;