import {Button, Form, Modal} from "react-bootstrap";
import {mdiWindowClose} from "@mdi/js";
import {useEffect, useState} from "react";
import Icon from "@mdi/react";


function ThingFormModal({show, onHide, thing, onSubmit}) {

    const [formData, setFormData] = useState({
        happy: true,
        wrong: 0
    });

    useEffect(() => {
        if (thing) {
            setFormData(thing)
        }
    }, [thing])

    //const show = props.show
    //cons onHide = props.onHide
    //...
    // const {show, onHide, onAdd, onEdit} = props

    const setInput = (inputName, value) => {
        setFormData((fd) => {
            const result = {...fd}
            result[inputName] = value
            return result
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (thing) { //editovat
            alert(`just called server with request to EDIT: { happy: ${formData.happy}, wrong: ${formData.wrong}, id: ${formData.id} }`)
        } else { //vytvarim
            alert(`just called server with request to CREATE: { happy: ${formData.happy}, wrong: ${formData.wrong} }`)
        }

        if (onSubmit)
            onSubmit(formData)

        onHide()
    }

    return (
        <>
            {/*<Button onClick={() => setShow(old => !old)}>*/}
            {/*    Add Thing*/}
            {/*</Button>*/}

            <Modal show={show}>
                <Form noValidate onSubmit={handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>{thing ? 'Edit' : 'Add'} Thing</Modal.Title>
                        <Icon
                            size={1}
                            path={mdiWindowClose}
                            onClick={onHide}
                        />
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Check label="Happy"
                                        name="happy"
                                        type="checkbox"
                                        checked={formData.happy}
                                        onChange={(e) => setInput("happy", e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Wrong</Form.Label>
                            <Form.Control type="number"
                                          name="wrong"
                                          value={formData.wrong}
                                          max={10}
                                          onChange={(e) => setInput("wrong", parseInt(e.target.value))}
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
