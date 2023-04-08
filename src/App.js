import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddCamp from "./pages/AddCamp";
import AddAdmin from "./pages/AddAdmin";
import AllAdmins from "./pages/AllAdmins";
import AllCamps from "./pages/AllCamps";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path='/addCamp' element={<AddCamp/>}/>
                <Route path='/addAdmin' element={<AddAdmin/>}/>
                <Route path='/allAdmins' element={<AllAdmins/>}/>
                <Route path='/allCamps' element={<AllCamps/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
