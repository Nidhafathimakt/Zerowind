import ContactButton from "../components/common/ContactButton";

function Features() {
  return (
    <div className="min-h-screen pt-10 pb-15 homeBgColor overflow-x-hidden">
      <section className="px-4 sm:px-5 py-5 mt-6 sm:mt-10">
        <div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <video
              src="/0a804172.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-52 sm:h-72 md:h-86 w-full xl:w-[1000px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src="src/assets/Images/download (1).svg"
                alt=""
                className="w-40 sm:w-52 xl:w-60 h-auto max-w-[70%] object-contain"
              />
              <img
                src="src/assets/Images/download (4).svg"
                alt=""
                className="w-14 sm:w-16 xl:w-20 h-auto object-contain"
              />
            </div>
          </div>
          <div className="px-2 sm:px-10 space-y-4 sm:space-y-6 mt-8 sm:mt-14 text-center sm:text-left">
            <h1 className="text-gray-400 uppercase text-[10px] tracking-wider">
              Water Repellent treatment
            </h1>
            <p className="font-extrabold tracking-wide text-xl sm:text-2xl xl:text-3xl leading-7 sm:leading-8 text-white">
              Our way of proposing Water <br className="hidden sm:block" />
              Repellent treatment, in full <br className="hidden sm:block" />
              compliance with the <br className="hidden sm:block" />
              environment and international <br className="hidden sm:block" />
              regulations. The water repellent <br className="hidden sm:block" />
              component applied to the fabric <br className="hidden sm:block" />
              is totally PFAS-free and ensures <br className="hidden sm:block" />
              the garment's breathability and <br className="hidden sm:block" />
              quick drying.
            </p>
            <ContactButton />
          </div>
        </div>
        <div className="mt-10 sm:mt-15">
          <div className="relative w-full max-w-[1000px] mx-auto">
            <video
              src="/592ec493.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-52 sm:h-72 md:h-90 w-full xl:w-[1000px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src="src/assets/Images/download.svg"
                alt=""
                className="w-48 sm:w-64 xl:w-80 h-auto max-w-[70%] object-contain"
              />
              <img
                src="src/assets/Images/download (10).svg"
                alt=""
                className="w-14 sm:w-16 xl:w-20 h-auto object-contain"
              />
            </div>
          </div>
          <div className="px-2 sm:px-10 space-y-4 sm:space-y-6 mt-8 sm:mt-14 text-center sm:text-left">
            <h1 className="text-gray-400 uppercase text-[10px] tracking-wider">
              eco-friendly solutions
            </h1>
            <p className="font-extrabold tracking-wide text-xl sm:text-2xl xl:text-3xl leading-7 sm:leading-8 text-white">
              We care about performance but <br className="hidden sm:block" />
              also about the well-being of the <br className="hidden sm:block" />
              environment and people, which is <br className="hidden sm:block" />
              why we study increasingly <br className="hidden sm:block" />
              eco-friendly and planet-friendly <br className="hidden sm:block" />
              solutions.ZeroWind fabric lines <br className="hidden sm:block" />
              can be produced with polyester <br className="hidden sm:block" />
              yarns derived from recycled <br className="hidden sm:block" />
              post-consumer materials, and <br className="hidden sm:block" />
              are themselves recyclable at the <br className="hidden sm:block" />
              end of their lives.
            </p>
            <ContactButton />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
