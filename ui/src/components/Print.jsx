// import React from 'react';

function Print () {
   const handle = () => {
      window.print();
   }
   return (
      <div>
         <div className="w-[96vw] h-[96vh] border-2 rounded-[5px] border-double border-black mx-[2vw] my-[2vh]">

         </div>
         <div className="">
            <button className="m-20 p-4 border-2 border-black" onClick={handle}>
               Print
            </button>
         </div>

      </div>
   )
}

export default Print