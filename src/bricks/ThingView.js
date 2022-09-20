import {Button} from "react-bootstrap";
import {useState} from "react";
import ThingCards from "./ThingCards";
import ThingFormModal from "./ThingFormModal";
import ThingListSimple from "./ThingListSimple";

function ThingView(props) {

    const [viewState, setViewState] = useState("cards")
    const [showModal, setShowModal] = useState(false)

    const handleSwitchView = () => {
        setViewState(old => old === "cards" ? "simple" : "cards")
    }
    const handleAddThing = () => {
        setShowModal(() => true)
    }
    const handleModalHide = () => {
        setShowModal(() => false)
    }
    const handleSubmit = (thing) => {
        props.onThing(thing)
    }

    return (
        <>
            <div className="d-flex gap-3 justify-content-center">
                <Button onClick={handleSwitchView}>
                    Switch View
                </Button>

                <Button onClick={handleAddThing}>
                    Add Thing
                </Button>

                <ThingFormModal show={showModal}
                                onHide={handleModalHide} onSubmit={handleSubmit} />
            </div>

            <hr/>

            {
                viewState === "simple" ?
                    <ThingListSimple things={props.things} /> :
                    null
            }

            {
                viewState === "cards" ?
                    <ThingCards things={props.things} onThing={props.onThing} /> :
                    null
            }
        </>
    );
}

export default ThingView;
