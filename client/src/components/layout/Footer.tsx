import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="buttonBackground min-h-screen w-full flex flex-col overflow-hidden mainFont">
      <div className="pt-6 overflow-hidden px-4 sm:px-6 lg:px-0">
        <h1
          className="
  mainFont
    text-[12vw]
    sm:text-[10vw]
    xl:text-[100px]
    leading-none
    xl:leading-[100px]
    font-black
    uppercase
    xl:whitespace-nowrap
    text-transparent
    [-webkit-text-stroke:1px_rgb(39,39,39)]
  "
        >
          Better in Motion
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 xl:gap-30 px-5 sm:px-10 xl:ps-25 mt-10 sm:mt-16 xl:mt-20 font-stretch-extra-expanded tracking-wide text-center sm:text-left">
        <div>
          <h1 className="text-sm">Technologies</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/fit">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">FIT</p>
            </Link>
            <Link to="/motion">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Motion</p>
            </Link>
            <Link to="/power">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Power</p>
            </Link>
            <Link to="/brave">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Brave</p>
            </Link>
            <Link to="/vapora">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Vapora</p>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-sm">Features</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/features">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">ZWR</p>
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Relif</p>
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-sm">Zerowind</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/contact">
              <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">Contact</p>
            </Link>
            <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start">News</p>
          </div>
        </div>

        <div>
          <h1 className="text-sm">Contacts</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <p>info@zerowind.it</p>
            <p>+39 045 92 16 888</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-8 px-5 sm:px-10 xl:px-0">
        <div className="ps-0 xl:ps-25 py-10 relative w-full max-w-[385px] mx-auto lg:mx-0">
          <video
            src="/884db69f-0e17ed62.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[180px] sm:h-[230px] w-full max-w-[385px] object-cover rounded-lg"
          />

          <div className="absolute inset-0 ps-4 sm:ps-8 xl:ps-30 mt-12 sm:mt-20">
            <p className="text-white text-sm"> Newsletter</p>

            <div className="w-full max-w-[300px] h-10 border border-white rounded-sm mt-4 sm:mt-8 flex">
              <div className="relative flex-1 min-w-0">
                <input
                  id="footer-email"
                  type="email"
                  placeholder=" "
                  className="peer w-full h-full bg-transparent px-4 text-white outline-none text-sm"
                />
                <label
                  htmlFor="footer-email"
                  className="absolute left-4 top-1/2 -translate-y-1/2
              text-gray-400 transition-all duration-200 text-[11px]
              peer-focus:top-3
              peer-focus:text-[10px]
              peer-[:not(:placeholder-shown)]:top-3
              peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Email *
                </label>
              </div>

              <button className="w-24 min-h-[44px] h-full rounded-sm buttonBackground text-black text-[10px] hover:opacity-90 transition shrink-0">
                Subscribe me
              </button>
            </div>

            <div className="flex items-start gap-3 mt-4 sm:mt-6 max-w-[300px]">
              <input
                type="checkbox"
                id="footer-privacy"
                className="
      w-4 h-4
      min-w-4
      appearance-none
      border textSecondaryColor
      bg-transparent
      checked:bg-[#E8FF00]
      checked:border-black
      cursor-pointer
      mt-0.5
    "
              />

              <label
                htmlFor="footer-privacy"
                className="text-gray-400 text-[12px] tracking-wider"
              >
                Dichiaro di aver letto e di accettare il{" "}
                <span className="underline">
                  trattamento dei <br className="hidden sm:block" /> dati personali
                </span>
                .
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-5 pb-6 lg:pb-0">
          <img src="/download (12).svg" alt="" className="w-4 h-4" />
          <img src="/download (13).svg" alt="" className="w-4 h-4" />
          <img src="/download (11).svg" alt="" className="w-4 h-4" />
        </div>
      </div>

      <div className="ps-5 sm:ps-10 xl:ps-16 uppercase py-8 px-4 sm:px-6 text-center xl:text-left">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center xl:justify-start gap-4 sm:gap-15 text-[10px]">
          <Link to="/privacypolicy">
            <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center xl:justify-start">Privacy Policy</p>
          </Link>
          <p className="min-h-[44px] sm:min-h-0 flex items-center justify-center xl:justify-start">Cookie Policy</p>
          <p className="underline min-h-[44px] sm:min-h-0 flex items-center justify-center xl:justify-start">Manage Cookies</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 text-[11px] mt-4 xl:mt-2">
          <p>
            ZEROWIND® REA VR69979 - P.IVA 00215260233 | Via della Meccanica 29,
            37139 Verona
          </p>
          <p>Credits</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
