import { Component } from 'react';
//resize an element by dragging the bottom right corner of it
export default class Resizer extends Component {
  componentDidCatch(error, info) {
    ReactGA.event({
      category: "Error",
      action: "Resizer - "+info,
      value: Date.now()
    })
  }
  componentDidMount(){
    window.addEventListener("touchmove", (e)=>this.onMove(e), {passive: false});
    window.addEventListener("touchend", (e)=>this.onUp(e), false);
    window.addEventListener("mouseup", (e)=>this.onUp(e), false);
  }
  componentWillUnmount(){
    window.removeEventListener("touchmove", (e)=>this.onMove(e), {passive: false});
    window.removeEventListener("touchend", (e)=>this.onUp(e), false);
    window.removeEventListener("mouseup", (e)=>this.onUp(e), false);
  }
  onUp = (e) => {
    this.mouseIsDown = false;
    this.resizingTextarea = false;
    if(this.props.textarea && this.props.editTextareaSize) this.props.editTextareaSize(this.props.textarea.style.width, this.props.textarea.style.height);
  }
  checkCollision = (x, y, rect) => {
    return (x < rect.right && x > rect.right-32 && y < rect.bottom && y > rect.bottom-32);
  }
  onDown = (e) => {
    this.mouseIsDown = true;
    const x = e.clientX || e.touches && e.touches[0].clientX;
    const y = e.clientY || e.touches && e.touches[0].clientY;
    this.downX = x;
    this.downY = y;

    this.rect = this.props.textarea.getBoundingClientRect();
    const rect = this.rect;
    if(this.checkCollision(x,y,rect)){
      this.resizingTextarea = true;
    }
    this.xd = rect.right-x;
    this.yd = rect.bottom-y;
  }
  onMove = (e) => {
    const x = e.clientX || e.touches && e.touches[0].clientX;
    const y = e.clientY || e.touches && e.touches[0].clientY;
    this.rect = this.props.textarea.getBoundingClientRect();
    const rect = this.rect;
    if(this.checkCollision(x,y,rect)){
      this.resizingTextarea = true;
      if(this.props.textarea){
        this.props.textarea.style.overflow = 'hidden';
      }
    } else {
      if(this.props.textarea){
        this.props.textarea.style.overflow = '';
      }
    }
    //if(checkCollision(x,y,rect)){
      //this.resizingTextarea = true;
      //if(this.props.textarea){
      //  this.props.textarea.style.overflow = 'hidden';
      //}
    //}
    if(this.mouseIsDown){
      //console.log("dragging");
      if(this.props.textarea){


        //console.log(x, y, rect);
        if(this.resizingTextarea){
          e.preventDefault();
          //if no lock, or if there is a lock but not for width, resize width
          if(!this.props.lock || !this.props.lock.width){
            this.props.textarea.style.width = (x-rect.x+this.xd)+"px";
          }
          //same for height
          if(!this.props.lock || !this.props.lock.height){
            this.props.textarea.style.height = (y-rect.y+this.yd)+"px";
          }


        }
      }
    } else {
      this.resizingTextarea = false;
    }
  }
  render(){
    return (<div
      onMouseDown={this.onDown}
      onMouseMove={this.onMove}
      onTouchStart={this.onDown}>
      {this.props.children}
    </div>);
  }
}
