import "./App.css"
import MyThali from "./component/MyThali";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoyalThali from "./component/pages/RoyalThali";

const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
     
      {/* <MyThali/> */}
      <Routes>
        <Route exact path="/" element={<MyThali/>}></Route>
        <Route exact path="/royalthali" element={<RoyalThali/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App;