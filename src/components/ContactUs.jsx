import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container pt-5 pb-5 contactUsContainer w-75">
        <h1>Contact Us</h1>
        <hr />
        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <div className="container">
            <p>
              <strong>Address:</strong>
              &nbsp;&nbsp; [EventlyApp Company Address]
            </p>
            <p>
              <strong>Phone:</strong>
              &nbsp;&nbsp; [EventlyApp Company Phone Number]
            </p>
            <p>
              <strong>Email:</strong>
              &nbsp;&nbsp;
              <a href="mailto:[Your Company Email]">
                [EventlyApp Company Email]
              </a>
            </p>
          </div>
        </div>
        <br />

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <hr />
          <form className="container ">
            <div className="container mb-3">
              <label htmlFor="connectName" className="form-label">
                <h5>Name</h5>
              </label>
              <input
                type="text"
                name="connectName"
                className="form-control"
                id="connectNameId"
                placeholder="John Doe"
              />
            </div>
            <div className="container mb-3">
              <label htmlFor="connectContact" className="form-label">
                <h5>contact</h5>
              </label>
              <input
                type="tel"
                name="connectContact"
                className="form-control"
                id="connectContactId"
                placeholder="+Coutry Code - 99999 88888"
              />
            </div>
            <div className="container mb-3">
              <label htmlFor="connectEmail" className="form-label">
                <h5>Email address</h5>
              </label>
              <input
                type="email"
                name="connectEmail"
                className="form-control"
                id="connectEmailId"
                placeholder="Johndoe@example.com"
              />
            </div>
            <div className="container mb-3">
              <label htmlFor="connectMessage" className="form-label">
                <h5>Message</h5>
              </label>
              <textarea
                className="form-control"
                name="connectMessage"
                id="connectMessageId"
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
