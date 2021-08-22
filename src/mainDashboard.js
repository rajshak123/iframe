import React, { Component } from 'react';
import {getUser} from './Utils/Common'
import './App.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }
  componentDidMount=()=>{
      this.setUser()
  }
  setUser() {
    this.setState({ username: getUser() });
  }


  render() {
      const { username } = this.state;
      let widht1 = document.getElementsByClassName('view')[0] && getComputedStyle(document.getElementsByClassName('view')[0]).width;
      let height1 = document.getElementsByClassName('view')[0] && getComputedStyle(document.getElementsByClassName('view')[0]).height;

      let widht2 = document.getElementsByClassName('view')[1] && getComputedStyle(document.getElementsByClassName('view')[1]).width;
      let height2 = document.getElementsByClassName('view')[1] && getComputedStyle(document.getElementsByClassName('view')[1]).height;

    return (
    <div>
        <div className="navContainer">
            <div className='userName'>{username}</div>
            <input className='inputTxtView inputField'></input>
            <input className='inputTxtView inputField'></input>
            <button>LogOut</button>
        </div>
        <div className='viewContainer'>
            <div className='view'>
              <iframe 
                  is="x-frame-bypass" 
                  src="https://www.youtube.com/"
                  width={widht1}
                  height={height1}
              ></iframe>
            </div>
            <div className='view'>
              <iframe 
                  is="x-frame-bypass" 
                  src="https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router"
                  width={widht2}
                  height={height2}
              ></iframe>
            </div>
        </div>
    </div>

    );
  }
}

export default Dashboard;