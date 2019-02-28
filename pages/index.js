import Layout from '../components/Layout.js'
import { Component } from 'react';
class Task extends Component {
  render(){
    return (
      <span>
        <div className="task">
          <div id="textarea-container">
            <textarea>
              Task goes here
            </textarea>
            <i className="material-icons" id="textarea-resize">arrow_right</i>
          </div>
          <div>
            <span id="timer">Timer here</span>
          </div>
          <div>
            <i className="material-icons" id="play">play_arrow</i>
          </div>
        </div>
        <style jsx>{`
          #timer {
            padding-top: 5px;
          }
          .task {
            background-color: #ffffff;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            padding: 20px;
            color: black;
          }
          .task > div {
            display: flex;
            align-items: center;
          }
          #play {
            font-size: 38px;
            cursor: pointer;
          }
          #play:hover {
            color: grey;
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
            min-height: 40px;
            min-width: 40px;
          }
          #textarea-container {
            position: relative;
          }
          #textarea-resize {
            font-size: 64px;
            position: absolute;
            right: -26px;
            bottom: -26px;
            transform: rotate(45deg);
            color: rgb(169, 169, 169);
            pointer-events: none;
          }
        `}
        </style>
      </span>
    );
  }
}
export default class App extends Component {
  render(){
    return (<Layout>
      <Task></Task>
      <style jsx>{`

      `}
      </style>
    </Layout>);
  }
}
