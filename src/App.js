import './App.css';
import './Loginpage.css';
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Loginpage from './Loginpage';
import Signinpage from './Signinpage';
import Test from './components/Test';
import Homepage from './Homepage';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Loginpage />}/> 
          <Route path="/" element={<Loginpage />}/>
          <Route path="/Signinpage" element={<Signinpage />}/>
          <Route path="/Homepage" element={<Homepage />}/>
        </Routes>
    </Router>
    {/* <Test /> */}
    </div>
  );
}

export default App;
