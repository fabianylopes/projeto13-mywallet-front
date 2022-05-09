import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import UserContext from "./contexts/UserContext";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import Entries from "./components/Transactions/Entries";
import Outs from "./components/Transactions/Outs";
import Records from './components/RecordsPage/Records';

function App(){
    const initialToken = localStorage.getItem('token');
    const initialName = localStorage.getItem('name');

    const [token, setToken] = useState(initialToken);
    const [userName, setUserName] = useState(initialName);

    return (
        <UserContext.Provider value={{ token, setToken, userName, setUserName}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/records" element={<Records/>}></Route>
                    <Route path="/transactions/entry" element={<Entries/>}></Route>
                    <Route path="/transactions/out" element={<Outs/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
