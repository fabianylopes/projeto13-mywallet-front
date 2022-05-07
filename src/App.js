import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from "./contexts/UserContext";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import Entries from "./components/Transactions/Entries";
import Outs from "./components/Transactions/Outs";
import RecordsPage from './components/RecordsPage';

function App(){


    const [token, setToken] = useState();

    return (
        <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/records" element={<RecordsPage/>}></Route>
                    <Route path="/entries" element={<Entries/>}></Route>
                    <Route path="/outs" element={<Outs/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
