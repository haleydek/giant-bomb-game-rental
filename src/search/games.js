import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import CardGroup from 'react-bootstrap/CardGroup';
import GameCard from './gameCard';

class Games extends React.Component {
    render() {
        const { games } = this.props;

        const cards = [];

        for (let key in games) {
            cards.push(
                <GameCard 
                    key={key}
                    title={games[key].name}
                    description={games[key].deck}
                    image={games[key].image.small_url}
                    detailsLink={games[key].api_detail_url}
                />
            )
        }

        return (
            <Container>
                {cards}
            </Container>
        )
    }
    
}

export default Games;