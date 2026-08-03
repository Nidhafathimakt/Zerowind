import Form from "../components/common/Form";
import Information from "../components/common/Information";

function Skin() {
  return (
    <div className="min-hscreen homeBgColor pt-17 overflow-x-hidden">
      <div className="relative mt-12 sm:mt-20 flex justify-center items-center px-4">
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
          Skin
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-20">
          <img
            src="/imgi_24_untitled-761%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-60 h-auto max-w-[55vw] object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen mt-12 sm:mt-25 flex justify-center items-center pb-10 sm:pb-15 px-4 sm:px-5">
        <div className="bg-black w-full max-w-[780px] rounded-lg pt-6 pb-10 sm:pb-15 space-y-4 sm:space-y-6">
          <h1 className="text-white font-black tracking-wide text-2xl sm:text-3xl text-center">
            Skin
          </h1>
          <p className="text-gray-400 text-[13px] tracking-wider text-center px-2">
            Versatility between mid and warm season. <br />
            Extremely light weight, protects against wind and light rain. <br />
            For temperatures from 15° to 23°C
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-12 items-center py-6 sm:py-10 px-4 max-w-lg xl:max-w-none mx-auto xl:mx-0">
            <div className="flex flex-col justify-center items-center text-center">
              <img src="/imgi_9_Livello-1-4.svg" alt="" className="w-10 h-10 object-contain" />
              <p className="text-white text-[11px] tracking-wide mt-3">Total wind protection</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src="/imgi_16_icon-3.svg" alt="" className="w-10 h-10 object-contain" />
              <p className="text-white text-[11px] tracking-wide mt-3 text-center">
                Minimum bulk and maximum <br /> lightness
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center sm:col-span-2 xl:col-span-1">
              <img src="/imgi_17_Risorsa-3.svg" alt="" className="w-10 h-10 object-contain" />
              <p className="text-white text-[11px] tracking-wide mt-3">Strength and durability</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <div className="w-full sm:w-50 h-20 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="uppercase text-gray-400 text-[10px] tracking-wider">Technology</p>
              <img src="/download (5).svg" alt="Brave" className="w-28 sm:w-35 h-auto object-contain" />
            </div>
            <div className="w-full sm:w-45 h-20 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="uppercase text-gray-400 text-[10px] tracking-wider">Feature</p>
              <img src="/download (1).svg" alt="ZWR" className="w-30 object-contain" />
            </div>
          </div>
        </div>
      </div>
      <Information />
      <Form />
    </div>
  );
}

export default Skin;
