import {Button} from "react-bootstrap";
import {useState} from "react";
import ThingCards from "./ThingCards";
import ThingFormModal from "./ThingFormModal";
import ThingListSimple from "./ThingListSimple";

function ThingView(props) {

    const [viewState, setViewState] = useState("cards")

    const handleSwitchView = () => {
        setViewState(old => old === "cards" ? "simple" : "cards")
    }

    return (
        <>
            <div className="d-flex gap-3 justify-content-center">
                <Button onClick={handleSwitchView}>
                    Switch View
                </Button>

                <ThingFormModal/>
            </div>

            <hr/>

            {
                viewState === "simple" ?
                    <ThingListSimple things={props.things} /> :
                    null
            }

            {
                viewState === "cards" ?
                    <ThingCards things={props.things}/> :
                    null
            }
        </>
    );
}

export default ThingView;
