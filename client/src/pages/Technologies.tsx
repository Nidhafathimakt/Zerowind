import { Link } from "react-router-dom";
function Technologies() {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex justify-between gap-8 ">
        <Link to="/fit">
        <div className="relative " >
          <img
            src="src/assets/Images/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp"
            alt=""
            className="w-[500px] h-[350px] object-cover rounded-lg"
          />
          {/* Fit */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="src/assets/Images/download (9).svg"
              alt=""
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        </Link>
        <Link to="/motion">
        <div className="relative">
          <img
            src="src/assets/Images/imgi_12_shutterstock-560580814%401320x1020_r.jpeg.webp"
            alt=""
            className="w-[500px] h-[350px] object-cover rounded-lg"
          />
          {/* Motion */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="src/assets/Images/download (2).svg"
              alt=""
              className="w-50 h-50 object-contain"
            />
          </div>
        </div>
        </Link>
      </div>

      <div className="flex justify-between gap-8">
        <Link to="/power">
        <div className="relative">
          <img
            src="src/assets/Images/imgi_13_istock-155467403%401320x1020_r.jpeg.webp"
            alt=""
            className="w-[500px] h-[350px] object-cover rounded-lg"
          />
          {/* Power */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="src/assets/Images/download (3).svg"
              alt=""
              className="w-50 h-50 object-contain"
            />
          </div>
        </div>
        </Link>
        <Link to="/brave">
        <div className="relative">
          <img
            src="src/assets/Images/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp"
            alt=""
            className="w-[500px] h-[350px] object-cover rounded-lg"
          />
          {/* Brave */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="src/assets/Images/download (5).svg"
              alt=""
              className="w-50 h-50 object-contain"
            />
          </div>
        </div>
        </Link>
      </div>
      <Link to="/vapora">
      <div className="relative">
        <img
          src="src/assets/Images/imgi_18_vaporapreview%401320x1020_r.jpeg.webp"
          alt=""
          className="w-full h-[300px] object-cover rounded-lg"
        />
        {/* Vapora */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="src/assets/Images/download (6).svg"
            alt=""
            className="w-50 h-50 object-contain"
          />
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Technologies;
