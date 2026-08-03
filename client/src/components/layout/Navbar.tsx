import { Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = {
  technologies: [
    { label: "FIT", to: "/fit" },
    { label: "Motion", to: "/motion" },
    { label: "Power", to: "/power" },
    { label: "Brave", to: "/brave" },
    { label: "Vapora", to: "/vapora" },
  ],
  features: [{ label: "Features", to: "/features" }],
  zerowind: [
    { label: "Contact", to: "/contact" },
    { label: "Arsenal", to: "/arsenal" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-start">
        {/* left Logo */}
        <Link to="/" onClick={closeMenu}>
          <div
            className="
    homeBgColor
    rounded-br-[30px]
    sm:rounded-br-[40px]
    md:rounded-br-[50px]
    w-20
    sm:w-25
    md:w-30
    lg:w-38
    h-16
    sm:h-20
    md:h-24
    lg:h-28
    flex
    items-center
    px-3
  "
          >
            <img
              src="src/assets/Images/download (8).svg"
              alt="ZeroWind"
              className="max-w-full h-auto"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div
          className="
     hidden
     lg:flex
    homeBgColor
    rounded-bl-[35px]
    w-[200px]
    md:w-[355px]
    lg:w-[400px]
    h-20
    md:h-24
    px-4
    sm:px-6
    lg:px-8
    2xl:px-10
    md:px-2
    items-center
    justify-center
    gap-2
    md:gap-6
    lg:gap-8
  "
        >
          <Link
            to="/technologies"
            className="uppercase flex items-center tracking-widest textSecondaryColor gap-1 text-xl sm:text-lg md:text-xs hover:text-white transition"
          >
            technologies
            <Plus size={10} strokeWidth={3} />
          </Link>

          <Link
            to="/features"
            className="uppercase flex items-center tracking-widest textSecondaryColor gap-1 text-xl sm:text-lg md:text-xs hover:text-white transition"
          >
            features
            <Plus size={10} strokeWidth={3} />
          </Link>

          <button
            type="button"
            className="textSecondaryColor min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <div
          className="
    lg:hidden
    homeBgColor
    rounded-bl-[25px]
    sm:rounded-bl-[30px]
    w-16
    sm:w-20
    h-16
    sm:h-20
    flex
    items-center
    justify-center
  "
        >
          <button
            type="button"
            className="textSecondaryColor min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60"
          aria-label="Close menu"
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[min(320px,85vw)] homeBgColor shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-24 px-6 pb-10 gap-8">
            <div>
              <p className="uppercase textSecondaryColor text-xs tracking-widest mb-4">
                Technologies
              </p>
              <div className="flex flex-col gap-3">
                {navLinks.technologies.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="text-white text-sm tracking-wide hover:textSecondaryColor transition min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="uppercase textSecondaryColor text-xs tracking-widest mb-4">
                Features
              </p>
              <div className="flex flex-col gap-3">
                {navLinks.features.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="text-white text-sm tracking-wide hover:textSecondaryColor transition min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="uppercase textSecondaryColor text-xs tracking-widest mb-4">
                Zerowind
              </p>
              <div className="flex flex-col gap-3">
                {navLinks.zerowind.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="text-white text-sm tracking-wide hover:textSecondaryColor transition min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
