import './App.css'
// import noodles from "./noodles.png"
import twoLeaves from "./2_leaves.png"
// import leaves from "./leaves.png"
import Landing from './Landing'

function App() {

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center m-auto bg-gray-800 overflow-hidden z-10">
      <Landing />
      {/* <svg id="svg1" height="80vh" width="50vw">
            <circle cx="700" cy="150" r="200" fill="black" />
      </svg> */}
      {/* <img src={noodles} className="fixed w-1/6 -rotate-45 -translate-x-[15vw] translate-y-[29vh]" /> */}
      <img src={twoLeaves} className="absolute translate-x-80 translate-y-[28vh] rotate-75 w-1/4 h-1/2 z-30" id="bowl" />
      {/* <img src={leaves} className="absolute -translate-x-[10vw] translate-y-[28vh] rotate-75 w-1/4 h-1/2 z-20" id="bowl" /> */}
    

    </div>
  )
}

export default App
