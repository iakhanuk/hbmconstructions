"use client";
import React, { FormEvent, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const validateName = (name: string) => {
    return name.length > 0;
  }
  const validateMessage = (message: string) => {
    return message.length > 0;
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!validateName(name)) {
      alert("Please enter your name");
      return;
    }
    if (!validateMessage(message)) {
      alert("Please enter a message");
      return;
    }
    console.log(name, email, message);
    setSubmitted(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        resolve(null);
      }, 5000);
    });
  };

  return (
    <div className="w-full flex justify-center border-2  border-primary p-12">
      {
        submitted ? (
          <h1 className="text-4xl font-bold text-white">
            Thank you for your message, we will get back to you soon!
          </h1>
        ) : (
          <form className="w-full max-w-lg " onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="p-2 rounded-sm border-2 border-transparent outline-none focus:border-primary transition-all"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-2 text-white bg-primary hover:bg-secondary transition-all  py-2 px-4 rounded-sm "
        >
          Submit
        </button>
      </form>
        )
      }
      
    </div>
  );
};

export default ContactForm;
