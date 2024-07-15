import { Route, Routes } from 'react-router';
import Home from "./Pages/Home/Home";
import SearchResults from "./Pages/SearchResults/SearchResults";
import MyBookings from "./Pages/MyBookings/MyBookings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
}

export default App;
