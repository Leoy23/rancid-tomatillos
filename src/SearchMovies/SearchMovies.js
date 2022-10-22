import React, { Component } from 'react'
import "./SearchMovies.css"

class SearchMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: '',
        }
    }

    handleChange = async (event) => {
        await this.setState({value: event.target.value})
        this.props.searchMovies(this.state.value)
    }

    render() {
        return (
            <section className='search-input-box'>
                <form className='search-input-field'>
                    <input
                    className='search-field'
                    type='text'
                    placeholder='SEARCH MOVIES'
                    name='search bar'
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                </form>
            </section>
            
        )
    }
}

export default SearchMovies;