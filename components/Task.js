import { Fragment, Component } from 'react';
import parseElapsedTime from '../utils/parseElapsedTime.js';
import { sortableHandle } from 'react-sortable-hoc';
const DragHandle = sortableHandle(() => (
  <Fragment>
  <i className="material-icons drag-icon">drag_indicator</i>
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
export default class Task extends Component {
  render(){
    return (
      <li>
        <div className="task">
          <DragHandle/>
          <div className="textarea-container">
            <textarea
              style={{
                width: this.props.textarea.width,
                height: this.props.textarea.height
              }}
              value={this.props.children}
              onChange={this.props.editDescription}
              onMouseUp={(e)=>{
                this.props.editTextareaSize(e.target.style.width, e.target.style.height);
              }}
              />
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
      </li>
    );
  }
}
