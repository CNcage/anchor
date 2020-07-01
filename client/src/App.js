import React from 'react';
import Reg from './components/Reg'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <div id="form">
                    <Reg />
                </div>
            </div>
        )
    }
}


export default App;