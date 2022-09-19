import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ChildrenExample from "./bricks/ChildrenExample";


function App() {

    return (
        <div className="App p-3">

            <div>
                ahoj
                <div>
                    svete
                    <div>
                        se
                    </div>
                </div>
            </div>

            <hr />

            Example 1

            <ChildrenExample>
                AHOJ
                <div>some more text</div>
            </ChildrenExample>

            <hr />

            Example 2
            <ChildrenExample children={<div>DIV</div>} />

        </div>
    );
}

export default App;
