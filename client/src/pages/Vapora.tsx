import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";

function Vapora() {
  return (
    <section className="w-full m-0 p-0 mainFont">
      <div className="relative w-full">
        <video
          src="/0a804172.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[425px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="uppercase text-white text-xs tracking-[0.3em] mb-2">
            Technology
          </p>

          <img
            src="src/assets/Images/download (6).svg"
            alt="Motion"
            className="w-120 h-auto object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor  pt-24 px-30  ">
        <div>
          <p className="text-[33px] text-white leading-9 font-extrabold ">
            Designed for those who live the <br />
            outdoors without limits, Vapora is the <br />
            new technical fabric in the ZeroWind <br />
            range that meets the needs of every <br />
            adventure—from trail running to <br />
            trekking, from cycling to everyday <br /> exploration.
          </p>
        </div>

        <div className="mt-20 flex justify-between gap-7 py-15">
          <div className="w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_10_Group3-2_1.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              High breathability
            </p>
          </div>

          <div className="w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_11_Livello-1-6_1.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Thermoregulation
            </p>
          </div>

          <div className="w-[318px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_16_icon-3.svg"
              alt=""
              className="w-9 h-10 object-contain flex items-center"
            />
            <p className="text-white text-[11px] tracking-wide mt-3 text-center">
              Minimum bulk and maximum <br />
              lightness
            </p>
          </div>

          <div className="w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_19_icon-456.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Insulation
            </p>
          </div>
        </div>

        <div>
          <p className="text-white text-xl ">
            Its structure combines extreme lightness and advanced
            thermoregulation, <br />
            offering constant insulation even in the most variable conditions.{" "}
            <br />
            <br />
            Thanks to optimal moisture management, Vapora reduces sweat and
            maintains a <br /> dry and comfortable internal microclimate, making
            physical activity extremely <br />
            enjoyable. <br />
            <span className="leading-14">
              With Vapora, every layer becomes an invisible ally: dynamic,
              technical, essential. <br />
            </span>
            <span className="leading-12">
              The perfect balance between protection, comfort, and
              performance.{" "}
            </span>
          </p>
        </div>
</div>
<div className="homeBgColor">
        <div className="flex  px-25 items-center gap-20 text-center pb-10 ">
          <img
            src="src/assets/Images/vapora-breathable-soul@690x340_r.jpeg.webp"
            alt=""
            className="w-[500px] h-[280px] object-cover rounded-lg shadow-2xs mt-20"
          />
          <div className="flex flex-col gap-2 textSecondaryColor mt-15">
            <p className="uppercase text-[9px] font-normal">Grams</p>
            <p className="text-3xl font-extrabold">75 a 80</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        
        <ExpertAdvice  />
      
      <Link to="/fit">
        <div className="w-full flex  homeBgColor px-5 mt-10 pb-20">
          <div className="relative w-full">
            <img
              src="src/assets/Images/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full h-[280px] object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase">
              <p className="text-[9px] font-semibold tracking-[0.1em]">
                Discover the
              </p>

              <img
                src="src/assets/Images/download (9).svg"
                alt=""
                className="w-25  object-contain"
              />

              <p className="text-[9px] font-semibold tracking-[0.1em]">
                Technology
              </p>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </section>
  );
}

export default Vapora;
