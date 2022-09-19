import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ThingView from "./bricks/ThingView";

const things = [
  {
    happy: true,
    wrong: 6
  },
  {
    happy: false,
    wrong: 1
  },
  {
    happy: false,
    wrong: 8
  }
]

function App() {
  return (
    <div className="App p-3">
      <ThingView things={things} />
    </div>
  );
}

export default App;
