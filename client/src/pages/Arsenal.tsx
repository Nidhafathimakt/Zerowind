import Fitzwr from "../components/common/Fitzwr";
import Form from "../components/common/Form";
import Information from "../components/common/Information";
import ProductFeature from "../components/common/ProductFeature";

function Arsenal() {
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
          Arsenal
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-20">
          <img
            src="src/assets/Images/imgi_20_web10-05-006-005-rain-jacket-long-sleeve-selkie-unisex-ultrablue-12%40900xauto_r.png.webp"
            alt=""
            className="w-60 h-80"
          />
        </div>
      </div>

      <div className="min-h-screen mt-25 flex justify-center items-center pb-15 ">
        <div className="bg-black w-[780px] rounded-lg  pt-6 pb-15 space-y-3 ">
          <h1 className="text-white font-black tracking-wide text-3xl text-center">
            Arsenal
          </h1>
          <p className="text-gray-400 text-[13px]  tracking-wider text-center leading-8">
            Custom product exclusively for customer. <br />
            Light shield fabric for mid-season. <br />
            Very breathable and with absolute wind protection. <br />
            Resistant to abrasion. <br />
            Extremely stretchy, perfect for making slim fit garments. <br />
            Photo: Selkie jacket by Gobik (gobik.com)
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

export default Arsenal;
