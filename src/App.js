import React from 'react';
import Main from "./components/MainPage/Main";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import './App.css'
import Actors from "./components/Actors/Actors";
import 'antd/dist/antd.css';


function App() {
    return (
        <div className='App'>
            <div className='blur'></div>
            <div className='container'>
                <Header/>
                <div className='screen'>
                    <Route path='/ ' render={() => <Main/>}/>
                    <Route path='/actors' render={() => <Actors/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
