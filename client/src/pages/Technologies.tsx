import { Link } from "react-router-dom";

function Technologies() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between gap-6 md:gap-8">
        {/* <Link to="/fit" className="block w-full xl:w-auto">
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
        </Link> */}
        <Link to="/fit" className="block w-full xl:w-auto">
          <div className="group relative w-full overflow-hidden rounded-lg">
            <img
              src="/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp"
              alt=""
              className="
    w-full
    xl:w-[600px]
    h-[220px]
    sm:h-[280px]
    xl:h-[350px]
    object-cover
    transition-transform
    duration-500
    xl:group-hover:scale-105
  "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/60 transition-all duration-500" />

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 xl:group-hover:-translate-y-10">
              <img
                src="/download (9).svg"
                alt=""
                className="w-20 sm:w-24 object-contain"
              />
            </div>

            {/* Hover Text */}
            <div
              className="
    hidden xl:block
    absolute inset-x-0 bottom-8
    px-8
    text-center
    opacity-0
    translate-y-6
    xl:group-hover:opacity-100
    xl:group-hover:translate-y-0
    transition-all
    duration-500
  "
            >
              <p className="text-white text-lg font-medium leading-relaxed">
                FIT is ZeroWind's line of 2-layer fabrics, perfect for creating
                breathable, fully windproof and waterproof outdoor sportswear
                garments suitable for mid-seasons.
              </p>

              <div className="flex justify-center gap-8 mt-6">
                <div className="flex flex-col items-center">
                  <img src="/imgi_8_icon-334.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Waterproofness</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_9_Livello-1-4.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">
                    Total wind protection
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_10_Group3-2_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">High breathability</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_11_Livello-1-6_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Thermoregulation</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* <Link to="/motion" className="block w-full xl:w-auto">
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
        </Link> */}

        <Link to="/motion" className="block w-full xl:w-auto">
          <div className="group relative w-full overflow-hidden rounded-lg">
            <img
              src="/imgi_12_shutterstock-560580814%401320x1020_r.jpeg.webp"
              alt=""
              className="w-full xl:w-[600px] h-[220px] sm:h-[280px] xl:h-[350px] object-cover transition-transform duration-500 xl:group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/60 transition-all duration-500" />

            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 xl:group-hover:-translate-y-10">
              <img
                src="/download (2).svg"
                alt=""
                className="w-40 object-contain"
              />
            </div>

            <div className="hidden xl:block absolute inset-x-0 bottom-8 px-8 text-center opacity-0 translate-y-6 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-lg leading-relaxed">
                Motion is ZeroWind's line of 3-layer softshell fabrics, perfect
                for making outdoor sportswear for cold weather and in-between
                seasons.
              </p>

              <div className="flex justify-center gap-8 mt-6">
                <div className="flex flex-col items-center">
                  <img src="/imgi_8_icon-334.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Waterproofness</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_9_Livello-1-4.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">
                    Total wind protection
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_10_Group3-2_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">High breathability</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_11_Livello-1-6_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Thermoregulation</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between gap-6 md:gap-8">
        {/* <Link to="/power" className="block w-full xl:w-auto">
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
        </Link> */}

        <Link to="/power" className="block w-full xl:w-auto">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/imgi_13_istock-155467403%401320x1020_r.jpeg.webp"
              className="w-full xl:w-[600px] h-[220px] sm:h-[280px] xl:h-[350px] object-cover transition-transform duration-500 xl:group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/60 transition-all duration-500" />

            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 xl:group-hover:-translate-y-10">
              <img src="/download (3).svg" className="w-40 object-contain" />
            </div>

            <div className="hidden xl:block absolute inset-x-0 bottom-8 text-center px-8 opacity-0 translate-y-6 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-lg">
                Wind protection is the goal behind ZeroWind's POWER fabric line,
                to which we have combined excellent breathability and
                comfortable fit.
              </p>

              <div className="flex justify-center gap-8 mt-6">
                <div className="flex flex-col items-center">
                  <img src="/imgi_9_Livello-1-4.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">
                    Total wind protection
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_10_Group3-2_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">High breathability</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_11_Livello-1-6_1.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Thermoregulation</p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_14_icon-55.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">Excellent fit</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* <Link to="/brave" className="block w-full xl:w-auto">
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
        </Link> */}

        <Link to="/brave" className="block w-full xl:w-auto">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp"
              className="w-full xl:w-[600px] h-[220px] sm:h-[280px] xl:h-[350px] object-cover transition-transform duration-500 xl:group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/60 transition-all duration-500" />

            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 xl:group-hover:-translate-y-10">
              <img src="/download (5).svg" className="w-40 object-contain" />
            </div>

            <div className="hidden xl:block absolute inset-x-0 bottom-8 text-center px-8 opacity-0 translate-y-6 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-lg">
                With the BRAVE fabric line, ZeroWind redefines the concept of
                windproof protective shell.
              </p>

              <div className="flex justify-center gap-8 mt-6">
                <div className="flex flex-col items-center">
                  <img src="/imgi_9_Livello-1-4.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">
                    Total wind protection
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/imgi_16_icon-3.svg"
                    alt=""
                    className="w-10 h-10 brightness-0 invert "
                  />
                  <p className="text-white text-xs mt-2">
                    Minimum bulk and maximum <br />
                    lightness
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/imgi_17_Risorsa-3.svg" className="w-10 h-10 brightness-0 invert" />
                  <p className="text-white text-xs mt-2">
                    Strength and durability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* <Link to="/vapora" className="block w-full">
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
      </Link> */}

      <Link to="/vapora" className="block w-full">
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="/imgi_18_vaporapreview%401320x1020_r.jpeg.webp"
            className="w-full h-[200px] sm:h-[300px] xl:h-[400px] object-cover transition-transform duration-500 xl:group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/60 transition-all duration-500" />

          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 xl:group-hover:-translate-y-10">
            <img src="/download (6).svg" className="w-40 object-contain" />
          </div>

          <div className="hidden xl:block absolute inset-x-0 bottom-10 text-center px-8 opacity-0 translate-y-6 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white text-lg">
              Designed for those who live the outdoors without limits, Vapora is
              the new technical fabric in the ZeroWind range that meets the
              needs of every adventure—from trail running to trekking, from
              cycling to everyday exploration.
            </p>

            <div className="flex justify-center gap-8 mt-6">
              <div className="flex flex-col items-center">
                <img src="/imgi_10_Group3-2_1.svg" className="w-10 h-10 brightness-0 invert" />
                <p className="text-white text-xs mt-2">High breathability</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/imgi_11_Livello-1-6_1.svg" className="w-10 h-10 brightness-0 invert" />
                <p className="text-white text-xs mt-2">Thermoregulation</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/imgi_16_icon-3.svg" alt="" className="w-10 h-10 brightness-0 invert " />
                <p className="text-white text-xs mt-2">
                  Minimum bulk and maximum <br />
                  lightness
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/imgi_19_icon-456.svg" className="w-10 h-10 brightness-0 invert brightness-0 invert" />
                <p className="text-white text-xs mt-2">Insulation</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Technologies;
