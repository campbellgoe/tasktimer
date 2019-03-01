import Header from './Header';
import Head from 'next/head';
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
  toggleNightMode = () => {
    if(this.state.nightModeOn){
      this.setState({
        nightModeOn: false,
        bottomColour,
        topColour
      });
    } else {
      this.setState({
        nightModeOn: true,
        bottomColour: "#000000",
        topColour: "#000000"
      });
    }
  }
  render(){
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
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
          {this.props.children}
        </div>
        <footer>
        Copyright &copy; George O. E. Campbell 2019
        </footer>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Hind+Guntur|Josefin+Sans:700|Material+Icons');
          html {
            background: linear-gradient(90deg,${this.state.bottomColour} 0%,${this.state.topColour} 100%);
          }
          body {
            position: absolute;
            left: 0;
            top: 0;
            min-height: 100%;
            min-width: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Hind Guntur',sans-serif;
            background: ${this.state.topColour};
            background: linear-gradient(90deg,${this.state.bottomColour} 0%,${this.state.topColour} 100%);
            font-size: 20px;
            line-height: 26px;
            color: #fff;
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
          .light-mode-icon {
            font-size: 36px;
            width: 36px;
            height: 36px;
          }
          .light-mode-icon:hover {
            background: linear-gradient(90deg,${bottomColour} 0%,${topColour} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
          }
          .textarea-container {
            margin-left: 17px;
            position: relative;
          }
          .textarea-resize {
            font-size: 64px;
            position: absolute;
            right: -26px;
            bottom: -26px;
            transform: rotate(45deg);
            color: rgb(169, 169, 169);
            pointer-events: none;
            user-select: none;
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
        `}</style>
      </React.Fragment>
    )
  }
}
export default Layout
