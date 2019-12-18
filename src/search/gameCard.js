import React from 'react';
import Card from 'react-bootstrap/Card';

const GameCard = (props) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={props.image}
                thumbnail
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>

    )
}

export default GameCard;