import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavgBar from './Components/NavgBar';
import Banner from './Pages/Banner';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import User from './Pages/User';
import './Pages/User.css';
import UploadPaper from './Pages/UploadPaper';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './Pages/About_p';

function App() {
  let routes = (
    <Routes>
      {/* Specify the route path and the corresponding component */}
      <Route path="/" element={<Banner /> } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/uploadpaper" element={<UploadPaper />} />
      {/* <Route path="/uploadanswer" element={<Uploadsample />} /> */}
      {/* <Route path="/simulation" element={<Simulation />}></Route> */}
      {/* <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} /> */}
    </Routes>
  )
  return (
    <Router className="App">
      <main>
        {routes}
      </main>

    </Router>
  );
}

export default App;