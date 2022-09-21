import {useContext} from "react";
import {ThingsContext} from "../ThingsProvider";
import {Link} from "react-router-dom";

function ThingListPage() {

    const thingsContext = useContext(ThingsContext)
    const thingList = thingsContext.getAll()

    return (
        <div className="App p-3">
            <h3>All Things</h3>

            <hr />

            <div className="d-flex justify-content-center">
                <p>
                    <ul>
                        {
                            thingList.map(th => {
                                return (
                                    <li key={th.id}>
                                        <Link to={`/one/${th.id}`}>
                                            Thing: {th.id}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default ThingListPage;
