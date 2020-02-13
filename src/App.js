import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/series/tabelaSeries.css';
import BoxSeries from './components/series/BoxSeries';
import NavBar from './components/navBar';

class App extends Component {
    render() {
        return ( // Todo o HTML tem q estar detro de App
            <div className="App">
                <NavBar/>
                <BoxSeries/>
            </div>
        );
    }
}

export default App;
