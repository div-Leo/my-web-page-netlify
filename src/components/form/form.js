import React, { useState, useEffect, useRef } from "react";
import Revealer from "../utils/revealer";

import { sendEmail } from "../utils/sendEmail";
import Spinner from "../spinner";

const initialState = {
  reply_to: '',
  subject: '',
  text: '',
}

const languages = [
  'We can speak in English if you want',
  'Possiamo parlare anche in italiano',
  'Si prefieres en Español sin problema',
];

const Form = () => {
  const [state, setState] = useState(initialState)
  const [status, setStatus] = useState('')

  const handleChange = ({ target }) => {
    setState(state => ({
      ...state, 
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.subject === 'error' || state.text === 'error') return;
    setStatus('pending');
    setTimeout(() => {
      sendEmail(state, onSuccess, onError);
    }, 100)
  }

  const onSuccess = (res) => { 
    setState(initialState);
    setStatus('success');
    setTimeout(() => {
      setStatus('');
    }, 3000);
  }

  const onError = (err) => {
    err.split('.').forEach(err => {
      const field = err.trim().split(' ')[0]
      setState(state => ({
        ...state, 
        [field]: 'error',
      }))
    })
    setStatus('error');
  }

  return (
    <div className="form_container" >
      <Revealer revealIn="fadeInUp" revealOut="fadeOut">
        <form onSubmit={handleSubmit}>
          <input 
            className={`pointer ${state.reply_to === "error" ? "form_input--error" : "form_input"}`} 
            value={state.reply_to !== "error" ? state.reply_to : ''} 
            type="text" 
            name="reply_to" 
            data-alt="email"
            onChange={handleChange} 
            placeholder="Your Email" /> 
          <input 
            className={`pointer ${state.subject === "error" ? "form_input--error" : "form_input"}`} 
            value={state.subject  !== "error" ? state.subject : ''} 
            type="text" 
            onChange={handleChange} 
            name="subject" 
            data-alt="subject"
            placeholder="Subject*" />
          <textarea 
            className={`pointer ${state.text === "error" ? "form_input--error" : "form_input"}`} 
            value={state.text  !== "error" ? state.text : ''} 
            name="text" 
            onChange={handleChange} 
            data-alt="message"
            placeholder="Message*"></textarea>
          <div className="form_submit">
            <a className="pointer" data-alt="submit">
              <button type="submit" disabled={status === 'pending'}>
                {status === 'pending' ? <Spinner/> : 'send'}
              </button>
            </a>
          </div>
        </form>
      </Revealer>
      { 
        status === 'success' ? 
        <div className="modal">
          <div className={`modal_box modal_box--${status}`}>
            Thanks for contacting me! 🙏
            <p className="email_credits">Powered by <a className="pointer" href="https://postmail.invotes.com" target="_blank"> {" "} PostMail</a></p>
          </div>
        </div>
        : null
      }
    </div>
)}

export default Form
