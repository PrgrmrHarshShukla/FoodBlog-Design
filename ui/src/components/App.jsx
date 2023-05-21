import './App.css'
import Landing from './Landing'

function App() {

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center m-auto bg-gray-800 overflow-hidden z-10">
      <Landing />
      <img src="https://img.freepik.com/premium-photo/green-floating-leaves-flying-leaves-green-leaf-dancing-air-purifier-atmosphere-simple-main-picturex9_36051-838.jpg" className="fixed z-0 w-[40vw] h-40  translate-y-40 translate-x-60" />

    

    </div>
  )
}

export default App
