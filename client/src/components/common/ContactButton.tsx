import { Link } from "react-router-dom";
function ContactButton() {
  return (
    <div>
        <Link to="/contact">
          <button className="border rounded-full textSecondaryColor px-8 py-2 text-sm mt-10 ">
            Contact us
          </button>
          </Link>
    </div>
  )
}

export default ContactButton