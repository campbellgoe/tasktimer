import Layout from '../components/Layout.js';
import { Component } from 'react';
import Task from '../components/Task.js';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
const SortableTask = SortableElement((taskData) => <Task {...taskData}>{taskData.children}</Task>);
const SortableTasks = SortableContainer(({tasks, editDescription, toggleTimer, editTextareaSize, deleteTask}) => {
  return (
    <ul>
      {tasks.map(({description, elapsedTime, paused, timeLastStarted, textarea}, i) => {
        return (
          <SortableTask
          index={i}
          key={"task_"+i}
          elapsedTime={elapsedTime}
          paused={paused}
          timeLastStarted={timeLastStarted}
          editDescription={(e)=>editDescription(e,i)}
          toggleTimer={()=>toggleTimer(i)}
          textarea={textarea}
          editTextareaSize={(w,h)=>editTextareaSize(w,h,i)}
          deleteTask={()=>deleteTask(i)}
          >
            {description}
          </SortableTask>
        );
      })}
    </ul>
  );
});
class NewTaskButton extends Component {
  render(){
    return (
      <>
        <i className="material-icons" onClick={this.props.onClick}>add_box</i>
        <style jsx>{`
          i {
            font-size: 42px;
            user-select: none;
            cursor: pointer;
            margin-left: -5px;
            margin-top: -10px;
          }
          i:hover {
            color: rgb(210, 210, 210);
          }
        `}</style>
      </>
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
  updateTaskTimer(doSetState){
    const tasks = this.state.tasks.map(({description, elapsedTime, paused, timeLastStarted, textarea})=>{
      if(paused) return {description, elapsedTime, paused, timeLastStarted, textarea};
      return {
        description,
        elapsedTime: elapsedTime+(Date.now()-timeLastStarted),
        paused,
        timeLastStarted: Date.now(),
        textarea
      }
    });
    if(doSetState){
      this.setState({
        tasks
      });
    }
    return tasks;
  }
  componentDidMount(){
    //update the timers every 1 second
    this.intervalId = setInterval(()=>{
      this.updateTaskTimer(true);
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
      timeLastStarted: null,//this is set to Date.now() when unpaused, and used to calculate total elapsed time.
      textarea: {
        width: "320px",
        height: "80px"
      }
    }
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({tasks}) => ({
      tasks: arrayMove(tasks, oldIndex, newIndex),
    }));
  }
  render(){
    return (<Layout>
      <SortableTasks
      useDragHandle
      tasks={this.state.tasks}
      onSortEnd={this.onSortEnd}
      editDescription={(e, i)=>{
        const tasks = [...this.state.tasks];
        console.log("i:", i);
        tasks[i].description = e.target.value;
        this.setState({
          tasks
        });
      }}
      toggleTimer={(i)=>{
        const tasks = [...this.state.tasks];
        const paused = !tasks[i].paused;
        tasks[i].paused = paused;
        if(!paused){
          tasks[i].timeLastStarted = Date.now();//set last started time to now
        }
        this.setState({
          tasks
        });
        let t0 = Date.now();
        const intervalId = setInterval(()=>{
          this.updateTaskTimer(true);
          //clear this interval after a minute
          if(Date.now()-t0 > 1000*60) clearInterval(intervalId);
        }, 1000);

      }}
      editTextareaSize={(w,h,i)=>{
        const tasks = [...this.state.tasks];
        tasks[i].textarea = {
          width: w,
          height: h
        }
        this.setState({
          tasks
        });
      }}
      deleteTask={(i)=>{
        const tasks = [...this.state.tasks];
        tasks.splice(i, 1);
        this.setState({
          tasks
        });
      }}
      />
      <NewTaskButton onClick={()=>{
        this.setState(({tasks})=>{
          return {
            tasks: [...tasks, this.createTask("", 0)]
          };
        })
      }}/>
      <style jsx>{`

      `}
      </style>
    </Layout>);
  }
}
