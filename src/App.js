
import './App.css';
import Signinpage from './components/signin/signin';
import Signuppage from './components/signup/signup';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
          <Routes>
<Route exact path='/' element={<Signinpage />} />
            {/* <Route exact path='/signin' element={<Signuppage />}/> */}
            <Route exact path='/signuppage' element={<Signuppage />} />
           
          </Routes>
          </Router>
        
    </div>
  );
}

export default App;
