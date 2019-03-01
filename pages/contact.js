import ContactForm from '../components/ContactForm.js';
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications';
const ContactFormWithToasts = withToastManager(ContactForm);
const Contact = () => (
    <React.Fragment>
      <ToastProvider>
        <div className="about-paragraphs">
          <p>If you would like to provide feedback or get in contact, send me an email using the form below.</p>
          <ContactFormWithToasts />
        </div>
        <style jsx>{`
          .about-paragraphs {
            padding: 5px 1em;
            border-radius: 0.5em;
          }
        `}</style>
      </ToastProvider>
    </React.Fragment>
)
export default Contact;
