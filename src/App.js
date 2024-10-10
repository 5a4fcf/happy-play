import logo from './esat-mock-logo.png';
import './App.css';
import SignInForm from './Components/SignInForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <SignInForm></SignInForm>
      </body>
    </div>
  );
}

export default App;
