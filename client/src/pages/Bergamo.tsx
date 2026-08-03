import Fitzwr from "../components/common/Fitzwr";
import Form from "../components/common/Form";
import Information from "../components/common/Information";
import ProductFeature from "../components/common/ProductFeature";

function Bergamo() {
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
          Bergamo
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-20">
          <img
            src="src/assets/Images/imgi_21_untitled-758%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-60 h-auto max-w-[55vw] object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen mt-12 sm:mt-25 flex justify-center items-center pb-10 sm:pb-15 px-4 sm:px-5">
        <div className="bg-black w-full max-w-[780px] rounded-lg pt-6 pb-10 sm:pb-15 space-y-4 sm:space-y-6">
          <h1 className="text-white font-black tracking-wide text-2xl sm:text-3xl text-center">
            Bergamo
          </h1>
          <p className="text-gray-400 text-[13px] tracking-wider text-center px-2">
            Fabric developed for mid season. <br />
            Windproof, breathable, water-resistant and very elastic. <br />
            For temperatures from 9° to 15°C
          </p>
          <ProductFeature />
          <Fitzwr />
        </div>
      </div>
      <Information />
      <Form />
    </div>
  );
}

export default Bergamo;
