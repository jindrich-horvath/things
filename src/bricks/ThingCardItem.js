import {Card} from "react-bootstrap";



function ThingCardItem({thing}) {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{thing.happy ? 'Happy' : 'Sad'} Thing</Card.Title>
          <Card.Text>
            wrongness: {thing.wrong}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default ThingCardItem;
