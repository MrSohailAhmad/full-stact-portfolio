import AI from "../public/images/intelligence-svgrepo-com.svg";
import FullStack from "../public/images/stack-svgrepo-com.svg";
import Home from "../public/images/home-svgrepo-com.svg";
import Work from "../public/images/contact-form-email-svgrepo-com.svg";
import Contact from "../public/images/contact-phone-talking-svgrepo-com.svg";
import Resume from "../public/images/sheet-txt-svgrepo-com.svg";
import Whatsapp from "../public/images/whatsapp-logo-thin-svgrepo-com.svg";
import Mail from "../public/images/mail-svgrepo-com.svg";
import GitHub from "../public/images/github-svgrepo-com.svg";
export const images = {
  AI: (props: string) => <AI className={props} />,
  FullStack: (props: string) => <FullStack className={props} />,
  Home: (props: string) => <Home className={props} />,
  Work: (props: string) => <Work className={props} />,
  Contact: (props: string) => <Contact className={props} />,
  Resume: (props: string) => <Resume className={props} />,
  Whatsapp: (props: string) => <Whatsapp className={props} />,
  Mail: (props: string) => <Mail className={props} />,
  GitHub: (props: string) => <GitHub className={props} />,
};
