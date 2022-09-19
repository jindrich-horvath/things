import {Card} from "react-bootstrap";


function ChildrenExample({children}) {

    console.log('children', children)

    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>All my children are here:</Card.Title>
                {children} <br />
                Tady je take nejaky text <br />
            </Card.Body>
        </Card>
    );
}

export default ChildrenExample;
