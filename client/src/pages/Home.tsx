import ExpertAdvice from "../components/common/ExpertAdvice";
import Technologies from "./Technologies";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen homeBgColor pt-17 overflow-x-hidden">
      <div className="px-4 sm:px-5 py-6 sm:py-8">
        {/* Hero Container */}
        <section className="relative h-[50vh] sm:h-[65vh] md:h-[75vh] xl:h-[85vh] overflow-hidden">
          {/* Video */}
          <video
            src="/2428938f-9a312bd6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />

          {/* Text */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center xl:block">
            <h1
              className="
    absolute
    left-2 sm:left-4 xl:left-auto
    top-[8%] sm:top-[10%] xl:top-auto
    text-[14vw] sm:text-[12vw]
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
              top-[38%] sm:top-[42%] xl:top-[45%]
              right-[15%] sm:right-20 xl:right-25
              -translate-y-1/2
              text-[14vw] sm:text-[12vw]
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
              top-[52%] sm:top-[53%]
              right-[5%] sm:right-8 xl:right-10
              text-[14vw] sm:text-[12vw]
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

      <section className="relative overflow-hidden bg-[#232323]">
        {/* Background SVG */}
        <img
          src="src/assets/Images/download (1).svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
        />

        {/* Content */}
        <div className="relative px-4 sm:px-5">
          <h1
            className="text-white text-3xl sm:text-4xl xl:text-6xl font-black text-center xl:text-left"
            style={{
              fontFamily: '"GT America Exp Black", sans-serif',
            }}
          >
            ZeroWind creates
            <span className="text-[#E8FF00]">smart</span>
            <br />
            fabrics
          </h1>

          <div className="mt-8 sm:mt-12 xl:mt-18 max-w-3xl ps-0 xl:ps-20 mx-auto xl:mx-0 text-center xl:text-left">
            <p className="text-white text-base sm:text-lg xl:text-xl leading-[1.3]">
              Passion for outdoor activities and pursuit of <br className="hidden sm:block" /> technicality
              make ZeroWind the ideal brand for <br className="hidden sm:block" /> creating performance
              fabrics for a wide range of <br className="hidden sm:block" /> uses
            </p>
          </div>
        </div>

        <section className="mt-10 sm:mt-14 xl:mt-17 ps-0 xl:ps-20 px-4 sm:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <p className="text-[#8A8A8A] text-sm leading-[1.30] tracking-wide text-center md:text-left">
              From the beginning, ZeroWind has developed much of the fabric{" "}
              range using dynamic breathability membranes: + Intensity +
              Breathability.
              The extraordinary technical performance of ZeroWind fabrics is{" "}
              guaranteed by the constant investment and research work on.
            </p>

            <p className="text-[#8A8A8A] text-sm leading-[1.35] tracking-wide text-center md:text-left">
              Innovative materials create unique garments for cycling, outdoor,{" "}
              running and urban sectors.
              Laboratory tests and practical trials ensure the best experience
              of use and usage by the end consumer.
            </p>
          </div>
        </section>
      </section>

      <div className="mt-8 sm:mt-10 ps-0 xl:ps-20 flex justify-center xl:justify-start px-4 sm:px-5">
        <Link to="/contact">
          <button className="border rounded-full textSecondaryColor px-8 py-3 min-h-[44px] text-sm">
            Contact us
          </button>
        </Link>
      </div>

      <section className="px-4 sm:px-5 py-5 mt-8 sm:mt-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <Link to="/features" className="w-full md:w-auto">
            <div className="relative w-full max-w-[460px] mx-auto md:mx-0">
              <video
                src="/0a804172.mp4"
                loop
                muted
                className="h-52 sm:h-64 md:h-72 xl:h-82 w-full xl:w-115 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src="src/assets/Images/download (1).svg"
                  alt=""
                  className="w-32 sm:w-40 xl:w-50 h-auto max-w-[80%] object-contain"
                />
                <img
                  src="src/assets/Images/download (4).svg"
                  alt=""
                  className="w-14 sm:w-16 xl:w-20 h-auto object-contain"
                />
              </div>
            </div>
          </Link>
          <Link to="/features" className="w-full md:w-auto">
            <div className="relative w-full max-w-[460px] mx-auto md:mx-0">
              <video
                src="/592ec493.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-52 sm:h-64 md:h-72 xl:h-82 w-full xl:w-115 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src="src/assets/Images/download.svg"
                  alt=""
                  className="w-32 sm:w-40 xl:w-50 h-auto max-w-[80%] object-contain"
                />
                <img
                  src="src/assets/Images/download (10).svg"
                  alt=""
                  className="w-14 sm:w-16 xl:w-20 h-auto object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <div className="relative py-12 sm:py-16 xl:py-20 flex justify-center items-center mt-16 sm:mt-24 xl:mt-30 px-4">
          <h1
            className="
    mainFont
    text-[14vw] sm:text-[12vw]
    font-black
    uppercase
    text-transparent
    origin-left
    scale-x-110
    scale-y-[0.8]
    [-webkit-text-stroke:1px_#E8FF00]
  "
          >
            Arsenal
          </h1>

          <div className="absolute inset-0 flex items-center justify-center py-6 sm:py-10">
            <Link to="/arsenal">
              <img
                src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
                alt=""
                className="w-48 sm:w-64 xl:w-80 h-auto max-w-[70vw] object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 xl:gap-10 py-6 sm:py-10 mt-6 sm:mt-10 px-4">
          <img
            src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
            alt=""
            className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
          />
          <Link to="/bergamo">
            <img
              src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
            />
          </Link>
          <Link to="/bradsoftshell">
            <img
              src="src/assets/Images/imgi_22_ppellejkthy-23-aranci-web%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
            />
          </Link>
          <Link to="/grandprix">
            <img
              src="src/assets/Images/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-22 object-contain"
            />
          </Link>
          <Link to="/tempest">
            <img
              src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
            />
          </Link>
          <Link to="/elaprint">
            <img
              src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
            />
          </Link>
          <Link to="/skin">
            <img
              src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
              alt=""
              className="w-12 sm:w-15 h-16 sm:h-20 object-contain"
            />
          </Link>
        </div>
      </section>

      <section>
        <div className="relative px-4 sm:px-5 py-8 sm:py-10 mt-8 sm:mt-10">
          <video
            src="/884db69f-0e17ed62.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[280px] sm:h-[350px] xl:h-[425px] w-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 ps-4 sm:ps-10 xl:ps-20 mt-16 sm:mt-24 xl:mt-28 flex flex-col items-center xl:items-start text-center xl:text-left">
            <p className="text-white text-sm">Subscribe to Newsletter</p>
            <h1 className="text-white font-extrabold tracking-wider leading-7 sm:leading-8 text-xl sm:text-2xl xl:text-[32px] mt-3">
              Don't miss our events <br /> and the latest news <br /> about our
              products and <br />
              successes.
            </h1>
            <div className="w-full max-w-[445px] min-h-[44px] h-14 sm:h-16 border textSecondaryColor rounded-sm overflow-hidden mt-6 sm:mt-8 flex">
              <div className="relative flex-1 min-w-0">
                <input
                  id="home-email"
                  type="email"
                  placeholder=" "
                  className="peer w-full h-full bg-transparent px-4 text-white outline-none text-sm"
                />
                <label
                  htmlFor="home-email"
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

              <button className="w-24 min-h-[44px] h-full rounded-sm buttonBackground text-black text-[10px] hover:opacity-90 transition shrink-0">
                Subscribe me
              </button>
            </div>

            <div className="flex items-start gap-3 mt-4 sm:mt-6 max-w-[445px] w-full">
              <input
                type="checkbox"
                id="home-privacy"
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
                htmlFor="home-privacy"
                className="text-gray-400 text-[12px] tracking-wider text-left"
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
      <ExpertAdvice />
    </main>
  );
}

export default Home;
