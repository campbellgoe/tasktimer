import Layout from '../components/Layout.js'
import { Component } from 'react';
import parseElapsedTime from '../utils/parseElapsedTime.js';
class Task extends Component {
  render(){
    return (
      <span>
        <div className="task">
          <div className="textarea-container">
            <textarea value={this.props.children} onChange={this.props.editDescription}/>
            <i className="material-icons textarea-resize">arrow_right</i>
          </div>
          <div>
            <span className="timer">{parseElapsedTime(this.props.elapsedTime)}</span>
          </div>
          <div onClick={this.props.toggleTimer}>
            {
              this.props.paused ?
              <i className="material-icons btn-timer">play_arrow</i> :
              <i className="material-icons btn-timer">pause</i>
            }
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
  constructor(){
    super();
    this.state = {
      tasks: [this.createTask("Task description here", 0)]
    }
  }
  componentDidMount(){
    //update the timers every 1 second
    this.intervalId = setInterval(()=>{
      const tasks = this.state.tasks.map(({description, elapsedTime, paused, timeLastStarted})=>{
        if(paused) return {description, elapsedTime, paused, timeLastStarted};
        return {
          description,
          elapsedTime: elapsedTime+(Date.now()-timeLastStarted),
          paused,
          timeLastStarted//: Date.now()
        }
      });
      this.setState({
        tasks
      });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  createTask(description = "", elapsedTime = 0){
    return {
      description,
      elapsedTime,
      paused: true,
      timeLastStarted: null//this is set to Date.now() when unpaused, and used to calculate total elapsed time.
    }
  }
  render(){
    return (<Layout>
      {this.state.tasks.map(({description, elapsedTime, paused, timeLastStarted}, i) => {
        return (
          <Task
          key={"task_"+i}
          elapsedTime={elapsedTime}
          paused={paused}
          timeLastStarted={timeLastStarted}
          editDescription={(e)=>{
            const tasks = [...this.state.tasks];
            tasks[i].description = e.target.value;
            this.setState({
              tasks
            });
          }}
          toggleTimer={()=>{
            const tasks = [...this.state.tasks];
            const paused = !tasks[i].paused;
            tasks[i].paused = paused;
            if(!paused){
              tasks[i].timeLastStarted = Date.now();//set last started time to now
            }
            this.setState({
              tasks
            });
          }}
          >
            {description}
          </Task>
        );
      })}
      <style jsx>{`

      `}
      </style>
    </Layout>);
  }
}
