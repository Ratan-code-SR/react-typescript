
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <User name="Ratan chakma" age={23} isStudent="true" language='Chakma' />
    </div>
  );
}

export default App;
