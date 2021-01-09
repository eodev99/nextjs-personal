import { DeliveryMethod } from "schema-dts";
import Layout from "./Layout";

export default function ContactForm() {
  return (
    <div>
      <h1>
        I'm a contact form<span className="fancy">.</span>
      </h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="personal-site-conact" value="contact" />
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
