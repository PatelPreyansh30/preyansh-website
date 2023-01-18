import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import {
  IoIosMail,
  IoMdCall,
  IoMdInformationCircleOutline,
} from "react-icons/io";

interface InputFieldInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: InputFieldInterface = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [isEmailSended, setIsEmailSended] = useState(false);
  const [messageData, setMessageData] =
    useState<InputFieldInterface>(initialState);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setMessageData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEmailSended(false);
  };

  const sendMessage = () => {
    console.log(messageData);
    setIsEmailSended(true)
  };

  return (
    <div id="contact" className="contact-sec-main">
      <p className="h1-font" style={{ marginBottom: "20px" }}>
        Contact Me
      </p>
      <div className="flex flex-wrap justify-content-space-between">
        <div className="contact-sun-sec-main">
          <input
            value={messageData.name}
            onChange={handleOnChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="contact-sub-sec-input"
          />
          <input
            value={messageData.email}
            onChange={handleOnChange}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="contact-sub-sec-input"
          />
          <input
            value={messageData.subject}
            onChange={handleOnChange}
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            className="contact-sub-sec-input"
          />
          <textarea
            value={messageData.message}
            onChange={handleOnChange}
            name="message"
            id="message"
            cols={30}
            rows={3}
            placeholder="Enter your message"
            className="contact-sub-sec-input"
          ></textarea>
          {isEmailSended && <div className="contact-success-message">Your message sent successfully, We will shortly contact with you.</div>}
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <div className="contact-sun-sec-main">
          <p className="contact-sub-sec-text">
            <ImLocation2 /> Ahmedabad, Gujarat
          </p>
          <p className="contact-sub-sec-text">
            <IoIosMail /> patelpreyansh3011@gmail.com
          </p>
          <p className="contact-sub-sec-text">
            <IoMdCall /> +91-123-456-7890
          </p>
          <p className="contact-sub-sec-text">
            <IoMdInformationCircleOutline /> Download Resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
