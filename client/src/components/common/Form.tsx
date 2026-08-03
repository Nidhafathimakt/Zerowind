
function Form() {
  return (
    <div>
      <form className="mt-10 sm:mt-20 px-5 sm:px-10 xl:ps-30 pb-10 sm:pb-20 max-w-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-15">
          <div className="w-full min-w-0">
            <input
              type="text"
              placeholder="Full name *"
              className="w-full max-w-full xl:w-[350px] bg-transparent border-b border-gray-500 pb-4 text-base sm:text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>

          <div className="w-full min-w-0">
            <input
              type="email"
              placeholder="Email *"
              className="w-full max-w-full xl:w-[350px] bg-transparent border-b border-gray-500 pb-4 text-base sm:text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-15 mt-8 sm:mt-10">
          <div className="w-full min-w-0">
            <input
              type="text"
              placeholder="Phone"
              className="w-full max-w-full xl:w-[350px] bg-transparent border-b border-gray-500 pb-4 text-base sm:text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>

          <div className="w-full min-w-0">
            <input
              type="text"
              placeholder="Company"
              className="w-full max-w-full xl:w-[350px] bg-transparent border-b border-gray-500 pb-4 text-base sm:text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-8 sm:mt-10 w-full min-w-0">
          <textarea
            rows={4}
            placeholder="Message *"
            className="w-full max-w-full xl:w-[770px] bg-transparent border-b border-gray-500 text-base sm:text-lg text-gray-300 placeholder:text-gray-500 outline-none resize-none"
          />
        </div>

        <div className="flex items-start gap-3 mt-6 max-w-full">
          <input
            type="checkbox"
            id="privacy"
            className="
      w-4 h-4
      min-w-4
      appearance-none
      border textSecondaryColor
      bg-transparent
      checked:bg-[#E8FF00]
      checked:border-black
      cursor-pointer
      mt-0.5
    "
          />

          <label
            htmlFor="privacy"
            className="text-gray-400 text-[12px] tracking-wider"
          >
            Dichiaro di aver lett ed accettat
            <span className="underline decoration-gray-400">
              oil trattamento dei miei dati personali
            </span>
            .
          </label>
        </div>

        {/* Button */}
        <button className="mt-8 sm:mt-10 border border-[#E8FF00] rounded-full px-6 py-3 min-h-[44px] text-[11px] font-semibold text-[#E8FF00] hover:bg-[#E8FF00] hover:text-black transition">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
