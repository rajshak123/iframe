import React, { Component } from 'react';
import { removeUserSession, getUser } from './Utils/Common'
import './App.css';

const pos1 = '1'
const pos2 = '2'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      [pos1]: {
        value: '',
        valid: false,
        labelTxt: 'Please Enter a URL'
      },
      [pos2]: {
        value: '',
        valid: false,
        labelTxt: 'Please Enter a URL'
      }
    };
    this.setUser = this.setUser.bind(this);
    this.logOut = this.logOut.bind(this)
    this.validURL = this.validURL.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  componentDidMount() {
    this.setUser()
    const resizeObserver = new ResizeObserver((entries) => {
      document.getElementsByTagName('iframe').length && Array.from(document.getElementsByTagName('iframe')).forEach(iframe => {
        let closestDivStyles = getComputedStyle(iframe.closest('div'))
        let closestDivWidth = closestDivStyles.width
        let closestDivHeight = closestDivStyles.height
        // iframe.contentWindow.location.reload(true);
        iframe.width = closestDivWidth;
        iframe.height = closestDivHeight;
      })
    });

    resizeObserver.observe(document.getElementsByClassName('viewContainer')[0]);
  }

  setUser() {
    this.setState({ username: getUser() });
  }
  logOut() {
    removeUserSession()
    this.props.history.push('/')
  }
  validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }
  handleKeyPress(ev, post) {
    let validUrl = this.validURL(ev.target.value)
    this.setState({
      ...this.state,
      [post]: {
        value: ev.target.value,
        valid: validUrl,
        labelTxt: !validUrl && 'Please Enter a Valid URL'
      }
    })
  }


  render() {

    const { username } = this.state;
    let widht1 = document.getElementsByClassName('viewSubContainer')[0] && getComputedStyle(document.getElementsByClassName('viewSubContainer')[0]).width;
    let height1 = document.getElementsByClassName('viewSubContainer')[0] && getComputedStyle(document.getElementsByClassName('viewSubContainer')[0]).height;

    return (
      <div className='viewContainer' id=''>

        <div className='viewSubContainer'>
          <div className='inputContainer'>
            <div className='userName'>{username}</div>
            <div className='inpLabelCon'>
              <input
                className='inputTxtView inputField'
                onChange={(ev) => this.handleKeyPress(ev, pos1)}
                onCopy={(ev) => this.handleKeyPress(ev, pos1)}
                value={this.state[pos1].value}
              />
              {this.state[pos1].labelTxt && <label>{this.state[pos1].labelTxt}</label>}
            </div>
          </div>
          <div className='view'>
            {this.state[pos1].valid && <iframe
              title='1'
              is="x-frame-bypass"
              src={this.state[pos1].value}
              width={widht1}
              height={height1}
            ></iframe>}
          </div>

        </div>
        <div className='viewSubContainer'>
          <div className='inputContainer'>
            <div className='inpLabelCon'>
              <input
                value={this.state[pos2].value}
                className='inputTxtView inputField'
                onChange={(ev) => this.handleKeyPress(ev, pos2)}
                onCopy={(ev) => this.handleKeyPress(ev, pos2)}
              ></input>
              {this.state[pos2].labelTxt && <label>{this.state[pos2].labelTxt}</label>}
            </div>
            <button className='loginBtn logOutBtn' onClick={this.logOut}>LogOut</button>
          </div>
          <div className='view'>
            {this.state[pos2].valid && <iframe
              title='2'
              is="x-frame-bypass"
              src={this.state[pos2].value}
              width={widht1}
              height={height1}
            ></iframe>}
          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
