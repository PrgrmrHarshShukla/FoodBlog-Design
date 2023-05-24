import "@fortawesome/fontawesome-free/css/all.css";



function Con1() {
   let title = `CHEF'S SPECIAL`
   return (
   <div className=" rounded-[10px]  h-[80vh] w-2/3  px-20 flex flex-col justify-start z-10 mt-[9vh]">


      <h4 className="max-w-[200px] text-left text-red-500 font-semibold text-lg">{title}</h4>
      <h1 className="max-w-[300px] text-left text-5xl font-bold mt-2">Freshness</h1>
      <h1 className="max-w-[300px] text-left text-5xl font-bold mb-4">in every bite</h1>

      <p className="max-w-[300px] text-left text-sm mb-4 mt-4">Healthy Sashimi Tuna Bites with Sashimi grade </p>
      <p className="max-w-[300px] text-left text-sm mb-8">Tuna, 110 calories and 13g protein.</p>

      <button className="text-[2vh] text-center text-white border-2 border-black rounded-full bg-black w-1/2 px-8 py-4">Download App</button>


   </div>
   )
}

export default Con1