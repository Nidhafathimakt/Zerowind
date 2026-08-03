import { Link } from "react-router-dom";

function ContactButton() {
  return (
    <div className="flex justify-center xl:justify-start">
      <Link to="/contact">
        <button className="border rounded-full textSecondaryColor px-8 py-3 min-h-[44px] text-sm mt-8 sm:mt-10">
          Contact us
        </button>
      </Link>
    </div>
  );
}

export default ContactButton;
