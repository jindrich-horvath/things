import './theme.sass';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import ThingView from "./bricks/ThingView";
import {useState} from "react";

const THINGS = [
    {
        happy: true,
        wrong: 6,
        id: 1
    },
    {
        happy: false,
        wrong: 1,
        id: 2
    },
    {
        happy: false,
        wrong: 8,
        id: 3
    }
]

let id = 0;

function App() {

    const [things, setThings] = useState(THINGS)

    const doRefreshOnServer = (thing) => {
        if (thing.id) { //edituji
            setThings(things => {
                const index = things.findIndex(el => el.id === thing.id)
                const result = [...things]
                result.splice(index, 1, thing)
                return result
            })
        } else { //vytvarim
            setThings(things => {
                thing = {...thing, id: id++}
                return [...things, thing]
            })
        }
    }

    const handleThing = (thing) => {
        console.log('ON THING', thing)
        doRefreshOnServer(thing)
    }

    return (
        <div className="App p-3">
            <ThingView things={things} onThing={handleThing} />
        </div>
    );
}

export default App;
