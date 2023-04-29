import React from "react"
import Hero from "./components/Hero"
import FileUpload from './components/FileUpload'
import Graph from "./components/Graph"

function App() {
  
  return (
    
   <div className="container w-full h-screen bg-slate-200 ">
      <Hero />
      <FileUpload />
      <Graph />

   </div>
  )
}

export default App
