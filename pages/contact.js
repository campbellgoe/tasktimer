import ContactForm from '../components/ContactForm.js';
export default () => (
    <React.Fragment>
      <div className="about-paragraphs">
        <p>If you would like to provide feedback or get in contact, send me an email using the form below.</p>
        <ContactForm/>
      </div>
      <style jsx>{`
        .about-paragraphs {
          padding: 5px 1em;
          border-radius: 0.5em;
        }
      `}</style>
    </React.Fragment>
)
