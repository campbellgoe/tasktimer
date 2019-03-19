import { Component } from 'react';
import ReactGA from 'react-ga';
import Resizer from './Resizer.js';
class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      message: "",
      name: "",
      email: "",
      messageValid: "unset",
      emailValid: "unset",
      submitDisabled: false,
      textarea: null
    }
  }
  handleMessageKeyUp = (e) => {
    const value = e.target.value;
    if(value.length > 30){
      this.setState({
        message: value,
        messageValid: true
      })
    } else {
      this.setState({
        messageValid: false
      })
    }
  }
  handleNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value
    })
  }
  handleEmailChange = (e) => {
    const value = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(value).toLowerCase());
    this.setState({
      emailValid: isValid,
      email: value
    })
  }
  onSuccessMessage=(msg)=>{
    //alert("success: "+msg);
    const { toastManager } = this.props;
    toastManager.add(msg, {
      appearance: 'success',
      autoDismiss: true,
    })
  }
  onErrorMessage=(msg)=>{
    //alert("error: "+msg);
    const { toastManager } = this.props;
    toastManager.add(msg, {
      appearance: 'warning',
      autoDismiss: true,
    })
  }
  handleSubmitForm = () => {
    if(!navigator.onLine) return this.onErrorMessage("Your are not online, please reconnect before sending feedback.");
    if(this.state.emailValid === true && this.state.messageValid){
      ReactGA.event({
        category: 'Contact',
        action: 'Form submit'
      });
      this.setState({
        submitDisabled: true
      });
      setTimeout(()=>{
        this.setState({
          submitDisabled: false
        });
      }, 1000*6);
      //fetch POST
      fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          message: this.state.message,
          email: this.state.email
        })
      }).then(res=>{
        return res.json();
      }).then(res=>{
        if(res.success){
          this.onSuccessMessage(res.message);
        } else {
          this.onErrorMessage(res.message);
        }
      }).catch((err)=>{
        console.warning("error sending email:", err);
        this.onErrorMessage("Error sending message. Please try again later.");
      })
    } else {
      if(!this.state.messageValid || this.state.messageValid === "unset") this.onErrorMessage("The message is too short. Please send more than 30 characters.");
      if(!this.state.emailValid || this.state.emailValid === "unset") this.onErrorMessage("Please enter a valid email address.");
    }
  }
  render(){
    return (<React.Fragment>
      <Resizer
        lock={{width:true}}
        textarea={this.state.textarea}
        >
        <p style={{fontSize:"0.75em"}}>&#42; required</p>
        <label htmlFor="contact-message">Message &#42;</label>
        <div className="textarea-container">
          <textarea
            className="contact-message"
            placeholder="Write your message here"
            onKeyUp={this.handleMessageKeyUp}
            style={this.state.messageValid === false ? {borderColor:"red"} : {}}
            ref={(el)=>{
              if(this.state.textarea === null){
                this.setState({
                  textarea: el
                });
              }
            }}
            />
          <img src="/static/arrow_right.svg" alt="resize" className="textarea-resize"/>
        </div>
        <div className="name-stuff">
          <label htmlFor="contact-name">Your name</label>
          <input
          id="contact-name"
          type="text"
          onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="contact-email">Your email &#42;</label>
          <input
          id="contact-email"
          type="text"
          onChange={this.handleEmailChange}
          style={this.state.emailValid === false ? {borderColor:"red"} : {}}
          />
        </div>
        <button className="blue-g" id="btn-contact-send" onClick={this.handleSubmitForm} style={this.state.submitDisabled ? { backgroundColor: "#dcdcdc "} : {}} disabled={this.state.submitDisabled}>Send to George Campbell</button>
        <style jsx>{`
          .contact-message {
            width: 100%;
            height: 14em;
            min-height: 5em;
            max-height: 1000px;
            line-height: 1.5em;
            resize: vertical;
            max-width: 100%;
            display: block;
          }
          .textarea-container {
            margin-left: 0;
          }
          .textarea-resize {
          }
          label {
            display: block;
          }
          input[type="text"] {
            width: 100%;
            display: block;
            min-height: 2em;
            margin-bottom: 0.5em;
            font-family: 'Hind Guntur',sans-serif;
            font-size: 16px;
            box-sizing: border-box;
            border-radius: 3px;
            border: 1px solid rgb(169,169,169);
            padding-top: 5.5px;
          }
          .name-stuff {
            margin: 20px 0;
          }
          #btn-contact-send {
            margin-top: 20px;
          }
        `}</style>
    </Resizer>
    </React.Fragment>);
  }
}
export default ContactForm;
