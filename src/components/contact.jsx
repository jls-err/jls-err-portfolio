import { Mail, Send } from "lucide-react";
import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/meaelrqy",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Message failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section>
      <div className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <p className="contact-title">101 / Contact</p>

            <h1 className="contact-heading">
              Let's <span>Connect.</span>
            </h1>

            <p className="contact-description">
              Have a job opportunity, internship, or project in mind? Looking
              for someone to collaborate with, or just want to say hello? I'd
              love to hear from you. Feel free to reach out!
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-info">
              <div className="info-container">
                <p className="info-title">Your Name</p>
                <input
                  className="info-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="info-container">
                <p className="info-title">Email Address</p>
                <input
                  className="info-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-message">
              <p className="info-title">Your Message</p>
              <textarea
                className="info-messageInput"
                name="message"
                placeholder="Tell me about your opportunity, project, collaboration, or anything you'd like to share..."
                rows={5}
                required
              />

              <div className="contact-sendMessage">
                <button
                  className="btn-sendMessage"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send width={15} />
                </button>
              </div>

              {status === "success" && (
                <p className="form-success" role="status">
                  Message sent successfully! Thank you for reaching out.
                </p>
              )}

              {status === "error" && (
                <p className="form-error" role="alert">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>

          <div className="contact-footer">
            <p className="footer-title">Or connect with me on</p>

            <div className="contact-socials">
              <a
                href="https://www.facebook.com/juliusmenor.26"
                aria-label="Facebook Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="icons"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/JuliusMenor/"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="icons"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:juliusmenor14@gmail.com"
                aria-label="Send Email"
                className="icons"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;