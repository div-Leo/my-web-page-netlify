import React, { useState } from "react";

import { sendEmail } from "../utils/sendEmail";

const initialState = {
  subject: '',
  text: '',
  reply_to: '',
}

const Spinner = () => (
  <div className="spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
)

export default Spinner;
