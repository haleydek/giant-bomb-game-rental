import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import GameCard from './gameCard';
import generate from '@babel/generator';

class Games extends React.Component {
    generateGameCards = (games, numOfColumns) => {
        const columnWidth = Math.floor(12 / numOfColumns);
        const cards = []

        for (let key in games) {
            cards.push(
                <Col sm={columnWidth}>
                    <GameCard 
                        key={key}
                        title={games[key].name}
                        description={games[key].deck}
                        image={games[key].image.small_url}
                        detailsLink={games[key].api_detail_url}
                    />
                </Col>
            );
        }

        return cards;
    }

    render() {
        const { games } = this.props;
        const numOfColumns = 3;
        const gameCards = this.generateGameCards(games, numOfColumns);

        return (
            <Container>{
                gameCards.map((gameCard, idx) => {
                    if ((idx + numOfColumns) % numOfColumns === 0) {
                        return (
                            <Row>{
                                gameCards.slice(idx, (idx + numOfColumns)).map(card => card)
                            }</Row>
                        )
                    }
                })
            }</Container>
        )
    }
    
}

export default Games;