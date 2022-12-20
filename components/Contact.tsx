import React from "react";
import { ImLocation2 } from "react-icons/im";
import {
  IoIosMail,
  IoMdCall,
  IoMdInformationCircleOutline,
} from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="contact-sec-main">
      <p className="h1-font" style={{ marginBottom: "20px" }}>
        Contact Me
      </p>
      <div className="flex flex-wrap justify-content-space-between">
        <div className="contact-sun-sec-main">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Name"
            className="contact-sub-sec-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Email"
            className="contact-sub-sec-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Subject"
            className="contact-sub-sec-input"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={3}
            placeholder="Enter your Message"
            className="contact-sub-sec-input"
          ></textarea>
          <button>Send Message</button>
        </div>
        <div className="contact-sun-sec-main">
          <p className="contact-sub-sec-text">
            <ImLocation2 style={{ marginRight: "8px" }} /> Ahmedabad, Gujarat
          </p>
          <p className="contact-sub-sec-text">
            <IoIosMail style={{ marginRight: "8px" }} />{" "}
            patelpreyansh3011@gmail.com
          </p>
          <p className="contact-sub-sec-text">
            <IoMdCall style={{ marginRight: "8px" }} /> +91-123-456-7890
          </p>
          <p className="contact-sub-sec-text">
            <IoMdInformationCircleOutline style={{ marginRight: "8px" }} />{" "}
            Download Resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
