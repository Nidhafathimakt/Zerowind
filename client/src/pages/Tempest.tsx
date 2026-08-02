import Form from "../components/common/Form";
import Information from "../components/common/Information";

function Tempest() {
  return (
    <div className="min-hscreen homeBgColor pt-17">
      <div className="relative mt-20 flex justify-center items-center ">
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
        >
          Tempest
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-20">
          <img
            src="src/assets/Images/imgi_24_untitled-761%40900xauto_r.png.webp"
            alt=""
            className="w-60 h-80"
          />
        </div>
      </div>

      <div className="min-h-screen mt-25  flex justify-center items-center pb-15 ">
        <div className="bg-black w-[780px] rounded-lg  pt-6 pb-15 space-y-6 ">
          <h1 className="text-white font-black tracking-wide text-3xl text-center">
            Tempest
          </h1>
          <p className="text-gray-400 text-[13px]  tracking-wider text-center ">
            Double-sided fabric for cold season. <br />
            Windproof, breathable, elastic, insulating. <br />
            For temperatures from 8° to 15°C
          </p>

          <div className=" flex justify-center gap-12 items-center py-10 ">
            
            <div className="flex flex-col justify-center items-center text-center ">
              <img
                src="src/assets/Images/imgi_9_Livello-1-4.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3">
                Total wind protection
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center ">
              <img
                src="src/assets/Images/imgi_10_Group3-2_1.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3">
                High breathability
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center ">
              <img
                src="src/assets/Images/imgi_11_Livello-1-6_1.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3">
                Thermoregulation
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center justify-center items-center text-center ">
              <img
                src="src/assets/Images/imgi_14_icon-55.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3">
                Excellent fit
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="w-63 h-25 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="uppercase text-gray-400 text-[10px] tracking-wider">
                Technology
              </p>

              <img
                src="src/assets/Images/download (3).svg"
                alt="Power"
                className="w-45 h-auto object-contain"
              />
            </div>

            <div className="w-45 h-25 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="uppercase text-gray-400 text-[10px] tracking-wider">
                Feature
              </p>

              <img
                src="src/assets/Images/download (1).svg"
                alt="ZWR"
                className="w-30 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Information/>
      <Form/>
    </div>
  );
}

export default Tempest;
