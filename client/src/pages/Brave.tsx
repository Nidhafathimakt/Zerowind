import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";

function Brave() {
  return (
    <section className="w-full m-0 p-0 mainFont overflow-x-hidden">
      <div className="relative w-full">
        <video
          src="/0a804172.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[250px] sm:h-[350px] xl:h-[425px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <p className="uppercase text-white text-xs tracking-[0.3em] mb-2">
            Technology
          </p>

          <img
            src="src/assets/Images/download (5).svg"
            alt="Brave"
            className="w-36 sm:w-72 xl:w-100 h-auto object-contain max-w-[90%]"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor pt-16 sm:pt-24 px-5 sm:px-10 xl:px-30">
        <div>
          <p className="text-xl sm:text-2xl xl:text-[33px] text-white leading-snug xl:leading-9 font-extrabold text-center xl:text-left">
            With the BRAVE fabric line, ZeroWind <br className="hidden sm:block" />
            redefines the concept of windproof <br className="hidden sm:block" /> protective shell.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:ps-24 gap-4 xl:gap-7 py-8 sm:py-15">
          <div className="w-full xl:w-[200px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="src/assets/Images/imgi_9_Livello-1-4.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3">Total wind protection</p>
          </div>
          <div className="w-full xl:w-[200px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="src/assets/Images/imgi_16_icon-3.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3 text-center">
              Minimum bulk and maximum <br />
              lightness
            </p>
          </div>
          <div className="w-full xl:w-[200px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0 sm:col-span-2 xl:col-span-1">
            <img src="src/assets/Images/imgi_17_Risorsa-3.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3">Strength and durability</p>
          </div>
        </div>

        <div>
          <p className="text-white text-base sm:text-lg xl:text-xl tracking-wide text-center xl:text-left">
            High wind protection combined with maximum lightness thanks to the innovative <br className="hidden xl:block" />
            single-layer fabric construction. Ultralight fabrics perfect for making garments <br className="hidden xl:block" />
            with excellent technical characteristics, durable and extremely easy to carry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 text-center mt-12 sm:mt-20">
          <video
            src="/cf5ecee7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[500px] xl:w-[500px] h-[200px] sm:h-[250px] object-cover rounded-lg shadow-2xs"
          />
          <div className="flex flex-col gap-2 textSecondaryColor">
            <p className="uppercase text-[9px] font-normal">Grams</p>
            <p className="text-3xl font-extrabold">20 a 80</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-55 h-auto mt-16 sm:mt-25 object-contain"
          />
        </div>
        <ExpertAdvice />
      </div>
      <Link to="/vapora">
        <div className="w-full flex homeBgColor px-4 sm:px-5 py-12 sm:py-20">
          <div className="relative w-full">
            <img
              src="src/assets/Images/imgi_18_vaporapreview%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full h-[200px] sm:h-[280px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase px-4">
              <p className="text-[9px] font-semibold tracking-[0.1em]">Discover the</p>
              <img src="src/assets/Images/download (6).svg" alt="" className="w-40 sm:w-55 object-contain max-w-[80%]" />
              <p className="text-[9px] font-semibold tracking-[0.1em]">Technology</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Brave;
