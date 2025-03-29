import logo from "../assets/logo-for-website-of-an-AI-model-named-GenAI.png";
import { toggle } from "../store/theme/slice";
import { useDispatch } from "react-redux";
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="text-gray-600 dark:bg-gray-800 body-font fixed top-0 left-0 right-0 bg-white">
      <div className="container mx-auto flex flex-wrap py-2 px-4 flex-col md:flex-row items-center">
        <a
          href="#"
          className="flex title-font font-medium items-center -space-x-4 md:-space-x-2 text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} alt="" className="w-auto h-20 rounded-full" />
          <span className="ml-3 text-xl sm:text-2xl lg:text-4xl dark:text-white font-bebas-neue">Gen Ai</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 font-bold">
            First Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 font-bold">
            Second Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 font-bold">
            Third Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900 cursor-pointer dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 font-bold">
            Fourth Link
          </a>
        </nav>
        <button
          onClick={() => dispatch(toggle())}
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none cursor-pointer rounded text-base mt-4 md:mt-0"
        >
          <CgDarkMode
            className={`dark:rotate-180 transition-all duration-100 dark:text-purple-400 text-purple-800 text-4xl`}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
