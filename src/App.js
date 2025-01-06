import logo from "./logo.svg";
import "./App.css";
//import { Phone } from "react";
import DemoChildren from "./buoi 3/DemoChildren";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Component /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DemoChildren >
        <h1>Hello world</h1>
        <h1>Green Academy</h1>
      </DemoChildren>
      {/* <CardItem title ="UI/UX design" description ={DESC} icon ="☯"></CardItem> */}
    </div>
  );
}

export default App;
