import CommonBanner from "../../Shared/CommonBanner";
import contactBanner from '../../assets/contact/banner.jpg'
import ContactForm from "./ContactForm";
import Location from "./Location";


const ContactUs = () => {
    return (
        <div>
            <CommonBanner img={contactBanner} size='big' heading='Contact Us' content="Connect with Bistro Boss for a delightful dining experience and exceptional service"></CommonBanner>
            <Location></Location>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;
