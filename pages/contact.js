import ContactForm from '../components/ContactForm.js';
import { /*DefaultToast,*/ ToastProvider, withToastManager } from 'react-toast-notifications';
//DefaultToast is undefined for now, so cannot change css of default toast notifications
//waiting for repo owner to publish changes to npm
//in mean time, just setting this weird class '.css-1p3cd4g' to change css
//import { ToastNotification } from '../components/ToastNotification.js';
const ContactFormWithToasts = withToastManager(ContactForm);
// const ToastNotification = ({children, ...props}) => (
//   <DefaultToast {...props} style={{width:"100%"}}><p>Test</p>{children}</DefaultToast>
// );
const Contact = ({ReactGA}) => (
    <React.Fragment>
      <ToastProvider>
        <div className="about-paragraphs">
          <p>If you would like to provide feedback or get in contact, send me an email using the form below.</p>
          <ContactFormWithToasts/>
        </div>
        <style jsx>{`
          .about-paragraphs {
            padding-bottom: 10px;
          }
        `}</style>
      </ToastProvider>
    </React.Fragment>
)
export default Contact;
