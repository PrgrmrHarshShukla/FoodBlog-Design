import "@fortawesome/fontawesome-free/css/all.css";

function Header() {
   return (
      <div className="w-full px-8 py-4 flex flex-row justify-between items-center z-10 ">
         <i className="fa fa-burger text-black text-2xl"></i>
         <ul className="flex flex-row gap-4 -ml-[30vw] font-semibold">
            <li>Menu</li>
            <li>Lunch Boxes</li>
            <li>Platters</li>
            <li>Special</li>
         </ul>
         <i className="fa fa-search text-black text-xl"></i>
      </div>
   )
}



export default Header