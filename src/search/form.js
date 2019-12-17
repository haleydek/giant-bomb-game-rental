import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {
    state = {
        searchInput: ''
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    render() {
        return (
            <Form>
                <Form.Label>Search Games</Form.Label>
                <Form.Control
                    as='input'
                    type='text'
                    value={this.state.searchInput}
                    onChange={this.handleChange}
                />

                <Button type='submit' value='Search' />
            </Form>
        )
    }
}

export default SearchForm;