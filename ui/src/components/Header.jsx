import "@fortawesome/fontawesome-free/css/all.css";

function Header() {
   return (
      <div className="w-full pl-20 px-8 py-4 flex flex-row justify-between items-center z-40 ">
         <i className="fa fa-burger text-black text-2xl"></i>
         <ul className="flex flex-row gap-[2vw] font-semibold text-[3vh]">
            <li>Menu</li>
            <li>Lunch Boxes</li>
            <li>Platters</li>
            <li>Special</li>
         </ul>
         <i className="fa fa-search text-white text-xl"></i>
      </div>
   )
}



export default Header