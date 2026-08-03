import Fitzwr from "../components/common/Fitzwr";
import Form from "../components/common/Form";
import Information from "../components/common/Information";
import ProductFeature from "../components/common/ProductFeature";

function GrandPrix() {
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
    scale-x-100
    scale-y-[0.8]
    [-webkit-text-stroke:1px_#E8FF00]
  "
        >
          Grand Prix
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-20">
          <img
            src="src/assets/Images/imgi_23_cortavientos-pro-team-tibet%40900xauto_r.png.webp"
            alt=""
            className="w-36 sm:w-55 h-auto max-w-[55vw] object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen mt-12 sm:mt-25 flex justify-center items-center pb-10 sm:pb-15 px-4 sm:px-5">
        <div className="bg-black w-full max-w-[780px] rounded-lg pt-6 pb-10 sm:pb-15 space-y-3">
          <h1 className="text-white font-black tracking-wide text-2xl sm:text-3xl text-center">
            Grand Prix
          </h1>
          <p className="text-gray-400 text-[13px] tracking-wider text-center leading-7 sm:leading-8 px-2">
            Light shield fabric for mid-season. <br />
            Very breathable and with absolute wind protection. <br />
            Resistant to abrasion. <br />
            Extremely stretchy, perfect for making slim fit garments. <br />
            Environmentally friendly water repellent treatment (PFAS free). <br />
            Photo: Pro Team jacket by GSPORT (https://gsportapparel.com/) <br />
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

export default GrandPrix;
