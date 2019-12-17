import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchGames } from '../actions/fetchGames';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
    state = {
        searchInput: ''
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.fetchGames(this.state.searchInput);

        this.setState({
            searchInput: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>Search Games</Form.Label>
                <Form.Control
                    as='input'
                    type='text'
                    value={this.state.searchInput}
                    onChange={this.handleChange}
                />

                <Button type='submit'>Search</Button>
            </Form>
        )
    }
}

export default connect(null, { fetchGames })(SearchForm);