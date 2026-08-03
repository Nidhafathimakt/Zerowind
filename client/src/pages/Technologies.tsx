import { Link } from "react-router-dom";

function Technologies() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between gap-6 md:gap-8">
        <Link to="/fit" className="block w-full xl:w-auto">
          <div className="relative w-full">
            <img
              src="/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full xl:w-[600px] xl:max-w-none max-w-full h-[220px] sm:h-[280px] xl:h-[350px] object-cover rounded-lg mx-auto xl:mx-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/download (9).svg"
                alt=""
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </div>
          </div>
        </Link>
        <Link to="/motion" className="block w-full xl:w-auto">
          <div className="relative w-full">
            <img
              src="/imgi_12_shutterstock-560580814%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full xl:w-[600px] xl:max-w-none max-w-full h-[220px] sm:h-[280px] xl:h-[350px] object-cover rounded-lg mx-auto xl:mx-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/download (2).svg"
                alt=""
                className="w-32 sm:w-40 xl:w-50 h-auto object-contain"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between gap-6 md:gap-8">
        <Link to="/power" className="block w-full xl:w-auto">
          <div className="relative w-full">
            <img
              src="/imgi_13_istock-155467403%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full xl:w-[600px] xl:max-w-none max-w-full h-[220px] sm:h-[280px] xl:h-[350px] object-cover rounded-lg mx-auto xl:mx-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/download (3).svg"
                alt=""
                className="w-32 sm:w-40 xl:w-50 h-auto object-contain"
              />
            </div>
          </div>
        </Link>
        <Link to="/brave" className="block w-full xl:w-auto">
          <div className="relative w-full">
            <img
              src="/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full xl:w-[600px] xl:max-w-none max-w-full h-[220px] sm:h-[280px] xl:h-[350px] object-cover rounded-lg mx-auto xl:mx-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/download (5).svg"
                alt=""
                className="w-32 sm:w-40 xl:w-50 h-auto object-contain"
              />
            </div>
          </div>
        </Link>
      </div>

      <Link to="/vapora" className="block w-full">
        <div className="relative w-full">
          <img
            src="/imgi_18_vaporapreview%401320x1020_r.jpeg.webp"
            alt=""
            className="w-full h-[200px] sm:h-[300px] xl:h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/download (6).svg"
              alt=""
              className="w-32 sm:w-40 xl:w-50 h-auto object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Technologies;
