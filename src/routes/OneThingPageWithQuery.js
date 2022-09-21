import {useSearchParams} from "react-router-dom";
import {useContext} from "react";
import {ThingsContext} from "../ThingsProvider";

function OneThingPageWithQuery() {

    const [params, _] = useSearchParams();
    const id = params.get("id")
    const thingsContext = useContext(ThingsContext)
    const thing = thingsContext.getById(id)

    return (
        <div className="App p-3">
            <h3>One Thing (id got from url query)</h3>

            <hr />

            Id: {thing.id} <br />
            Happy: {thing.happy ? 'Very' : 'Not At All'} <br />
            Wrong: {thing.wrong}
        </div>
    );
}

export default OneThingPageWithQuery;
