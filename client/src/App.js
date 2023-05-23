import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div>
      <h1>
        E-Commerce
        <Login />
      </h1>
      <Home />
    </div>
  );
}

export default App;
