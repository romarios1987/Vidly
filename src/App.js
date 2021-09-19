import React from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
import Movies from "./components/Movies";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";


function App() {
    return (
        <div className="app">
            <NavBar/>
            <div className="content mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ListGroup/>
                        </div>
                        <div className="col-md-8">
                            <Movies/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
