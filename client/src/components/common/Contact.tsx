import Form from "./Form";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen homeBgColor pt-20 pb-15 overflow-x-hidden">
      <h1 className="px-5 sm:px-10 xl:ps-30 textSecondaryColor tracking-wide text-lg sm:text-xl">
        Have a question?{" "}
      </h1>
      <h1 className="px-5 sm:px-10 xl:ps-30 textSecondaryColor tracking-wide text-lg sm:text-xl">
        Do you want to talk to us?
      </h1>
      <Form />
      <div className="px-5 sm:px-10 xl:px-30 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-28 w-full lg:w-auto text-center sm:text-left">
          {/* Address */}
          <div>
            <h3 className="textSecondaryColor text-xs font-medium mb-6">
              Where we are
            </h3>

            <div className="text-gray-400 text-xs leading-8">
              <p>Pidigi S.p.a. Via della Meccanica, 29</p>
              <p>37139 Verona (Italy).</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="textSecondaryColor text-xs font-medium mb-6">
              Contacts
            </h3>

            <div className="text-gray-400 text-xs leading-8">
              <p>info@zerowind.it</p>
              <p>+39 045 92 16 888</p>
            </div>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center gap-8 pe-0 xl:pe-20 pb-6 lg:pb-0">
          <FaInstagram
            size={18}
            className="text-[#E8FF00] hover:text-white cursor-pointer transition min-w-[44px] min-h-[44px]"
          />

          <FaFacebookF
            size={18}
            className="text-[#E8FF00] hover:text-white cursor-pointer transition min-w-[44px] min-h-[44px]"
          />

          <FaYoutube
            size={18}
            className="text-[#E8FF00] hover:text-white cursor-pointer transition min-w-[44px] min-h-[44px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
