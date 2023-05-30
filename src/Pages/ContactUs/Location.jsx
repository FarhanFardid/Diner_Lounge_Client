import SectionTitle from "../../Shared/SectionTitle";
import ContactCard from "./ContactCard";
import { FaPhoneAlt } from 'react-icons/fa';

const Location = () => {
    return (
        <div>
            <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>
            <div>
                <ContactCard icon={<FaPhoneAlt/>} title="Phone" content="+38 012 44 321"></ContactCard>
            </div>
        </div>
    );
};

export default Location;