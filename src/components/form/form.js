import React, { useState } from "react";

import { sendEmail } from "../utils/sendEmail";

const initialState = {
  subject: '',
  text: '',
  reply_to: '',
}

const Form = () => {
  const [state, setState] = useState(initialState)
  const [status, setStatus] = useState('Send')

  const handleChange = ({ target }) => {
    setState(state => ({
      ...state, 
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending…')
    sendEmail(state, onSuccess, onError)
  }

  const onSuccess = (res) => { 
    setStatus('Sent!')
  }

  const onError = (err) => {
    console.log('err', err);
  }

  return (
    <div className="form_container" >
      <form onSubmit={handleSubmit}>
        <input type="text" name="reply_to" onChange={handleChange} placeholder="Your Email" /> 
        <input type="text" onChange={handleChange} name="subject" placeholder="Subject" />
        <textarea name="text" onChange={handleChange} placeholder="Message"></textarea>
        <a className="form_submit"><input  type="submit" disabled={status === 'send'} value={status}/></a>
        <div className="email_credits">
          <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>
        </div>
      </form>
    </div>
)}

export default Form
