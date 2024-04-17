"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your email sending logic here
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successful");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="flex space-x-4 gap-3 justify-center m-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] card rounded-lg shadow-ml bg-white p-8">
        {/* Wrap text and form fields in a wrapper with flex-direction: column on small screens */}
        <div className="flex flex-col sm:flex-row items-start">
          {/* Text content */}
          <div className="m-2">
            <p className="text-xl">
              Contact us today and let's embark on a journey to reimagine what's
              possible. Together, we can build a future where technology is not
              just a tool, but a catalyst for positive change and boundless
              progress.
            </p>
          </div>

          {/* Form fields container */}
          <div className="flex flex-col m-2">
            {/* Form fields and button... */}
            {/* ... remain as they are */}
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="px-3 lg:py-2 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-sm font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="px-3 lg:py-2 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="body" className="text-sm font-bold">
                Message:
              </label>
              <textarea
                id="body"
                name="message"
                required
                className="px-3 lg:py-2 py-3 border rounded-md h-24 focus:outline-none focus:ring focus:ring-blue-500 resize-none mb-2"
              />
            </div>
            <button
              type="submit"
              className="px-4 lg:py-2 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
