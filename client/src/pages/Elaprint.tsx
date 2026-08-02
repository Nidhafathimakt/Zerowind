import Form from "../components/common/Form"
import Information from "../components/common/Information"
import MotionZwr from "../components/common/MotionZwr"
import ProductFeature from "../components/common/ProductFeature"


function Elaprint() {
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
          Elaprint
        </h1>

        <div className="absolute inset-0 flex items-center justify-center py-20">
          <img
            src="src/assets/Images/imgi_25_untitled-759%40900xauto_r.png.webp"
            alt=""
            className="w-60 h-80"
          />
        </div>
      </div>

      <div className="min-h-screen mt-25 flex justify-center items-center pb-15 ">
        <div className="bg-black w-[780px] rounded-lg  pt-6 pb-15 space-y-6 ">
          <h1 className="text-white font-black tracking-wide text-3xl text-center">
            Elaprint
          </h1>
          <p className="text-gray-400 text-[13px]  tracking-wider text-center ">
           Winter will no longer stand in the way of your outings with Elaprint ZWR. <br />
Windproof, breathable, rainproof, insulating and elastic. <br />
For temperatures from -1° to 8°C
          </p>
    <ProductFeature/>
        
          <MotionZwr/>
        </div>
      </div>
      <Information/>
      <Form/>
    </div>
  )
}

export default Elaprint