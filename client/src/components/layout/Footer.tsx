import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full min-h-screen buttonBackground overflow-hidden mainFont">

      {/* Marquee */}
      <div className="w-full overflow-hidden py-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <h1
              key={i}
              className="
                shrink-0
                mr-5
                text-[18vw]
                sm:text-[14vw]
                md:text-[10vw]
                xl:text-[100px]
                font-black
                uppercase
                leading-none
                text-transparent
                [-webkit-text-stroke:1px_rgb(39,39,39)]
              "
            >
              Better in Motion&nbsp;
            </h1>
          ))}
        </motion.div>
      </div>

      {/* Footer Links */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 xl:gap-24 px-6 sm:px-10 xl:px-20 mt-10">

        <div>
          <h2 className="text-sm font-semibold uppercase">
            Technologies
          </h2>

          <div className="flex flex-col gap-3 mt-6 text-xs">

            <Link to="/fit">FIT</Link>

            <Link to="/motion">Motion</Link>

            <Link to="/power">Power</Link>

            <Link to="/brave">Brave</Link>

            <Link to="/vapora">Vapora</Link>

          </div>
        </div>

        <div>

          <h2 className="text-sm font-semibold uppercase">
            Features
          </h2>

          <div className="flex flex-col gap-3 mt-6 text-xs">

            <Link to="/features">ZWR</Link>

            <Link to="/features">Relif</Link>

          </div>

        </div>

        <div>

          <h2 className="text-sm font-semibold uppercase">
            Zerowind
          </h2>

          <div className="flex flex-col gap-3 mt-6 text-xs">

            <Link to="/contact">
              Contact
            </Link>

            <p>News</p>

          </div>

        </div>

        <div>

          <h2 className="text-sm font-semibold uppercase">
            Contacts
          </h2>

          <div className="flex flex-col gap-3 mt-6 text-xs">

            <p>info@zerowind.it</p>

            <p>+39 045 92 16 888</p>

          </div>

        </div>

      </div>

      {/* Newsletter */}

      <div className="mt-16 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 px-6 sm:px-10 xl:px-20">
                {/* Newsletter Card */}
        <div className="relative w-full max-w-[520px]">

          <video
            src="/884db69f-0e17ed62.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[220px] sm:h-[260px] md:h-[300px] xl:h-[240px] rounded-xl object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 xl:px-10">

            <p className="text-white text-base font-medium">
              Newsletter
            </p>

            <div className="flex mt-6 w-full max-w-md border border-white rounded overflow-hidden">

              <div className="relative flex-1">

                <input
                  id="newsletter-email"
                  type="email"
                  placeholder=" "
                  className="peer w-full h-11 bg-transparent px-4 text-white outline-none"
                />

                <label
                  htmlFor="newsletter-email"
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-300
                  text-xs
                  transition-all
                  peer-focus:top-3
                  peer-focus:text-[10px]
                  peer-[:not(:placeholder-shown)]:top-3
                  peer-[:not(:placeholder-shown)]:text-[10px]
                "
                >
                  Email *
                </label>

              </div>

              <button className="px-5 sm:px-6 text-[11px] font-medium buttonBackground text-black whitespace-nowrap">
                Subscribe
              </button>

            </div>

            <div className="flex items-start gap-3 mt-5 max-w-md">

              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#E8FF00]"
              />

              <p className="text-[11px] text-gray-300 leading-5">
                Dichiaro di aver letto e di accettare il{" "}
                <span className="underline">
                  trattamento dei dati personali
                </span>
                .
              </p>

            </div>

          </div>

        </div>

        {/* Social Icons */}

        <div className="flex xl:flex-col justify-center gap-6">

          <img
            src="/download (12).svg"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
            alt=""
          />

          <img
            src="/download (13).svg"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
            alt=""
          />

          <img
            src="/download (11).svg"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
            alt=""
          />

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="mt-16 border-t border-neutral-700 px-6 sm:px-10 xl:px-20 py-8">

        <div className="flex flex-wrap justify-center xl:justify-start gap-6 uppercase text-[11px]">

          <Link to="/privacypolicy">
            Privacy Policy
          </Link>

          <p>Cookie Policy</p>

          <p className="underline">
            Manage Cookies
          </p>

        </div>

        <div className="mt-6 flex flex-col xl:flex-row justify-between gap-4 text-[11px] text-center xl:text-left text-gray-400">

          <p>
            ZEROWIND® REA VR69979 · P.IVA 00215260233 ·
            Via della Meccanica 29, 37139 Verona
          </p>

          <p>Credits</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
    