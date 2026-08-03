import Form from "../components/common/Form";
import Information from "../components/common/Information";
import MotionZwr from "../components/common/MotionZwr";
import ProductFeature from "../components/common/ProductFeature";

function BradSoftshell() {
  return (
    <div className="min-hscreen homeBgColor pt-17 overflow-x-hidden">
      <div className="relative mt-12 sm:mt-20 flex justify-center items-center text-center px-4">
        <h1
          className="
    mainFont
    text-[12vw] sm:text-[10vw] xl:text-[12vw]
    font-black
    uppercase
    text-transparent
    leading-none sm:leading-30
    origin-left
    scale-x-100
    scale-y-[0.8]
    [-webkit-text-stroke:1px_#E8FF00]
  "
        >
          Brad Softshell
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-20">
          <img
            src="/imgi_22_ppellejkthy-23-aranci-web%40900xauto_r.png.webp"
            alt=""
            className="w-40 sm:w-60 h-auto max-w-[55vw] object-contain"
          />
        </div>
      </div>

      <div className="min-h-screen mt-12 sm:mt-25 flex justify-center items-center pb-10 sm:pb-15 px-4 sm:px-5">
        <div className="bg-black w-full max-w-[780px] rounded-lg pt-6 pb-10 sm:pb-15 space-y-4 sm:space-y-6">
          <h1 className="text-white font-black tracking-wide text-2xl sm:text-3xl text-center">
            Brad Softshell
          </h1>
          <p className="text-gray-400 text-[13px] tracking-wider text-center leading-7 sm:leading-8 px-2">
            Winter softshell with highly breathable membrane and total wind
            protection. <br />
            High abrasion resistance. <br />
            Very stretchy, perfect for slim fit garments. <br />
            Environmentally friendly water repellent treatment (PFAS free).{" "}
            <br />
            Photo: Heavy Primapelle winter jacket by Pissei (pissei.com) <br />
          </p>
          <ProductFeature />
          <MotionZwr />
        </div>
      </div>
      <Information />
      <Form />
    </div>
  );
}

export default BradSoftshell;
