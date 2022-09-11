import Polygon from "./Components/polygon/polygon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startpage from "./Components/startpage/startpage";
import { useState } from "react";

function App() {
  const [palygonValue,setpalygonValue] = useState()
  const [nameplaer1,setnameplaer1] = useState('')
  const [nameplaer2,setnameplaer2] = useState('')
  const [bot,setbot] = useState(false)
 
  const setBot =()=>{
    setbot(!bot)
      setnameplaer2("Компьютер")
  }
  const getplayValue =(e)=>{
    if(e.target.name==="nameplaer1"){
      setnameplaer1(e.target.value)
    } else{
      setnameplaer2(e.target.value)
     }
    }
  const getPalygonValue =(e)=>{
    setpalygonValue(parseInt(e.target.value, 10))
   }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Startpage getPalygonValue={getPalygonValue} setbot={setBot} swichbottest={bot} getplayValue={getplayValue} nameplaer1={nameplaer1} nameplaer2={nameplaer2} palygonValue={palygonValue}/>}/>  
            <Route path="/game" element={<Polygon palygonValue={palygonValue} nameplaer1={nameplaer1} nameplaer2={nameplaer2} swichbottest={bot}/>} />  
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
