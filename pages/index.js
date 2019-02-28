import Layout from '../components/Layout.js';
import { Component } from 'react';
import Task from '../components/Task.js';
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
          timeLastStarted: Date.now()
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
