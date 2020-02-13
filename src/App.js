import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxSeries from './components/series/BoxSeries';

class App extends Component {
    render() {
        return ( // Todo o HTML tem q estar detro de App
            <div className="App"> 
                <BoxSeries/>
            </div>
        );
    }
}

export default App;
