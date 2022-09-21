import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ThingsContext} from "../ThingsProvider";

function OneThingPage() {

    const params = useParams()
    const id = params.id
    const thingsContext = useContext(ThingsContext)
    const thing = thingsContext.getById(id)

    return (
        <div className="App p-3">
            <h3>One Thing</h3>

            <hr />

            Id: {thing.id} <br />
            Happy: {thing.happy ? 'Very' : 'Not At All'} <br />
            Wrong: {thing.wrong}
        </div>
    );
}

export default OneThingPage;
