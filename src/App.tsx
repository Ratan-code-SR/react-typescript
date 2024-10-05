
import './App.css';
import DataFetch from './components/DataFetch';
// import User from './components/User';
// import UserDemo from './components/UserDemo';

function App() {
  // const users = [
  //   {
  //     id:101,
  //     name:"ratan",
  //     email:"ratan56@gmail.com",
  //     age:43
  //   },
  //   {
  //     id:102,
  //     name:"kobita",
  //     email:"kobita56@gmail.com",
  //     age:29
  //   },
  //   {
  //     id:103,
  //     name:"mita",
  //     email:"mita56@gmail.com",
  //     age:13
  //   },
  // ]
  return (
    <div className="App">
      {/* <User name="Ratan chakma" age={23} isStudent="true" language='Chakma' /> 
      */}
      <h1>User management</h1>
      {/* <UserDemo user={users}/> */}
      <DataFetch status="error"/>
    </div>
  );
}

export default App;
