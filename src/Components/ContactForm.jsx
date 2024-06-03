import React from 'react';
import './ContactForm.css'; // Import the CSS file for the form animations

const ContactForm = ({ show, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={onClose}
    >
      <div className="contact-form relative bg-white p-6 rounded-lg w-[90%] max-w-md transform transition-all duration-500" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-4 text-xl font-bold text-[#2D3142] tracking-[20] leading-28">Talk to us</h2>
        <form action='https://getform.io/f/zazkxrrb' method='POST'>
          <div className="mb-4">
            <input type="email" name="email" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#FF3366] font-normal text-[#6F718F99] tracking-[28] leading-20 text-sm" placeholder="Work email*" required />
          </div>
          <div className="mb-4 flex gap-4">
            <input type="text" name="first_name" className="w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#FF3366] font-normal text-[#6F718F99] tracking-[28] leading-20 text-sm" placeholder="First name*" required />
            <input type="text" name="last_name" className="w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#FF3366] font-normal text-[#6F718F99] tracking-[28] leading-20 text-sm" placeholder="Last name*" required />
          </div>
          <div className="mb-4 flex items-start">
            <input type="hidden" name="terms" value="no" />
            <input type="checkbox" id="terms" name="terms" value="yes" required className="mr-2 mt-1" />
            <label htmlFor="terms" className="text-sm font-normal text-[#616678] tracking-[0] leading-20">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
          </div>
          <button type="submit" className="bg-[#FF3366] text-white text-lg leading-32 tracking-[0] font-bold py-2 px-4 rounded w-full">Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;