import { images } from "../../../public/images";

const Navbar = ({
  className,
  nav,
  setNav,
}: {
  className: string;
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navMenu = [
    {
      path: "home",
      title: "Home",
      icon: images.Home(
        "h-7 group-hover:!fill-white group-hover:!stroke-white w-7"
      ),
    },
    {
      path: "resume",
      title: "Resume",
      icon: images.Resume("h-7 group-hover:stroke-white w-7"),
    },
    {
      path: "skill",
      title: "Skill",
      icon: images.Work(
        "h-7 group-hover:!fill-white group-hover:!stroke-white  w-7"
      ),
    },
    {
      path: "contact",
      title: "Contact",
      icon: images.Contact(
        "h-7 group-hover:fill-white group-hover:!stroke-white  w-7"
      ),
    },
  ];

  return (
    <header
      className={`${className} w-full lg:w-[526px]  h-[130px]  p-[30px] ml-auto mb-5 rounded-[16px] bg-[#fff]`}
    >
      <nav className="">
        <ul className="flex ">
          {navMenu.map((item, idx) => (
            <span
              key={idx}
              className={`w-full h-20 rounded-[10px] group  cursor-pointer  font-poppins  bg-[#e9e9e9]  font-medium mx-2.5  text-xtiny text-gray-lite   justify-center flex flex-col items-center   transition-all duration-300 ease-in-out  ${item.path === nav && "!text-white !fill-white !stroke-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476]"} text-black fill-black stroke-black     hover:!text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] `}
              onClick={() => setNav(item.path)}
            >
              <span className="text-xl mb-1 font-semibold !font-edu">
                {item.icon}
              </span>
              {item.title}
            </span>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
