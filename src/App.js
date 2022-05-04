import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import WelcomePage from "./components/WelcomePage";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/welcomepage" element={<WelcomePage/>}></Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
