import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <form action="">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Phone Number" />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="sumbit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
