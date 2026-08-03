
function Fitzwr() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
      <div className="w-full sm:w-35 h-25 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
        <p className="uppercase text-gray-400 text-[10px] tracking-wider">
          Technology
        </p>

        <img
          src="/download (9).svg"
          alt="FIT"
          className="w-20 object-contain"
        />
      </div>

      <div className="w-full sm:w-45 h-25 border border-gray-500 rounded-2xl flex flex-col items-center justify-center gap-3">
        <p className="uppercase text-gray-400 text-[10px] tracking-wider">
          Feature
        </p>

        <img
          src="/download (1).svg"
          alt="ZWR"
          className="w-30 object-contain"
        />
      </div>
    </div>
  );
}

export default Fitzwr;
