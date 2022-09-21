import {useContext} from "react";
import {ThingsContext} from "../ThingsProvider";
import {Link} from "react-router-dom";

function ThingListPage() {

    const thingsContext = useContext(ThingsContext)
    const thingList = thingsContext.getAll()

    return (
        <div className="App p-3">
            <h3>All Things</h3>

            <hr/>

            <div className="d-flex justify-content-center">
                <ul>
                    {
                        thingList.map(th => {
                            return (
                                <li key={th.id}>
                                    open thing {th.id} with{' '}
                                    <Link to={`/one/${th.id}`}>url params</Link>{' '}
                                    or{' '}
                                    <Link to={`/one2?id=${th.id}`}>url query</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ThingListPage;
