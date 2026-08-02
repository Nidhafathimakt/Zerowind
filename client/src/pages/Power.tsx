import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";

function Power() {
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
            src="src/assets/Images/download (3).svg"
            alt="Power"
            className="w-120 h-auto object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor  pt-24 px-30  ">
        <div>
          <p className="text-[33px] text-white leading-9 font-extrabold ">
           Wind protection is the goal behind <br />
            ZeroWind's POWER fabric line, to which <br />
             we have combined excellent <br />
              breathability and comfortable fit.
          </p>
        </div>

        <div className="mt-20 flex justify-between gap-7 py-15">
          

          <div className="w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_9_Livello-1-4.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Total wind protection
            </p>
          </div>

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
              src="src/assets/Images/imgi_14_icon-55.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Excellent fit
            </p>
          </div>
        </div>

        <div>
          <p className="text-white text-xl ">
            3-layer fabrics with performances guaranteed by a proven, totally PFAS-free <br />
             windproof treatment enclosed between two fabrics to create reliable, <br />
             high-performance garments in a wide range of weights.
          </p>
        </div>

        <div className="flex items-center gap-20 text-center ">
          <video
            src="/cf5ecee7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[500px] h-[250px] object-cover rounded-lg shadow-2xs mt-20"
          />
          <div className="flex flex-col gap-2 textSecondaryColor mt-15">
            <p className="uppercase text-[9px] font-normal">Grams</p>
            <p className="text-3xl font-extrabold">100 a 300</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <img
            src="src/assets/Images/imgi_26_untitled-760%40900xauto_r.png.webp"
            alt=""
            className="w-55 h-70 mt-15 "
          />
          
        </div>
        <ExpertAdvice />
      </div>
        <Link to="/brave">
      <div className="w-full flex  homeBgColor px-5 py-20">
        <div className="relative w-full">
          <img
            src="src/assets/Images/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp"
            alt=""
            className="w-full h-[280px] object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase">
            <p className="text-[9px] font-semibold tracking-[0.1em]">
              Discover the
            </p>

            <img
              src="src/assets/Images/download (5).svg"
              alt=""
              className="w-50  object-contain"
            />

            <p className="text-[9px] font-semibold tracking-[0.1em]">
              Technology
            </p>
          </div>
        </div>
      </div>
      </Link>
    </section>
  )
}

export default Power