import React from "react";
import Languages from "../languages";
import Form from "../form";

const Contacts = () => {

  return (
    <div className="contacts">
      <h1 className="contacts_title">Wanna talk? Say Hi 👋</h1>
      <div className="contacts_container">
        <Languages/>
        <Form/>
      </div>
    </div>
  )
}

export default Contacts
