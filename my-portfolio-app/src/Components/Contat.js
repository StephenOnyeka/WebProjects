import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6geem04",
        "template_sik928s",
        form.current,
        "GFKo59tRbLNgT_HzK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </form> */}

      <form
        id="contactform"
        action="https://formsubmit.io/send/ejeanobionyeka@gmail.com"
        method="POST"
      >
        <label>Name</label>
        <input type="text" name="name" id="name" />
        <label>Email</label>
        <input type="email" name="email" id="email" />
        <label>Message</label>
        <textarea name="comment" id="comment" rows={3} />
        <input name="_formsubmit_id" type="text" style="display:none" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
