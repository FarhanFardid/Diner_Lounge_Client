import SectionTitle from "../../Shared/SectionTitle";
import { FaLocationArrow } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div>
            <SectionTitle heading="Contact Form" subHeading="Send Us a Message"></SectionTitle>
            <div className="grid grid-cols-2 gap-4 py-3 bg-slate-100 p-5 my-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="text" placeholder="Enter your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Phone</span>
          </label>
          <input type="text" placeholder="Enter your phone" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Address</span>
          </label>
          <input type="text" placeholder="Enter your address" className="input input-bordered" />
        </div>
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text font-bold ">Message</span>
          </label>
          <textarea rows="10"  type="text" placeholder="Write your Message here" className="input input-bordered" />
        </div>
        <div className="form-control mt-6 col-span-2 w-44 mx-auto">
          <button className="btn bg-[#D1A054]">Send Message<FaLocationArrow className="m-2"/> </button>
        </div>
            </div>
           
      </div>
    
    );
};

export default ContactForm;