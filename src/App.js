import Conuter from "./components/Conuter";
import Input from "./components/Input";

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import UserLists from './components/UserLists'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Conuter/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/users" element={<UserLists/>}/>
      </Routes>
    </Router>
  );
}

export default App;
