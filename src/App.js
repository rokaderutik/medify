import { Route, Routes } from 'react-router';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/searchresults" element={""} /> */}
      </Routes>
    </div>
  );
}

export default App;
