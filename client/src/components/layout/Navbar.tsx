import { Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full ">
      {/* //     <nav className="top-0 left-0 z-50 w-full "> */}
      <div className="flex justify-between items-start ">
        {/* left Logo */}
        <Link to="/">
            <div
  className="
    homeBgColor
    rounded-br-[30px]
    sm:rounded-br-[40px]
    md:rounded-br-[50px]
    // lg:rounded-br-[55px]
    w-20
    sm:w-25
    md:w-30
    lg:w-38

    h-16
    sm:h-20
    md:h-24
    lg:h-28

    flex
    items-center
    px-3
  "
>
          <img src="src/assets/Images/download (8).svg" alt="ZeroWind" />
        </div>
        </Link>

        {/* <div className="hidden sm:flex gap-4 bg-zinc-800 rounded-bl-[35px] px-2 h-26 w-89 px-14 items-center gap-12 ">
          <button className="uppercase flex tracking-widest text-[#E8FF00] gap-2 text-sm hover:text-white transition">
            
            technologies
            <span>
              <Plus
                className="  mt-1.5 font-bold"
                size={13}
                strokeWidth={3}
              />{" "}
            </span>
          </button>
          <button className="uppercase tracking-widest flex text-[#E8FF00] gap-2 text-sm hover:text-white transition">
            {" "}
            features{" "}
            <span>
              <Plus
                className=" mt-1.5"
                size={13}
                strokeWidth={3}
              />{" "}
            </span>
          </button>

          <button className="text-[#E8FF00]">
            <Menu size={36} />
          </button>
        </div> */}

        <div
  className="
     flex
    homeBgColor
    rounded-bl-[35px]
    w-[200px]
    md:w-[355px]
    lg:w-[400px]
    h-20
    md:h-24
    px-4
    sm:px-6
    lg:px-8
    2xl:px-10
    md:px-2
    items-center
    justify-center
    gap-2
    md:gap-6
    lg:gap-8    
    
  "
>
  <button className="uppercase flex  items-center tracking-widest textSecondaryColor gap-1 text-xl sm:text-lg md:text-xs hover:text-white transition">
    technologies
    <Plus size={10} strokeWidth={3} />
  </button>

  <button className="uppercase flex items-center tracking-widest textSecondaryColor gap-1 text-xl sm:text-lg md:text-xs hover:text-white transition">
    features
    <Plus size={10} strokeWidth={3} />
  </button>

  <button className="textSecondaryColor">
    <Menu size={20} />
  </button>
</div>

        
      </div>
    </nav>
  );
};

export default Navbar;
