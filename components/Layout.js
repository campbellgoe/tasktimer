import Header from './Header';
import Link from 'next/link';
import { Component } from 'react';
const bottomColour = '#ffb1f9';
const topColour = '#30b3ff';
class Layout extends Component {
  constructor(){
    super();
    this.state = {
      nightModeOn: false,
      bottomColour,
      topColour
    }
  }
  componentDidMount(){
    let nightModeOn = localStorage.getItem("night_mode_on");
    if(nightModeOn !== null) {
      nightModeOn = JSON.parse(nightModeOn);
      this.toggleNightMode(nightModeOn);
    }
  }
  toggleNightMode = (val) => {
    let nightModeOn;
    if(typeof val == 'boolean'){
      nightModeOn = val;
    } else {
      nightModeOn = !this.state.nightModeOn;
    }
    if(nightModeOn){
      this.setState({
        nightModeOn: nightModeOn,
        bottomColour: "#000000",
        topColour: "#000000"
      });
    } else {
      this.setState({
        nightModeOn: nightModeOn,
        bottomColour,
        topColour
      });
    }
    localStorage.setItem("night_mode_on", JSON.stringify(nightModeOn));
  }
  render(){
    return (
      <React.Fragment>
        <section>
          {this.state.nightModeOn ? <i
            className="material-icons night-mode-icon light-mode-icon"
            onClick={this.toggleNightMode}
            >wb_sunny</i>
            :
            <img
            src="/static/night_mode_icon.svg"
            alt="night mode"
            className="night-mode-icon"
            onClick={this.toggleNightMode}
            />
          }
          <div className="container">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/static/logo.png" alt="Task Timer"/>
                  </a>
                </Link>
              </div>
            <Header />
            <main>
            {this.props.children}
            </main>
          </div>
          <footer>
          Copyright &copy; George O. E. Campbell 2019
          </footer>
        </section>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Hind+Guntur|Josefin+Sans:700');
          body > div:last-child {
            max-width: 100%;
          }
          body.react-confirm-alert-body-element {
            overflow: hidden;
          }
          .react-confirm-alert-blur {
            filter: url(#gaussian-blur);
            filter: blur(2px);
            -webkit-filter: blur(2px);
            display: inline-block;
            width: 100%;
            min-height: 100vh;
          }

          .react-confirm-alert-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99;
            background: rgba(255, 255, 255, 0.9);
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: center;
            -ms-align-items: center;
            align-items: center;
            opacity: 0;
            -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
            -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
            -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
            animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
          }

          .react-confirm-alert-body {
            font-family: Arial, Helvetica, sans-serif;
            width: 400px;
            padding: 30px;
            text-align: left;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
            color: #666;
          }

          .react-confirm-alert-svg {
            position: absolute;
            top: 0;
            left: 0;
          }

          .react-confirm-alert-body > h1 {
            margin-top: 0;
          }

          .react-confirm-alert-body > h3 {
            margin: 0;
            font-size: 16px;
          }

          .react-confirm-alert-button-group {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: flex-start;
            margin-top: 20px;
          }

          .react-confirm-alert-button-group > button {
            outline: none;
            background: #333;
            border: none;
            display: inline-block;
            padding: 6px 18px;
            color: #eee;
            margin-right: 10px;
            border-radius: 5px;
            font-size: 12px;
            cursor: pointer;
          }

          @-webkit-keyframes react-confirm-alert-fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @-moz-keyframes react-confirm-alert-fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @-o-keyframes react-confirm-alert-fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes react-confirm-alert-fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          html {
            background: linear-gradient(108deg,${this.state.bottomColour} 0%,${this.state.topColour} 100%);
          }
          body {
            position: absolute;
            left: 0;
            top: 0;
            min-height: 100%;
            min-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Hind Guntur',sans-serif;
            background: ${this.state.topColour};
            background: linear-gradient(108deg,${this.state.bottomColour} 0%,${this.state.topColour} 100%);
            font-size: 20px;
            line-height: 26px;
            color: #fff;
          }
          section {
            top: 0;
            width: 100%;
          }
          .container {
            margin: 110px 25%;
            box-sizing: border-box;
          }
          .logo {
            width: 150px;
            display: block;
            margin: 27.5px 0 55px 0;
          }
          .logo img {
            width: 100%;
            height: 100%;
          }
          .night-mode-icon {
            width: 31px;
            height: 31px;
            position: absolute;
            right: 40px;
            top: 40px;
            cursor: pointer;
          }
          .night-mode-icon:hover {
            opacity: 0.5;
          }
          .light-mode-icon {
            font-size: 36px;
            width: 36px;
            height: 36px;
          }
          .light-mode-icon:hover {
            opacity: 1;
            background: linear-gradient(90deg,${bottomColour} 0%,${topColour} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-paragraphs {
            background-color: ${this.state.nightModeOn ? "#0e0e0e" : "rgba(167,179,253,0.18)"};
            padding: 5px 1em;
            border-radius: 0.5em;
          }
          .about-paragraphs > p:first-child {
            margin-top: 5px;
          }
          footer {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 20px;
            text-align: right;
            padding: 15px;
            border-top-left-radius: 4px;
          }
          ul, li {
            list-style: none;
            padding-left: 0;
          }
          textarea {
            max-width: 540px;
            font-family: 'Hind Guntur', sans-serif;
            font-size: 16px;
            line-height: 20px;
            padding: 6px;
            margin: 0;
            width: 320px;
            height: 5em;
            min-height: 2.5em;
            min-width: 40px;
            border-radius: 3px;
            border: 1px solid rgb(169, 169, 169);
            box-sizing: border-box;
            resize: none;
          }
          .textarea-container {
            margin-left: 17px;
            position: relative;
          }
          .textarea-resize {
            width: 64px;
            position: absolute;
            right: -26px;
            bottom: -26px;
            transform: rotate(45deg);
            pointer-events: none;
            user-select: none;
          }
          .css-otip-ToastElement {
            max-width: 100%;
          }
          .react-confirm-alert {
            padding: 0.75em;
            padding-bottom: 1.5em;
            border: 1px solid #dedede;
            background-color: white;
            color: black;
            border-radius: 16px;
          }
          .react-confirm-alert-overlay {
            background: rgba(255,255,255,0.5);
          }
          button {
            min-width: 6em;
            min-height: 2em;
            border-radius: 3px;
            padding: 7.5px;
            background: #8b00ff;
            border: none;
            color: white;
            font-size: 18px;
            -webkit-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          button:hover {
            background: #c11cff;
            cursor: pointer;
          }
          button:focus {
            outline: 0;
          }
          button:active {
            background: #ff1cb4;
          }
          @media only screen and (min-width: 1200px) {
            .about {
              max-width: 600px;
            }
          }
          @media only screen and (max-width: 1600px) {
            .container {
              margin: 80px 15%;
            }
          }
          @media only screen and (max-width: 1400px) {
            .container {
              margin: 80px 200px;
            }
          }
          @media only screen and (max-width: 1200px) {
            .container {
              margin: 80px 140px;
            }
          }
          @media only screen and (max-width: 1000px) {
            .container {
              margin: 80px 80px;
            }
          }
          @media only screen and (max-width: 820px) {
            .container {
              margin: 80px 32px;
              margin-right: 64px;
            }
            .task {
              flex-direction: column;
            }
          }
          @media only screen and (max-width: 460px) {
            footer {
              font-size: 5vw;
            }
            .container {
              margin: 80px 16px;
            }
            main ul {
              margin-right: 32px;
            }
            .task {
              padding: 10px 10px 10px 10px !important;
            }
            .drag-icon {
              font-size: 28px !important;
              height: 28px !important;
            }
            .task * {
              font-size: 14px;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}
export default Layout
