import ThingCardItem from "./ThingCardItem";
import ThingFormModal from "./ThingFormModal";
import {useState} from "react";

function ThingCards(props) {

    const [editingThing, setEditingThing] = useState(null)
    //const [showModal, setShowModal] = useState(false)

    const handleEdit = (thing) => {
        setEditingThing(() => thing)
        //setShowModal(() => true)
    }

    const handleHide = () => {
        setEditingThing(() => null)
    }
    const handleSubmit = (thing) => {
        props.onThing(thing)
    }

    return (
        <div className="d-flex flex-column gap-3 align-items-center">

            Edit Thing
            {/*<ThingFormModal show={showModal} thing={editingThing} onHide={handleHide} />*/}
            <ThingFormModal show={editingThing} thing={editingThing}
                            onHide={handleHide} onSubmit={handleSubmit} />

            {
                props.things.map((th, i) => {
                    return (
                        <ThingCardItem key={i} thing={th} onEdit={handleEdit} />
                    )
                })
            }
        </div>
    );
}

export default ThingCards;
