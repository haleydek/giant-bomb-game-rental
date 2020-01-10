import React from 'react';
import Card from 'react-bootstrap/Card';

const GameCard = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <div style={{ height: '14rem', overflow: 'hidden' }}>
                <Card.Img
                    variant='top'
                    src={props.image}
                    fluid
                />
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>

    )
}

export default GameCard;