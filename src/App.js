import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Events from './pages/events';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Events/>
      <Login/>
    </div>
  );
}

export default App;


// import React, { Component } from 'react'
// import firebase from './utilits/firebase'
// import 'firebase/messaging';

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }
//   componentDidMount() {
//     const messaging = firebase.messaging()
//     messaging.requestPermission().then(() => {
//       return messaging.getToken()
//     }).then(token => {
//       console.log("Token ", token);
//     }).catch((err) => {
//       console.log("error ", err);
//     })
//   }
//   render() {
//     return (
//       <div>
//         hello
//       </div>
//     )
//   }
// }
