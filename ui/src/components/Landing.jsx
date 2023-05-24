import Con1 from "./Con1"
import Con2 from "./Con2"
import Header from "./Header"


function Landing() {
   return (
      <div className="w-[90vw] h-[90vh] lg:w-[70vw] border-2 border-gray-800  bg-white rounded-[20px]  gap-2 flex flex-col overflow-hidden"  id="main">
         <Header />
         <div className="flex flex-row">
            <Con1 />
            <Con2 />
         </div>
      </div>
   )
}

export default Landing