
function ProductFeature() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12 items-center py-6 sm:py-10 px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Images/imgi_8_icon-334.svg"
          alt=""
          className="w-10 h-10 object-contain"
        />
        <p className="text-white text-[11px] tracking-wide mt-3">
          Waterproofness
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Images/imgi_9_Livello-1-4.svg"
          alt=""
          className="w-10 h-10 object-contain"
        />
        <p className="text-white text-[11px] tracking-wide mt-3">
          Total wind protection
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Images/imgi_10_Group3-2_1.svg"
          alt=""
          className="w-10 h-10 object-contain"
        />
        <p className="text-white text-[11px] tracking-wide mt-3">
          High breathability
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Images/imgi_11_Livello-1-6_1.svg"
          alt=""
          className="w-10 h-10 object-contain"
        />
        <p className="text-white text-[11px] tracking-wide mt-3">
          Thermoregulation
        </p>
      </div>
    </div>
  );
}

export default ProductFeature;
