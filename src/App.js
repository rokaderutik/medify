import { Route, Routes } from 'react-router';
import Home from "./Pages/Home/Home";
import SearchResults from "./Pages/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/searchresults" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
