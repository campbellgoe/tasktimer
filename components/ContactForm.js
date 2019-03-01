import { Component } from 'react';
export default class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      message: "",
      name: "",
      email: "",
      messageValid: "unset",
      emailValid: "unset",
      submitDisabled: false
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
  handleSubmitForm = () => {
    console.log("submit clicked");
    if(this.state.emailValid === true && this.state.messageValid){
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
        console.log("response:", res);
        alert(res.message);
        //React.Notification(res.message)
      }).catch((err)=>{
        alert("Error sending message. Please try again later.");
        console.log("error sending email:", err);
      })
    } else {
      if(!this.state.messageValid || this.state.messageValid === "unset") alert("The message is too short. Please send more than 30 characters.");
      if(!this.state.emailValid || this.state.emailValid === "unset") alert("Please enter a valid email address.");


    }
  }
  render(){
    return (<React.Fragment>
      <p style={{fontSize:"0.75em"}}>&#42; required</p>
      <label htmlFor="contact-message">Message &#42;</label>
      <div className="textarea-container">
        <textarea
          className="contact-message"
          placeholder="Write your message here"
          onKeyUp={this.handleMessageKeyUp}
          style={this.state.messageValid === false ? {borderColor:"red"} : {}}
          />
        <i className="material-icons textarea-resize">arrow_right</i>
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
          font-size: 0.75em;
          width: 100%;
          display: block;
          min-height: 2em;
          margin-bottom: 0.5em;
        }
        .name-stuff {
          margin: 20px 0;
        }
        #btn-contact-send {
          margin-top: 20px;
        }
        button {
          min-width: 2em;
          min-height: 2em;
          border-radius: 3px;
          padding: 7.5px;
          background: #8b00ff;
          border: none;
          color: white;
          font-size: 18px;
          -webkit-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        button:hover {
          background: #c11cff;
          cursor: pointer;
        }
        button:focus {
          outline: 0;
        }
        button:active {
          background: #ff1cb4;
        }
      `}</style>
    </React.Fragment>);
  }
}
