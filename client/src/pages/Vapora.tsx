import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";

function Vapora() {
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
            src="/download (6).svg"
            alt="Vapora"
            className="w-40 sm:w-80 xl:w-120 h-auto object-contain max-w-[90%]"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor pt-16 sm:pt-24 px-5 sm:px-10 xl:px-30">
        <div>
          <p className="text-xl sm:text-2xl xl:text-[33px] text-white leading-snug xl:leading-9 font-extrabold text-center xl:text-left">
            Designed for those who live the <br className="hidden sm:block" />
            outdoors without limits, Vapora is the <br className="hidden sm:block" />
            new technical fabric in the ZeroWind <br className="hidden sm:block" />
            range that meets the needs of every <br className="hidden sm:block" />
            adventure—from trail running to <br className="hidden sm:block" />
            trekking, from cycling to everyday <br className="hidden sm:block" /> exploration.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7 py-8 sm:py-15">
          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="/imgi_10_Group3-2_1.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3">High breathability</p>
          </div>
          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="/imgi_11_Livello-1-6_1.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3">Thermoregulation</p>
          </div>
          <div className="w-full xl:w-[318px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="/imgi_16_icon-3.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3 text-center">
              Minimum bulk and maximum <br />
              lightness
            </p>
          </div>
          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img src="/imgi_19_icon-456.svg" alt="" className="w-9 h-10 object-contain" />
            <p className="text-white text-[11px] tracking-wide mt-3">Insulation</p>
          </div>
        </div>

        <div>
          <p className="text-white text-base sm:text-lg xl:text-xl text-center xl:text-left">
            Its structure combines extreme lightness and advanced thermoregulation, <br className="hidden xl:block" />
            offering constant insulation even in the most variable conditions.{" "}
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Thanks to optimal moisture management, Vapora reduces sweat and maintains a <br className="hidden xl:block" /> dry and comfortable internal microclimate, making
            physical activity extremely <br className="hidden xl:block" />
            enjoyable. <br className="hidden sm:block" />
            <span className="leading-8 xl:leading-14">
              With Vapora, every layer becomes an invisible ally: dynamic, technical, essential. <br className="hidden xl:block" />
            </span>
            <span className="leading-7 xl:leading-12">
              The perfect balance between protection, comfort, and performance.{" "}
            </span>
          </p>
        </div>
      </div>

      <div className="homeBgColor">
        <div className="flex flex-col md:flex-row px-5 sm:px-10 xl:px-25 items-center gap-8 md:gap-20 text-center pb-10">
          <img
            src="/vapora-breathable-soul@690x340_r.jpeg.webp"
            alt=""
            className="w-full max-w-[500px] xl:w-[500px] h-[200px] sm:h-[280px] object-cover rounded-lg shadow-2xs mt-12 sm:mt-20"
          />
          <div className="flex flex-col gap-2 textSecondaryColor">
            <p className="uppercase text-[9px] font-normal">Grams</p>
            <p className="text-3xl font-extrabold">75 a 80</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        <ExpertAdvice />

        <Link to="/fit">
          <div className="w-full flex homeBgColor px-4 sm:px-5 mt-10 pb-12 sm:pb-20">
            <div className="relative w-full">
              <img
                src="/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp"
                alt=""
                className="w-full h-[200px] sm:h-[280px] object-cover rounded-lg"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase px-4">
                <p className="text-[9px] font-semibold tracking-[0.1em]">Discover the</p>
                <img src="/download (9).svg" alt="" className="w-20 sm:w-25 object-contain" />
                <p className="text-[9px] font-semibold tracking-[0.1em]">Technology</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Vapora;
