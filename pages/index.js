import { Component } from 'react';
import Task from '../components/Task.js';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
const SortableTask = SortableElement((taskData) => <Task {...taskData}>{taskData.children}</Task>);
const SortableTasks = SortableContainer(({tasks, editDescription, toggleTimer, editTextareaSize, deleteTask, openColourPicker, closeColourPicker, changeTaskColour}) => {
  return (
    <ul>
      {tasks.map(({description, elapsedTime, paused, timeLastStarted, textarea, colour}, i) => {
        return (
          <SortableTask
          index={i}
          id={i}
          key={"task_"+i}
          elapsedTime={elapsedTime}
          paused={paused}
          timeLastStarted={timeLastStarted}
          editDescription={(e)=>editDescription(e,i)}
          toggleTimer={()=>toggleTimer(i)}
          textarea={textarea}
          editTextareaSize={(w,h)=>editTextareaSize(w,h,i)}
          deleteTask={()=>deleteTask(i)}
          colour={colour}
          openColourPicker={()=>openColourPicker(i)}
          closeColourPicker={()=>closeColourPicker(i)}
          changeTaskColour={(r,g,b)=>changeTaskColour(r,g,b,i)}
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
  saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }
  updateTaskTimer(doSetState){
    const tasks = this.state.tasks.map(({description, elapsedTime, paused, timeLastStarted, textarea, colour})=>{
      if(paused) return {description, elapsedTime, paused, timeLastStarted, textarea, colour};
      return {
        description,
        elapsedTime: elapsedTime+(Date.now()-timeLastStarted),
        paused,
        timeLastStarted: Date.now(),
        textarea,
        colour
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
      this.saveTasks();
    }, 100);
    //load tasks from local storage
    let localTasks = localStorage.getItem("tasks");
    try {
      if(typeof localTasks == 'string') localTasks = JSON.parse(localTasks);
    } catch(err){
      localTasks = null;
    }
    console.log("local tasks:", localTasks);
    if(localTasks){
      this.setState({
        tasks: localTasks
      })
    }
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
      },
      colour: {
        pickerOpen: false,
        r: 255,
        g: 255,
        b: 255
      }
    }
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({tasks}) => ({
      tasks: arrayMove(tasks, oldIndex, newIndex),
    }));
  }
  render(){
    return (<React.Fragment>
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
        this.saveTasks();
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
        this.saveTasks();
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
        this.saveTasks();
      }}
      deleteTask={(i)=>{
        const tasks = [...this.state.tasks];
        tasks.splice(i, 1);
        this.setState({
          tasks
        });
        this.saveTasks();
      }}
      openColourPicker={(i)=>{
        const tasks = [...this.state.tasks];
        tasks[i].colour.pickerOpen = true;
        this.setState({
          tasks
        });
        this.saveTasks();
      }}
      closeColourPicker={(i)=>{
        const tasks = [...this.state.tasks];
        tasks[i].colour.pickerOpen = false;
        this.setState({
          tasks
        });
        this.saveTasks();
      }}
      changeTaskColour={(r,g,b,i)=>{
        const tasks = [...this.state.tasks];
        tasks[i].colour = {
          pickerOpen: tasks[i].colour.pickerOpen,
          r,
          g,
          b
        }
        this.setState({
          tasks
        });
        this.saveTasks();
      }}
      />
      <NewTaskButton onClick={()=>{
        this.setState(({tasks})=>{
          return {
            tasks: [...tasks, this.createTask("", 0)]
          };
        });
        this.saveTasks();
      }}/>
      <style jsx>{`

      `}
      </style>
    </React.Fragment>);
  }
}
