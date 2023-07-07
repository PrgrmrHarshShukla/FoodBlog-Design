import "@fortawesome/fontawesome-free/css/all.css";

function Header() {
   return (
      <div className="w-full sm:pl-20 sm:pr-12 px-4 sm:px-8 py-8 flex flex-row justify-between items-center z-40 ">
         <i className="fa fa-burger text-black text-2xl sm:mr-0 mr-2"></i>
         <ul className="flex flex-row gap-[2vw] font-semibold text-[2vh]">
            <li>Menu</li>
            <li className="hidden sm:block ">Lunch Boxes</li>
            <li>Platters</li>
            <li>Special</li>
         </ul>
         <i className="fa fa-search sm:text-white text-black text-sm sm:text-xl sm:ml-0 ml-1"></i>
      </div>
   )
}



export default Header