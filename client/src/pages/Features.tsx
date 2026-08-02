import ContactButton from "../components/common/ContactButton";

function Features() {
  return (
    <div className="min-h-screen pt-10 pb-15 homeBgColor ">
      <section className=" px-5 py-5 mt-10 ">
        <div>
          <div className="relative">
            <video
              src="/0a804172.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" h-86 w-[1000px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
              <img
                src="src/assets/Images/download (1).svg"
                alt=""
                className="w-60 h-50 justify-center items-center"
              />
              <img
                src="src/assets/Images/download (4).svg"
                alt=""
                className="w-20 h-20 justify-center items-center"
              />
            </div>
          </div>
          <div className="px-10 space-y-6 mt-14">
            <h1 className="text-gray-400 uppercase text-[10px] tracking-wider">
              Water Repellent treatment
            </h1>
            <p className="font-extrabold tracking-wide text-3xl leading-8 text-white">
              Our way of proposing Water <br />
              Repellent treatment, in full <br />
              compliance with the <br />
              environment and international <br />
              regulations. The water repellent <br />
              component applied to the fabric <br />
              is totally PFAS-free and ensures <br />
              the garment's breathability and <br />
              quick drying.
            </p>
            <ContactButton />
          </div>
        </div>
        <div className="mt-15">
        <div className="relative">
          <video
            src="/592ec493.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" h-90 w-[1000px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col  items-center justify-center">
            <img
              src="src/assets/Images/download.svg"
              alt=""
              className="w-80 h-auto justify-center items-center"
            />
            <img
              src="src/assets/Images/download (10).svg"
              alt=""
              className="w-20 h-20 justify-center items-center"
            />
          </div>
        </div>
        <div className="px-10 space-y-6 mt-14">
          <h1 className="text-gray-400  uppercase text-[10px] tracking-wider">
            eco-friendly solutions
          </h1>
          <p className="font-extrabold tracking-wide text-3xl leading-8 text-white">
            We care about performance but <br />
            also about the well-being of the <br />
            environment and people, which is <br />
            why we study increasingly <br />
            eco-friendly and planet-friendly <br />
            solutions.ZeroWind fabric lines <br />
            can be produced with polyester <br />
            yarns derived from recycled <br />
            post-consumer materials, and <br />
            are themselves recyclable at the <br />
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
