import bowl from "./bowl.png"
// import leaf from "./leaf.png"
import leaves from "./leaves.png"



function Con2() {
   
   return (
      <div id="con2" className="relative flex flex-col justify-center overflow-hidden  w-2/3 h-[80vh]">


         <img src={leaves} className="absolute -translate-x-40 -translate-y-10 w-2/3 h-1/3 z-30" id="bowl" />   
         <img src={bowl} className="absolute -translate-x-10 -translate-y-10 w-11/12 h-10/12 z-30" id="bowl" />
         <img src={leaves} className="absolute -translate-x-40 translate-y-40 w-2/3 h-1/3 z-30" id="bowl" />
     

      


      </div>
   )
}


export default Con2