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
      let widht1 = document.getElementsByClassName('view1')[0] && getComputedStyle(document.getElementsByClassName('view1')[0]).width;
      let height1 = document.getElementsByClassName('view1')[0] && getComputedStyle(document.getElementsByClassName('view1')[0]).height;

      let widht2 = document.getElementsByClassName('view2')[1] && getComputedStyle(document.getElementsByClassName('view2')[1]).width;
      let height2 = document.getElementsByClassName('view2')[1] && getComputedStyle(document.getElementsByClassName('view2')[1]).height;

    return (
        <div className='viewContainer'>

            <div className='view1'>
              <div className='inputContainer'>
                <div className='userName'>{username}</div>
                <input className='inputTxtView inputField'></input>
              </div>
              <div className='view'> 
                <iframe 
                    is="x-frame-bypass" 
                    src="https://www.youtube.com/"
                    width={widht1}
                    height={height1}
                ></iframe>
              </div>

            </div>
            <div className='view2'>
              <div className='inputContainer'>
                <input className='inputTxtView inputField'></input>
                <button className='loginBtn logOutBtn'>LogOut</button>
              </div>
              <div className='view'> 
                <iframe 
                    is="x-frame-bypass" 
                    src="https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router"
                    width={widht1}
                    height={height1}
                ></iframe>
              </div>
            </div>
        </div>

    );
  }
}

export default Dashboard;