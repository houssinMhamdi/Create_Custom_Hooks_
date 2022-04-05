import { useState } from "react";
import TripList from "./components/TripList";
function App() {
  const [hide, setHied] = useState(true);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={() => setHied(false)}>Hied The Trips</button>
      {hide && <TripList />}
    </div>
  );
}

export default App;
