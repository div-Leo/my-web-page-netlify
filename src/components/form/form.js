import React, { useState } from "react";

import { sendEmail } from "../utils/sendEmail";
import Spinner from "../spinner";

const initialState = {
  subject: '',
  text: '',
  reply_to: '',
}

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
    // setTimeout(() => {
    //   setStatus('');
    // }, 2500);
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
      { 
        status !== 'success' ? 
          <form onSubmit={handleSubmit}>
            <input className="pointer" type="text" name="reply_to" onChange={handleChange} placeholder="Your Email" /> 
            <input className="pointer" style={{border: state.subject === 'error' ? '3px solid #d44' : 'none' }} type="text" onChange={handleChange} name="subject" placeholder="Subject" />
            <textarea className="pointer" style={{border: state.text === 'error' ? '3px solid #d44' : 'none' }} name="text" onChange={handleChange} placeholder="Message"></textarea>
            <div className="form_submit">
              <a className="pointer">
                <button type="submit" disabled={status === 'pending'} >
                  {status === 'pending' ? <Spinner/> : 'send'}
                </button>
              </a>
            </div>
          </form>
        :
          <div className="modal_box">
            Thanks for contacting me! 🙏
            <p className="email_credits">Powered by <a className="pointer" href="https://postmail.invotes.com" target="_blank">PostMail</a></p>
          </div>
      }
    </div>
)}

export default Form
