import { DeliveryMethod } from "schema-dts";
import Layout from "./Layout";
import SocialList  from "./SocialList";

export default function ContactForm() {
  return (
    <div className="form-container">
      
      <h1>
        I'm a contact form<span className="fancy">.</span>
      </h1>
      <SocialList/>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="personal-site-conact" value="contact" />
        <p>
          <label>
            <span>Name</span> <input type="text" name="name" className="input-box"/>
          </label>
        </p>
        <p>
          <label>
          <span>Email</span> <input type="email" name="email" className="input-box"/>
          </label>
        </p>
        <p>
          <label>
          <span>Message</span> <textarea name="message" className="input-box"></textarea>
          </label>
        </p>
        <p className="button-p">
          <button type="submit">Send</button>
        </p>
      </form>
      <style jsx>{`
        
        .input-box {
          margin : 0.5rem 1.5rem;
          padding: 0.5rem 0;
          width: 100%;
          border 2px solid;
          border-radius: 4px;
        }
        .button-p {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        form {
          width: 500px;
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        textarea {
          height 70px;
        }
        span {
          margin-right: auto;
        }

        button {
          background: black;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          border-style: none;
        }
        @media (max-width: 769px) {
          form {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
