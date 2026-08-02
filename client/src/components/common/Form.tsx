
function Form() {
  return (
   <div>
      <form className="mt-20 ps-30 pb-20 ">
        {/* Row 1 */}
        <div className="flex gap-15">
          <div>
            <input
              type="text"
              placeholder="Full name *"
              className="w-[350px] bg-transparent border-b border-gray-500 pb-4 text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email *"
              className="w-[350px] bg-transparent border-b border-gray-500 pb-4 text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-15 mt-10">
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="w-[350px] bg-transparent border-b border-gray-500 pb-4 text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company"
              className="w-[350px] bg-transparent border-b border-gray-500 pb-4 text-lg text-gray-300 placeholder-gray-500 outline-none focus:border-[#E8FF00]"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-10">
          <textarea
            rows={4}
            placeholder="Message *"
            className="w-[770px] bg-transparent  border-b border-gray-500 text-lg text-gray-300 placeholder:text-gray-500 outline-none resize-none"
          />
        </div>

        
        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            id="privacy"
            className="
      w-3 h-3
      appearance-none
      border textSecondaryColor
      
      bg-transparent
      checked:bg-[#E8FF00]
      checked:border-black
      cursor-pointer
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
        <button className="mt-10 border border-[#E8FF00] rounded-full px-5 py-2  text-[11px] font-semibold text-[#E8FF00] hover:bg-[#E8FF00] hover:text-black transition">
          Send
        </button>
      </form>
   </div>
  )
}

export default Form