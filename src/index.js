import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OneThingPage from "./routes/OneThingPage";
import ThingsProvider from "./ThingsProvider";
import ThingListPage from "./routes/ThingListPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThingsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/" element={<ThingListPage/>}/>
                        <Route path="one/:id" element={<OneThingPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThingsProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
