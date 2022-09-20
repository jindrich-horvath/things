import {Button, Card} from "react-bootstrap";


function ThingCardItem({thing, onEdit}) {

    const handleEdit = () => {
        onEdit(thing)
    }

    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{thing.happy ? 'Happy' : 'Sad'} Thing</Card.Title>
                <Card.Text>
                    wrongness: {thing.wrong}
                </Card.Text>
                <Button onClick={handleEdit}>
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ThingCardItem;
