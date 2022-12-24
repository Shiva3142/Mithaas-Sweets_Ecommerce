import './App.css';
import './Styles/index.scss';
import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from 'react';
import { userInitialState, updateUser } from './Contexts/UserContext';
import { AnimatePresence } from "framer-motion"

let userContext = createContext()
function App() {
    let [login, updateLoginState] = useReducer(updateUser, userInitialState);
    return (
        <AnimatePresence>
            <userContext.Provider value={{ login, updateLoginState }}>
                <Routes>
                </Routes>
            </userContext.Provider>
        </AnimatePresence>
    );
}

export default App;
export { userContext }
