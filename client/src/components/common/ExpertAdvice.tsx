import ContactButton from "./ContactButton";

function ExperAdvice() {
  return (
    <section className="flex flex-col justify-center items-center py-8 sm:py-10 px-4">
      <p className="text-white text-base sm:text-lg text-center">
        Request expert advice on our products and <br className="hidden sm:block" />{" "}
        <span> technologies. </span>
      </p>
      <ContactButton />
    </section>
  );
}

export default ExperAdvice;
