import ExpertAdvice from "../components/common/ExpertAdvice";
import Technologies from "./Technologies";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="min-h-screen homeBgColor pt-17 ">
      <div className="px-5 py-8">
        {/* Hero Container */}
        <section className="relative h-[85vh] overflow-hidden ">
          {/* Video */}
          <video
            src="/2428938f-9a312bd6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-82 w-full object-cover rounded-lg"
          />

          {/* Text */}
          <div className="absolute inset-0 z-10">
            <h1
              className="
    absolute
    text-[12vw]
    font-black
    uppercase
    text-transparent
    origin-left
    scale-x-110
    scale-y-[0.8]
    [-webkit-text-stroke:1px_#E8FF00]
  "
              style={{ fontFamily: '"GT America Exp Black", sans-serif' }}
            >
              Better
            </h1>

            <h1
              className="
              absolute
              top-[45%]
              right-25
              -translate-y-1/2
              text-[12vw]
              font-black
              uppercase
              leading-none
              text-transparent
              scale-x-110
               scale-y-[0.8]
              [-webkit-text-stroke:1px_#E8FF00]
            "
              style={{ fontFamily: '"GT America Exp Black", sans-serif' }}
            >
              In
            </h1>

            <h1
              className="
              absolute
              top-[53%]
              right-10
              text-[12vw]
              font-black
              uppercase
              leading-none
              text-transparent
              scale-x-110
    scale-y-[0.8]
              [-webkit-text-stroke:1px_#E8FF00]
            "
              style={{ fontFamily: '"GT America Exp Black", sans-serif' }}
            >
              Motion
            </h1>
          </div>
        </section>
        <Technologies />
      </div>

      {/* <div className="relative">
        <img src="src/assets/Images/download (1).svg" alt="" />
        <div className="absolute inset-0">
          <h1 className="text-white font-extrabold text-6xl tracking-wide">
            ZeroWind creates{" "}
            <span className="textSecondaryColor">original </span> <br /> fabrics
          </h1>
          <p className="text-white">
            Passion for outdoor activities and pursuit of <br /> technicality
            make ZeroWind the ideal brand for <br /> creating performance
            fabrics for a wide range of <br /> uses.
          </p>
          <div className="flex">
            <p>
              From the beginning, ZeroWind has developed much of the fabric
              range using dynamic breathability membranes : + Intensity +
              Breathability. The extraordinary technical performance of ZeroWind
              fabrics is guaranteed by the constant investment and research work
              on
            </p>
            <p>
              innovative materials to create unique garments for cycling,
              outdoor, running and urban sectors. Laboratory tests and practical
              trials ensure the best experience of use and usage by the end
              consumer.
            </p>
          </div>
          <button>Contact Us</button>
        </div>
      </div> */}

      <section className="relative  overflow-hidden bg-[#232323] ">
        {/* Background SVG */}
        <img
          src="src/assets/Images/download (1).svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
        />

        {/* Content */}
        <div className="relative ">
          <h1
            className="text-white text-6xl font-black  px-5"
            style={{
              fontFamily: '"GT America Exp Black", sans-serif',
            }}
          >
            ZeroWind creates
            <span className="text-[#E8FF00]">smart</span>
            <br />
            fabrics
          </h1>

          <div className="mt-18 max-w-3xl ps-20">
            <p className="text-white text-xl leading-[1.3] ">
              Passion for outdoor activities and pursuit of <br /> technicality
              make ZeroWind the ideal brand for <br /> creating performance
              fabrics for a wide range of <br /> uses
            </p>
          </div>
        </div>

        <section className="mt-17 ps-20">
          <div className="grid grid-cols-2  ">
            <p className="text-[#8A8A8A] text-sm leading-[1.30] tracking-wide">
              From the beginning, ZeroWind has developed much of the fabric{" "}
              <br />
              range using dynamic breathability membranes: + Intensity + <br />
              Breathability.
              <br />
              The extraordinary technical performance of ZeroWind fabrics is{" "}
              <br />
              guaranteed by the constant investment and research work on.
            </p>

            <p className="text-[#8A8A8A] text-sm leading-[1.35] tracking-wide">
              Innovative materials create unique garments for cycling, outdoor,{" "}
              <br />
              running and urban sectors. <br />
              Laboratory tests and practical trials ensure the best experience
              of <br />
              use and usage by the end consumer.
            </p>
          </div>
        </section>
      </section>
      <div className="mt-10 ps-20">
        <Link to="/contact">
        <button className="border rounded-full textSecondaryColor px-8 py-2 text-sm ">
          Contact us
        </button>
        </Link>
      </div>

      <section className=" ps-5 py-5 mt-10">
        <div className="flex gap-10">
          <Link to="/features">
          <div className="relative">
            <video
              src="/0a804172.mp4"
              loop
              muted
              className=" h-82 w-115 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
              <img
                src="src/assets/Images/download (1).svg"
                alt=""
                className="w-50 h-50 justify-center items-center"
              />
              <img
                src="src/assets/Images/download (4).svg"
                alt=""
                className="w-20 h-20 justify-center items-center"
              />
            </div>
             
          </div>
          </Link>
          <Link to="/features">
          <div className="relative">
            <video
              src="/592ec493.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" h-82 w-115 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col  items-center justify-center">
              <img
                src="src/assets/Images/download.svg"
                alt=""
                className="w-50 h-50 justify-center items-center"
              />
              <img
                src="src/assets/Images/download (10).svg"
                alt=""
                className="w-20 h-20 justify-center items-center"
              />
            </div>
          </div>
          </Link>
         
        </div>
        
      </section>

      <section>
        <div className="relative py-20 flex justify-center items-center mt-30">
          <h1
            className="
    mainFont
    text-[12vw]
    font-black
    uppercase
    text-transparent
    origin-left
    scale-x-110
    scale-y-[0.8]
    [-webkit-text-stroke:1px_#E8FF00]
  "
            // style={{ fontFamily: '"GT America Exp Black", sans-serif' }}
          >
            Arsenal
          </h1>

          <div className="absolute inset-0 flex items-center justify-center py-10">
            <Link to="/arsenal">
            <img
              src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
              alt=""
              className="w-80 h-80"
            /></Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10  py-10 mt-10">
          <img
            src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          />
          <Link to="/bergamo">
          <img
            src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          /></Link>
          <Link to="/bradsoftshell">
          <img
            src="src/assets/Images/imgi_22_ppellejkthy-23-aranci-web%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          /></Link>
          <Link to="/grandprix">
          <img
            src="src/assets/Images/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-22"
          /></Link>
          <Link to="/tempest">
          <img
            src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          /></Link>
          <Link to="/elaprint">
          <img
            src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          /></Link>
          <Link to="/skin">
          <img
            src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
            alt=""
            className="w-15 h-20"
          /></Link>
          
        </div>
      </section>

      <section>
        <div className=" relative px-5 py-10 mt-10 ">
          <video
            src="/884db69f-0e17ed62.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" h-[425px] w-full object-cover rounded-lg"
          />

          <div className=" absolute inset-0 ps-20 mt-28">
            <p className="text-white text-sm">Subscribe to Newsletter</p>
            <h1 className="text-white font-extrabold tracking-wider leading-8 text-[32px] mt-3  ">
              Don't miss our events <br /> and the latest news <br /> about our
              products and <br />
              successes.
            </h1>
            <div className="w-[445px] h-16 border textSecondaryColor rounded-sm overflow-hidden mt-8 flex">
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
              text-gray-400 transition-all duration-200
              peer-focus:top-3
              peer-focus:text-[10px]
              peer-focus:text-[#E8FF00]
              peer-[:not(:placeholder-shown)]:top-3
              peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Email *
                </label>
              </div>

              <button className="w-24 h-full rounded-sm buttonBackground text-black text-[10px]  hover:opacity-90 transition">
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
                  trattamento dei dati personali
                </span>
                .
              </label>
            </div>
          </div>
        </div>
      </section>
            <ExpertAdvice/>
      
    </main>
  );
}

export default Home;
