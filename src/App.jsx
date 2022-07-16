import HomePage from "./page/Home";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
