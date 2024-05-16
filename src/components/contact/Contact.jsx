import {  useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";

const serviceId = "service_ht97685";
const templateId = "template_9zcksa8";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailText, setEmailText] = useState("");
  const form = useRef();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setEmailText(event.target.value);
  };
  const isEmail = (text) => {
    const gmailRegex = /^[^\s@]+@gmail\.com$/;
    return gmailRegex.test(text);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(email) || emailText.length < 5) {
      if (!isEmail(email)) {
        alert("Please check your email");
      } else {
        alert("Oups, please check your informations entered before send email");
      }
      return;
    }
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, "mIfQMWn5CUch1AKk_")
      .then(
        (result) => {
          setEmail("");
          setEmailText("");
          setLoading(false);
          setMessage(true);
        },
        (error) => {
          console.log(error, "error");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <span></span>
          <input
            type="email"
            name="from_name"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Message"
            onChange={handleTextareaChange}
            name="message"
            value={emailText}
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>

          {message && <span>Thanks, I'll reply SOON.</span>}
          {loading && (
            <span>
              <ClipLoader
                color={"red"}
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
