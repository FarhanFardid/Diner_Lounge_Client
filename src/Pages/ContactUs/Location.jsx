import SectionTitle from "../../Shared/SectionTitle";
import ContactCard from "./ContactCard";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosPin, IoIosTime } from "react-icons/io";


const Location = () => {
    return (
        <div>
            <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>
            <div className="grid grid-cols-3 gap-2 p-4">
                <ContactCard icon={<FaPhoneAlt/>} title="Phone" content="+38 012 44 321"></ContactCard>
                <ContactCard icon={<IoIosPin/>} title="Address" content="221/B Baker Street, London, UK"></ContactCard>
                <ContactCard icon={<IoIosTime/>} title="Working Hours" content="Sun-Fri 8.00 am - 11. 00 pm"></ContactCard>
            </div>
        </div>
    );
};

export default Location;