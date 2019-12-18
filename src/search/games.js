import React from 'react';
import { connect } from 'react-redux';

class Games extends React.Component {
    render() {
        return (
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Games);