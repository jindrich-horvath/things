import './App.css';
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

function App() {

    return (
        <div className="App p-3">
            <h1>Things</h1>

            <hr />

            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default App;
