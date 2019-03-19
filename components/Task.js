import { Fragment, Component } from 'react';
import parseElapsedTime from '../utils/parseElapsedTime.js';
import { sortableHandle } from 'react-sortable-hoc';
import ColourPicker from '../components/ColourPicker.js';
import Resizer from '../components/Resizer.js';
const DragHandle = sortableHandle(() => (
  <Fragment>
  <img src="/static/drag_indicator.svg" alt="Drag me" className="drag-icon"/>
  <style jsx>{`
    .drag-icon {
      font-size: 38px;
      position: absolute;
      cursor: grab;
      user-select: none;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 38px;
    }
  `}
  </style>
</Fragment>));
class Timer extends Component {
  render(){
    const TimerJSX = (<div className="timer-text">
      <span className="timer">{parseElapsedTime(this.props.elapsedTime)}</span>
    </div>);
    const PauseBtnJSX = (<div className="timer-btn" onClick={this.props.toggleTimer}>
      {
        this.props.paused ?
        <i className="material-icons btn-timer">play_arrow</i> :
        <i className="material-icons btn-timer">pause</i>
      }
      <style jsx>{`
        .btn-timer {
          font-size: 38px;
          cursor: pointer;
          margin: 0 auto;
          user-select: none;
        }
        .btn-timer:hover {
          color: rgb(169, 169, 169);
        }
      `}</style>
    </div>);
    if(this.props.windowWidth > 820){
      return (<React.Fragment>
        {TimerJSX}
        {PauseBtnJSX}
        <style jsx global>{`
            .timer-container {
              margin-left: 17px;
              display: flex;
              flex-direction: column;
            }
            .timer-text, .timer-btn {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .timer-text > span {
              height: 20px;
            }
        `}</style>
      </React.Fragment>);
    } else {
      return (
      <div className="timer-container">
        {TimerJSX}
        {PauseBtnJSX}
        <style jsx global>{`
            .timer-container {
              margin-left: 17px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding-top: 5px;
            }
            .timer-text, .timer-btn {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: auto;
            }
            .task {
              padding-bottom: 10px !important;
            }
        `}</style>
      </div>
    );
    }
  }
}

export default class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: null
    }
  }
  render(){
    const pcSeconds = parseInt(this.props.elapsedTime/1000)%(60*25)/(60*25)*100;//25 minutes counter
    const pcMinutes = parseInt(this.props.elapsedTime/1000)%(60*5)/(60*5)*100;//5 minutes counter
    const {r, g, b} = this.props.colour;
    const colour = `rgb(${r},${g},${b})`;
    const colourTransparent = `rgba(${r},${g},${b},0)`;
    const linearGradient = `
    linear-gradient(180deg, ${colour} calc(100% - 10px), ${colourTransparent} calc(100% - 10px), ${colourTransparent} calc(100% - 20px)),
    linear-gradient(90deg,  ${colour} 0%, rgba(255,156,237,1) ${pcSeconds}%,  ${colour} ${pcSeconds}%,  ${colour} 100%)
    `;

    return (
      <Resizer
        textarea={this.state.textarea}
        editTextareaSize={this.props.editTextareaSize}
        >
        <li>
          <div className="task"
            style={{
              backgroundColor: colour,
              background: linearGradient
            }}
            >
            <DragHandle/>
            <div className="textarea-container">
              <textarea
                id={"task"+(this.props.id+1)}
                ref={(el)=>{
                  if(this.state.textarea === null){
                    this.setState({
                      textarea: el
                    });
                  }
                }}
                style={{
                  width: this.props.textarea.width,
                  height: this.props.textarea.height
                }}
                value={this.props.children}
                onChange={this.props.editDescription}
                />
              <img src="/static/arrow_right.svg" alt="resize" className="textarea-resize"/>
            </div>
            <Timer
              elapsedTime={this.props.elapsedTime}
              toggleTimer={this.props.toggleTimer}
              paused={this.props.paused}
              windowWidth={this.props.windowWidth}
              />
            <i className="material-icons delete-task"
              onClick={()=>{
                this.props.confirmDelete()
              }}
            >delete_forever</i>
          <i className="material-icons fill-colour"
              onClick={()=>{
                //open/close colour picker
                this.props.openColourPicker();
              }}
            >color_lens</i>
          {this.props.colour.pickerOpen ?
              <ColourPicker
                changeTaskColour={this.props.changeTaskColour}
                handleClickOutside={()=>{
                  this.props.closeColourPicker();
                  //a little hack just to ensure this runs after openColourPicker if clicking over the open icon
                  setTimeout(()=>{
                    this.props.closeColourPicker();
                  }, 50);
                }}
              />
              : null}
          </div>

          <style jsx>{`
            .textarea-resize {
              touch-action: none;
            }
            .timer {
              padding-top: 5px;
              text-align: center;
              width: 100%;
            }
            .delete-task {
              position: absolute;
              right: -43px;
              top: 0;
              font-size: 38px;
              color: white;
              cursor: pointer;
              user-select: none;
            }
            .fill-colour {
              position: absolute;
              right: -43px;
              bottom: 0;
              font-size: 38px;
              color: white;
              cursor: pointer;
              user-select: none;
            }
            .fill-colour:hover {
              background: linear-gradient(to right, red, yellow, green, blue, violet);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .delete-task:hover {
              color: rgb(255,100,100);
            }
            .task {
              background-color: #ffffff;
              border-radius: 8px;
              display: flex;
              justify-content: space-between;
              padding: 20px;
              color: black;
              margin-bottom: 16px;
              position: relative;
            }
            .task > div {
              display: flex;
              align-items: center;
            }
            .drag-icon {
              font-size: 38px;
              position: absolute;
              margin-left: -20px;
              height: calc(100% - 38px * 2);
              transform: translate(0, 50%);
              cursor: grab;
              user-select: none;
            }
            @media only screen and (max-width: 820px) {
              textarea {
                resize: vertical;
                max-width: 100%;
                width: 100% !important;
                min-width: calc(100% - 14px);
              }
              .task > div {
                margin-bottom: 0.25em;
              }
              .task > div:last-child {
                margin-bottom: 0;
              }
            }
          `}
          </style>
        </li>
      </Resizer>
    );
  }
}
