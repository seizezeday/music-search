import React from 'react';
import Searcher from './Searcher';
import ResultsContainer from './ResultsContainer';
import spotify_api from '../utils/spotify_api';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.searchClicked = this.searchClicked.bind(this);
        this.queryChanged = this.queryChanged.bind(this);
        this.isSearched = false;
        this.state = {
            query: '',
            searchResults: 'Initial search results'
        };
    }

    searchClicked() {
        this.isSearched = true;
        spotify_api.search().then((response) => {
            this.setState({searchResults: response.data});
        })

    }

    queryChanged(e) {
        this.setState({query: e.target.value})
    }

    render() {
        return (
            <div>
                <Searcher query={this.state.query} queryChanged={this.queryChanged} searchClicked={this.searchClicked}/>
                <ResultsContainer isSearched={this.isSearched} searchResults={this.state.searchResults}/>
            </div>
        );
    }

}

export default SearchContainer;
