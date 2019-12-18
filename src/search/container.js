import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/fetchGames';
import Container from 'react-bootstrap/Container';
import SearchForm from './form';
import Games from './games';

class SearchContainer extends React.Component {
    render() {
        const { fetchGames, games } = this.props;
        return (
            <Container>
                <SearchForm fetchGames={fetchGames} />
                <Games games={games} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games.byGuid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: (searchInput) => dispatch(fetchGames(searchInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);