import { Link } from "react-router-dom";
function Footer() {
  
  return (
    <footer className="buttonBackground min-h-screen w-full flex flex-col overflow-hidden  mainFont ">
      <div className="pt-6 overflow-hidden">
        {/* <h1
          className="
            whitespace-nowrap
            text-[10vw]
            font-black
            uppercase
            leading-none
            text-transparent
            [-webkit-text-stroke:1px_black]          "
          style={{ fontFamily: '"GT America Ext Regular", sans-serif', fontStretch: "100%", }}
        >
          Better in Motion
        </h1> */}

        <h1
          className="
  mainFont
    text-[100px]
    leading-[100px]
    font-black
    uppercase
    whitespace-nowrap
    text-transparent
    [-webkit-text-stroke:1px_rgb(39,39,39)]
  "
        >
          Better in Motion
        </h1>
      </div>

      <div className="flex gap-30 ps-25 mt-20 font-stretch-extra-expanded tracking-wide">
        <div className="">
          <h1 className="text-sm">Technologies</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/fit">
            <p>FIT</p></Link>
            <Link to="/motion">
            <p>Motion</p></Link>
            <Link to="/power">
            <p>Power</p></Link>
            <Link to="/brave">
            <p>Brave</p> </Link>
            <Link to="/vapora">
            <p>Vapora</p></Link>
          </div>
        </div>
        <div>
          <h1 className="text-sm">Features</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/features" >
            <p>ZWR</p>
            <p>Relif</p>
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-sm">Zerowind</h1>
          <div className="flex flex-col mt-5 text-xs leading-5">
            <Link to="/contact" >
            <p>Contact</p> </Link>
            <p>News</p>
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
      <div className="flex items-center gap-8">
      <div className="ps-25 py-10 relative">
        <video
          src="/884db69f-0e17ed62.mp4"
          autoPlay
          loop
          muted
          playsInline
          className=" h-[230px] w-[385px] object-cover rounded-lg"
        />

        <div className=" absolute inset-0 ps-30 mt-20">
          <p className="text-white text-sm"> Newsletter</p>

          <div className="w-[300px] h-10 border  border-white rounded-sm mt-8 flex">
            <div className="relative flex-1">
              <input
                id="email"
                type="email"
                placeholder=" "
                className="peer w-full h-full bg-transparent px-4 text-white outline-none"
              />
              <label
                htmlFor="email"
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

            <button className="w-24 h-10 rounded-sm buttonBackground text-black text-[10px]  hover:opacity-90 transition">
              Subscribe me
            </button>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              id="privacy"
              className="
      w-3 h-3
      appearance-none
      border textSecondaryColor
      
      bg-transparent
      checked:bg-[#E8FF00]
      checked:border-black
      cursor-pointer
    "
            />

            <label
              htmlFor="privacy"
              className="text-gray-400 text-[12px] tracking-wider"
            >
              Dichiaro di aver letto e di accettare il{" "}
              <span className="underline">
                trattamento dei <br /> dati personali
              </span>
              .
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <img src="src/assets/Images/download (12).svg" alt=""  className="w-4 h-4"/>
        <img src="src/assets/Images/download (13).svg" alt="" className="w-4 h-4" />
        <img src="src/assets/Images/download (11).svg" alt="" className="w-4 h-4" />
      </div>
      </div>

      <div className="ps-16 uppercase py-8">
        <div className="flex gap-15 text-[10px]">
          <Link to="/privacypolicy">
          <p>Privacy Policy</p>
          </Link>
          <p>Cookie Policy</p>
          <p className="underline">Manage Cookies</p>
        </div>
        <div className="flex gap-20 text-[11px] mt-2">
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
