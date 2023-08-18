import Form from "./componet/Form"

function App() {
  
  return (
    <>
      <div className="flex w-full h-screen bg-gray-400">
        <div className="w-full m-0 flex items-center justify-center lg:w-1/2">
          <Form />
        </div>
        <div className="hidden lg:flex relative items-center justify-center w-1/2 bg-gray-200 h-full">
          <div className="w-60 h-60 bg-gradient-to-br from-blue-900 to-green-400 rounded-full "></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </>
  )
}

export default App
