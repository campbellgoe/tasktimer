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
    if(value.length > 40){
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
      }, 1000*60);
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
      alert("enter a valid email message at least 40 characters in the message.");
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
      <label htmlFor="contact-name">Your name &#42;</label>
      <input
      id="contact-name"
      type="text"
      onChange={this.handleNameChange}
      />
      <label htmlFor="contact-email">Your email &#42;</label>
      <input
      id="contact-email"
      type="text"
      onChange={this.handleEmailChange}
      style={this.state.emailValid === false ? {borderColor:"red"} : {}}
      />
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
      `}</style>
    </React.Fragment>);
  }
}
