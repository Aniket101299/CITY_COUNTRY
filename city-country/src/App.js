import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Forms } from './Components/Forms/Forms';
import { Home } from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add-country" element={<Forms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
