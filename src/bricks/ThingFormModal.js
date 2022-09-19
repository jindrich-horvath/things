import {Button, Form, Modal} from "react-bootstrap";
import {mdiWindowClose} from "@mdi/js";
import {useState} from "react";
import Icon from "@mdi/react";


function ThingFormModal() {

    const [formData, setFormData] = useState({
        happy: true,
        wrong: 0
    });

    const [show, setShow] = useState(false)

    //const show = props.show
    //cons onHide = props.onHide
    //...
    // const {show, onHide, onAdd, onEdit} = props

    const handleChange = (inputName, value) => {
        setFormData((fd) => {
            const result = {...fd}
            result[inputName] = value
            return result
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <Button onClick={() => setShow(old => !old)}>
                Add Thing
            </Button>

            <Modal show={show}>
                <Form noValidate onSubmit={handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>Ad/Edit Thing</Modal.Title>
                        <Icon
                            size={1}
                            path={mdiWindowClose}
                            onClick={() => setShow(sh => !sh)}
                        />
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Check label="Happy"
                                        name="happy"
                                        type="checkbox"
                                        onChange={(e) => handleChange("happy", e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Wrong</Form.Label>
                            <Form.Control type="number"
                                          name="wrong"
                                          value={formData.description}
                                          max={10}
                                          onChange={(e) => handleChange("wrong", parseInt(e.target.value))}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit"
                            variant="primary"
                            className="float-end">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ThingFormModal;
