import "./index.css";
import BarChart from "./components/BarChart";
import data from "./output.json"

function App() {
  return (
    <div>
      <h2>Total Time Spent by Features</h2>
      <BarChart data={data} />
    </div>
  );
}

export default App;
