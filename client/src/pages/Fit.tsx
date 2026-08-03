import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";

function Fit() {
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
          <p className="uppercase text-white text-xs sm:text-sm tracking-[0.3em]">
            Technology
          </p>

          <img
            src="/download (9).svg"
            alt="Fit"
            className="w-32 sm:w-44 xl:w-52 h-auto object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor pt-16 sm:pt-24 px-5 sm:px-10 xl:px-30">
        <div>
          <p className="text-2xl sm:text-3xl xl:text-4xl text-white font-extrabold text-center xl:text-left leading-snug">
            FIT is ZeroWind's line of 2-layer fabrics, <br className="hidden sm:block" /> perfect for
            creating breathable, fully <br className="hidden sm:block" /> windproof and waterproof outdoor{" "}
            <br className="hidden sm:block" /> sportswear garments suitable for <br className="hidden sm:block" /> mid-seasons.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7 py-8 sm:py-15">
          <div className="w-full xl:w-[318px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img
              src="/imgi_8_icon-334.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Waterproofness
            </p>
          </div>

          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img
              src="/imgi_9_Livello-1-4.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Total wind protection
            </p>
          </div>

          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img
              src="/imgi_10_Group3-2_1.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              High breathability
            </p>
          </div>

          <div className="w-full xl:w-[300px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center mx-auto xl:mx-0">
            <img
              src="/imgi_11_Livello-1-6_1.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Thermoregulation
            </p>
          </div>
        </div>

        <div>
          <p className="text-white text-base sm:text-lg xl:text-xl text-center xl:text-left">
            The construction of these fabrics and their totally PFAS-free
            hydrophilic <br className="hidden xl:block" /> membrane create garments that combine high
            performance with extraordinary <br className="hidden xl:block" /> comfort that enhances the
            technicality of the material. <br className="hidden xl:block" />
            As confirmed by laboratory tests, this technology promotes the
            passage of <br className="hidden xl:block" /> moisture to the outside through osmosis, and
            breathability increases dynamically <br className="hidden xl:block" /> as the exertion
            intensifies, keeping the inside of the garment dry.
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
            <p className="text-3xl font-extrabold">50 a 150</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-55 h-auto mt-10 sm:mt-15 object-contain"
          />
          <img
            src="/imgi_25_untitled-759%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-55 h-auto mt-16 sm:mt-25 object-contain"
          />
          <img
            src="/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-53 h-auto mt-16 sm:mt-25 object-contain"
          />
        </div>
        <ExpertAdvice />
      </div>
      <Link to="/motion">
        <div className="w-full flex homeBgColor px-4 sm:px-5 py-12 sm:py-20">
          <div className="relative w-full">
            <img
              src="/Motion.webp"
              alt=""
              className="w-full h-[200px] sm:h-[280px] object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase px-4">
              <p className="text-[9px] font-semibold tracking-[0.1em]">
                Discover the
              </p>

              <img
                src="/download (2).svg"
                alt=""
                className="w-40 sm:w-70 object-contain max-w-[80%]"
              />

              <p className="text-[9px] font-semibold tracking-[0.1em]">
                Technology
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Fit;
