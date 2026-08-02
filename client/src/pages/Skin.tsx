import Form from "../components/common/Form"
import Information from "../components/common/Information"


function Skin() {
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
          Skin
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
            Skin
          </h1>
          <p className="text-gray-400 text-[13px]  tracking-wider text-center ">
           Versatility between mid and warm season. <br />
Extremely light weight, protects against wind and light rain. <br />
For temperatures from 15° to 23°C
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
                src="src/assets/Images/imgi_16_icon-3.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3 text-center">
               Minimum bulk and maximum <br /> lightness
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center ">
              <img
                src="src/assets/Images/imgi_17_Risorsa-3.svg"
                alt=""
                className="w-10 h-10 object-contain"
              />
              <p className="text-white text-[11px] tracking-wide mt-3">
                Strength and durability
              </p>
            </div>
            
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="w-50 h-20 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="uppercase text-gray-400 text-[10px] tracking-wider">
                Technology
              </p>

              <img
                src="src/assets/Images/download (5).svg"
                alt="Brave"
                className="w-35 h-auto object-contain"
              />
            </div>

            <div className="w-45 h-20 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
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
  )
}

export default Skin