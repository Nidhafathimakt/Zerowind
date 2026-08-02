import ContactButton from "./ContactButton"


function ExperAdvice() {
  return (
    <section className="flex flex-col justify-center items-center   py-10">
        <p className="text-white text-lg text-center">
          Request expert advice on our products and <br />{" "}
          <span className=""> technologies. </span>
        </p>
          <ContactButton/>
        
      </section>
  )
}

export default ExperAdvice