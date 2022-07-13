import './App.css';
import Users from './components/Users';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Users />} />
          < Route path="/profile/:id" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
