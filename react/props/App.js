import logo from './logo.svg';
import './App.css';
import Author from'./Author';
import { Component } from 'react';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
         
          <h1>welcome</h1>

          <Author authorname = "xyz"/>

      </header>
    </div>
  );
}
}



export default App;
