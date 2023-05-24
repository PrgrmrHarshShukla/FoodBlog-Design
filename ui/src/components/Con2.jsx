import bowl from "./bowl.png"
// import leaves from "./leaves.png"


function Con2() {
   
   return (
      <div id="con2" className="relative flex flex-col justify-center overflow-hidden  w-1/2 h-[80vh]">

         {/* <svg id="svg1" height="50vh" width="50vw">
            <circle cx="500" cy="10" r="200" fill="black" />
         </svg> */}

         <img src={bowl} className="absolute translate-x-10 translate-y-20 w-4/5 h-3/4 z-30" id="bowl" />

         <svg id="svg2" height="100vh" width="100vw">
            <circle cx="400" cy="600" r="400" fill="black" />
         </svg>
  


      </div>
   )
}


export default Con2