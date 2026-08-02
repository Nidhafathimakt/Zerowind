import ExpertAdvice from "../components/common/ExpertAdvice";
import { Link } from "react-router-dom";
function Fit() {
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
          <p className="uppercase text-white text-sm tracking-[0.3em]">
            Technology
          </p>

          <img
            src="src/assets/Images/download (9).svg"
            alt="Fit"
            className="w-52 h-52 object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen homeBgColor  pt-24 px-30  ">
        <div>
          <p className="text-4xl text-white font-extrabold">
            FIT is ZeroWind's line of 2-layer fabrics, <br /> perfect for
            creating breathable, fully <br /> windproof and waterproof outdoor{" "}
            <br /> sportswear garments suitable for <br /> mid-seasons.
          </p>
        </div>

        <div className="mt-20 flex justify-between gap-7 py-15">
          <div className="w-[318px] h-[118px] border border-[#E8FF00] rounded-xl flex flex-col items-center justify-center">
            <img
              src="src/assets/Images/imgi_8_icon-334.svg"
              alt=""
              className="w-9 h-10 object-contain"
            />
            <p className="text-white text-[11px] tracking-wide mt-3">
              Waterproofness
            </p>
          </div>

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
        </div>

        <div>
          <p className="text-white text-xl ">
            The construction of these fabrics and their totally PFAS-free
            hydrophilic <br /> membrane create garments that combine high
            performance with extraordinary <br /> comfort that enhances the
            technicality of the material. <br />
            As confirmed by laboratory tests, this technology promotes the
            passage of <br /> moisture to the outside through osmosis, and
            breathability increases dynamically <br /> as the exertion
            intensifies, keeping the inside of the garment dry.
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
            <p className="text-3xl font-extrabold">50 a 150</p>
            <p className="text-[9px] font-normal">gr/m2</p>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center">
          <img
            src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
            alt=""
            className="w-55 h-70 mt-15 "
          />
          <img
            src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
            alt=""
            className="w-55 h-70 mt-25"
          />
          <img
            src="src/assets/Images/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp"
            alt=""
            className="w-53 h-80 mt-25"
          />
        </div>
        <ExpertAdvice />
      </div>
    <Link to="/motion">
      <div className="w-full flex  homeBgColor px-5 py-20">
        
          <div className="relative w-full">
            <img
              src="src/assets/Images/Motion.webp"
              alt=""
              className="w-full h-[280px] object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white uppercase">
              <p className="text-[9px] font-semibold tracking-[0.1em]">
                Discover the
              </p>

              <img
                src="src/assets/Images/download (2).svg"
                alt=""
                className="w-70  object-contain"
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
