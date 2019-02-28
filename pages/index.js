import Layout from '../components/Layout.js'
import { Component } from 'react';
class Task extends Component {
  render(){
    return (
      <span>
        <div className="task">
          <div className="textarea-container">
            <textarea>
              Task goes here
            </textarea>
            <i className="material-icons textarea-resize">arrow_right</i>
          </div>
          <div>
            <span className="timer">0 Seconds</span>
          </div>
          <div>
            <i className="material-icons btn-timer">play_arrow</i>
          </div>
        </div>
        <style jsx>{`
          .timer {
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
          .btn-timer {
            font-size: 38px;
            cursor: pointer;
          }
          .btn-timer:hover {
            color: rgb(169, 169, 169);
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
            min-height: calc(100% - 14px);
            min-width: 40px;
            border-radius: 3px;
            border-color: rgb(169, 169, 169);
          }
          .textarea-container {
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
          @media only screen and (max-width: 820px) {
            textarea {
              resize: vertical;
              max-width: 100%;
              width: 100%;
              min-width: calc(100% - 14px);
            }
            .task > div {
              margin-bottom: 1em;
            }
            .task > div:last-child {
              margin-bottom: 0;
            }
            .btn-timer {
              margin-left: -11px;
            }
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
